import {
    API,
    ASTPath,
    Collection,
    FileInfo,
    Identifier,
    ImportDeclaration,
    JSCodeshift,
    Node,
    TemplateLiteral,
    TSTypeReference
} from 'jscodeshift';
import { Options } from 'recast';

const ColorsToCssVariablesMap = {
    WHITE: 'var(--wave-b-color-white)',
    BLACK: 'var(--wave-b-color-black)',
    AUTHENTIC_BLUE_1100: 'var(--wave-b-color-blue-primary-1100)',
    AUTHENTIC_BLUE_900: 'var(--wave-b-color-blue-primary-900)',
    AUTHENTIC_BLUE_550: 'var(--wave-b-color-blue-primary-550)',
    AUTHENTIC_BLUE_350: 'var(--wave-b-color-blue-primary-350)',
    AUTHENTIC_BLUE_200: 'var(--wave-b-color-blue-primary-200)',
    AUTHENTIC_BLUE_50: 'var(--wave-b-color-blue-primary-50)',
    FREEDOM_RED_1000: 'var(--wave-b-color-red-1000)',
    FREEDOM_RED_900: 'var(--wave-b-color-red-900)',
    ACTION_BLUE_1000: 'var(--wave-b-color-blue-secondary-1000)',
    ACTION_BLUE_900: 'var(--wave-b-color-blue-secondary-900)',
    ACTION_BLUE_350: 'var(--wave-b-color-blue-secondary-350)',
    ACTION_BLUE_150: 'var(--wave-b-color-blue-secondary-150)',
    ACTION_BLUE_100: 'var(--wave-b-color-blue-secondary-100)',
    ACTION_BLUE_50: 'var(--wave-b-color-blue-secondary-50)',
    BUMPY_MAGENTA_1000: 'var(--wave-b-color-magenta-1000)',
    BUMPY_MAGENTA_900: 'var(--wave-b-color-magenta-900)',
    BUMPY_MAGENTA_350: 'var(--wave-b-color-magenta-350)',
    BUMPY_MAGENTA_50: 'var(--wave-b-color-magenta-50)',
    POSITIVE_GREEN_1000: 'var(--wave-b-color-green-1000)',
    POSITIVE_GREEN_900: 'var(--wave-b-color-green-900)',
    POSITIVE_GREEN_350: 'var(--wave-b-color-green-350)',
    POSITIVE_GREEN_50: 'var(--wave-b-color-green-50)',
    ATTENTION_YELLOW_900: 'var(--wave-b-color-yellow-900)',
    ATTENTION_YELLOW_350: 'var(--wave-b-color-yellow-350)',
    ATTENTION_YELLOW_50: 'var(--wave-b-color-yellow-50)',
    NEGATIVE_ORANGE_1000: 'var(--wave-b-color-orange-1000)',
    NEGATIVE_ORANGE_900: 'var(--wave-b-color-orange-900)',
    NEGATIVE_ORANGE_350: 'var(--wave-b-color-orange-350)',
    NEGATIVE_ORANGE_50: 'var(--wave-b-color-orange-50)'
};

const CSS_VARS_COLORS_TYPE_NAME = 'ReadCssColorVariable';
const CSS_VARS_COLORS_REPLACEMENT_TYPE = `${CSS_VARS_COLORS_TYPE_NAME} | (string & {})`;
const ESLINT_DISABLE_COMMENT =
    ' eslint-disable-next-line @typescript-eslint/ban-types you can remove this comment and only use the `ReadCssColorVariable` type after changing the bare colors to `getSemanticValue`';

const replaceColorsForCssVarsInTemplateLiterals = (
    j: JSCodeshift,
    localColorNames: string[],
    templateLiteral: TemplateLiteral
) => {
    const { quasis } = templateLiteral;
    const { expressions } = templateLiteral;

    const expressionsToRemoveIndexes: number[] = [];
    const quasisToRemoveIndexes: number[] = [];

    // Iterate over the quasis of the template string (the parts before the `${` and after the `}`)
    // e.g. in the template string `color: ${Colors.x};` there are 2 quasis, `color: ` and `;`, the `Colors.x` is an expression
    quasis.forEach((el, index) => {
        const expressionAfterQuasis = expressions[index];

        // Check if there are arrow functions inside the template string, since they can also have nested template string
        if (expressionAfterQuasis && expressionAfterQuasis.type === 'ArrowFunctionExpression') {
            const templateExpressions = j(expressionAfterQuasis).find(j.TemplateLiteral);

            // For every template string in the arrow function recursively replace colors for css vars
            templateExpressions.forEach(ex => replaceColorsForCssVarsInTemplateLiterals(j, localColorNames, ex.node));
        }

        // Check if the expression is a MemberExpression (regular object property access)
        if (expressionAfterQuasis && expressionAfterQuasis.type === 'MemberExpression') {
            const expressionObject = expressionAfterQuasis.object as Identifier;

            // Identify if it's a usage of Colors
            const isColorsExpression = localColorNames.includes(expressionObject.name);

            if (isColorsExpression) {
                // Find the color being used
                const color = (expressionAfterQuasis.property as Identifier).name;
                const cssVar: string = ColorsToCssVariablesMap[color];

                if (!cssVar) return;

                const nextQuasisValue = quasis[index + 1].value.raw;
                // Append the mapped css var and the value of the next quasis to the end of the current quasis (where the color expression is)
                el.value.raw = el.value.raw + cssVar + nextQuasisValue;

                // Since the color is mapped to the css var we don't need the expression anymore, so we flag it for removal later
                expressionsToRemoveIndexes.push(index);

                // The number of quasis always has to match the number of expressions + 1, since we've flagged the expression for removal we need to
                // flag the next quasis for removal as well, we've already appended it's value to the current one so we don't lose information
                quasisToRemoveIndexes.push(index + 1);
            }
        }
    });

    // Check if there are any expression that have to be removed and remove them
    expressionsToRemoveIndexes.forEach(indexToRemove => {
        expressions.splice(indexToRemove, 1);
    });

    // Check if there are any quasis that have to be removed and remove them
    quasisToRemoveIndexes.forEach(indexToRemove => {
        quasis.splice(indexToRemove, 1);
    });
};

const addLeadingEslintComment = (j: JSCodeshift, node: Node): void => {
    const comment = j.commentLine(ESLINT_DISABLE_COMMENT, true, false);
    node.comments = [comment];
};

const addDisableEslintCommentToTypeUsages = (
    ast: Collection<any>,
    j: JSCodeshift,
    typeReferences: Collection<TSTypeReference>
) => {
    const uniqueLinesWithColorsUsage = new Set<number>();

    // Find lines where Colors is being used
    typeReferences.forEach(path => {
        if (path.node.loc.start.line) uniqueLinesWithColorsUsage.add(path.node.loc.start.line);
    });

    // Find paths on those lines
    const pathsOnLinesWithColorsUsage = ast
        .find(j.Node, {
            loc: {
                start: position => uniqueLinesWithColorsUsage.has(position.line)
            }
        })
        .paths();

    // Create a map to store all paths for every line
    const pathsPerLine = new Map<number, ASTPath<Node>[]>();

    // Iterate all paths and store them based on their line
    pathsOnLinesWithColorsUsage.forEach(path => {
        const line = path.node.loc.start.line;
        if (pathsPerLine.get(line)) pathsPerLine.get(line).push(path);
        else pathsPerLine.set(line, [path]);
    });

    // Find the first path for each line
    pathsPerLine.forEach(paths => {
        const firstPath = paths.reduce((accum, curr) => {
            if (curr.node.loc.start.column < accum.node.loc.start.column) return curr;
            return accum;
        });

        addLeadingEslintComment(j, firstPath.node);
    });
};

export default (file: FileInfo, api: API, options: Options) => {
    const j = api.jscodeshift;
    const ast = j(file.source);
    const printOptions = options ?? { quote: 'single' };

    const localColorNames: string[] = [];

    // Find @freenow/wave imports
    const waveImports = ast.find(j.ImportDeclaration, {
        source: {
            value: '@freenow/wave'
        }
    });

    const waveNamedImports = waveImports.find(j.ImportSpecifier);

    // Find Colors named imports in @freenow/wave imports
    const colorsImports = waveNamedImports.filter(path => path.node.imported.name === 'Colors');

    // Early return in case no Colors are imported
    if (colorsImports.length === 0) return file.source;

    // Get the local Colors import names
    colorsImports.forEach(spec => {
        if (spec.node.local?.name) localColorNames.push(spec.node.local.name);
    });

    // Iterate over template strings
    ast.find(j.TaggedTemplateExpression).forEach(el => {
        // Get template literals in template expression
        const templateLiteral = el.node.quasi;
        replaceColorsForCssVarsInTemplateLiterals(j, localColorNames, templateLiteral);
    });

    // Find all remaining Colors member usage (e.g. Colors.x)
    ast.find(j.MemberExpression, {
        object: {
            name: (colorName: string) => localColorNames.includes(colorName)
        }
    }).forEach(ex => {
        // Map the Color to a css var
        const color = (ex.node.property as Identifier).name;
        const cssVar = ColorsToCssVariablesMap[color];

        if (!cssVar) return;

        // Replace the Colors usage for a string literal (e.g. 'var(--wave-b-color-y)')
        const cssVarStringNode = j.stringLiteral(ColorsToCssVariablesMap[color]);
        ex.replace(cssVarStringNode);
    });

    // Find usages of Colors as a type
    const usagesAsTypes = ast.find(j.TSTypeReference, {
        typeName: {
            name: (colorName: string) => localColorNames.includes(colorName)
        }
    });

    // Add a comment to disable eslint for each Colors type usage
    if (usagesAsTypes.length > 0) {
        addDisableEslintCommentToTypeUsages(ast, j, usagesAsTypes);
    }

    // Replace the usages of Colors as a type for the type representing our css variables
    usagesAsTypes.forEach(type => {
        const cssColorTypeReference = j.tsTypeReference(j.identifier(CSS_VARS_COLORS_REPLACEMENT_TYPE));
        type.replace(cssColorTypeReference);
    });

    // Remove the Colors import
    colorsImports.remove();

    // If Colors is the only named import from wave, remove the whole Wave import
    if (usagesAsTypes.size() === 0 && waveImports.size() === 1 && waveNamedImports.size() === 1) {
        waveImports.remove();
    }

    // If Colors is used as a type add the import for the new css colors type
    if (usagesAsTypes.size() > 0) {
        const importDeclaration: ImportDeclaration = waveImports.get(0).node;
        importDeclaration.specifiers.push(j.importSpecifier(j.identifier(CSS_VARS_COLORS_TYPE_NAME)));
    }

    return ast.toSource(printOptions);
};
