import {
    API,
    ASTPath,
    FileInfo,
    Identifier,
    ImportDeclaration,
    JSCodeshift,
    MemberExpression,
    TemplateLiteral
} from 'jscodeshift';
import { Options } from 'recast';

// TODO actual map
const DeprecatedSemanticColorsToSemanticTokensMap = {
    'SemanticColors.button.primary.backgroundDisabled': 'background-element-disabled-default'
};

/**
 * Possible usages
 * - As `CallExpression`? -> themeGet('semanticColors.border.primary') (inside template literal)
 * - As `CallExpression`? -> themeGet('semanticColors.border.primary') (regular)
 * - As constant -> SemanticColors.button.primary.backgroundDisabled (inside template literal)
 * [DONE] As constant -> SemanticColors.button.primary.backgroundDisabled (regular)
 */

const CSS_VARS_COLORS_REPLACEMENT_TYPE = `ReadCssColorVariable`;
const SEMANTIC_VALUE_GETTER_NAME = 'getSemanticValue';

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
    // e.g. in the template string `color: ${SemanticColors.x};` there are 2 quasis, `color: ` and `;`, the `SemanticColors.x` is an expression
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

            // Identify if it's a usage of SemanticColors
            const isColorsExpression = localColorNames.includes(expressionObject.name);

            if (isColorsExpression) {
                // Find the color being used
                const color = (expressionAfterQuasis.property as Identifier).name;
                const cssVar: string = DeprecatedSemanticColorsToSemanticTokensMap[color];

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

const isMemberExpression = (path: any): path is ASTPath<MemberExpression> => path.value?.type === 'MemberExpression';

const buildFullAccessedPropertiesPath = (initialPath: string, ex: ASTPath<MemberExpression>): string => {
    const propertyName = (ex.node.property as Identifier).name;
    const builtPath = `${initialPath}.${propertyName}`;

    // Recursively add more properties if the parent has more
    if (isMemberExpression(ex.parentPath)) return buildFullAccessedPropertiesPath(builtPath, ex.parentPath);
    else return builtPath;
};

const getHighesLevelMemberExpression = (ex: ASTPath<MemberExpression>): ASTPath<MemberExpression> => {
    if (isMemberExpression(ex.parentPath)) return getHighesLevelMemberExpression(ex.parentPath);
    return ex;
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

    // Find SemanticColors named imports in @freenow/wave imports
    const colorsImports = waveNamedImports.filter(path => path.node.imported.name === 'SemanticColors');

    // Early return in case no SemanticColors are imported
    if (colorsImports.length === 0) return file.source;

    // Get the local SemanticColors import names
    colorsImports.forEach(spec => {
        if (spec.node.local?.name) localColorNames.push(spec.node.local.name);
    });

    // // Iterate over template strings
    // ast.find(j.TaggedTemplateExpression).forEach(el => {
    //     // Get template literals in template expression
    //     const templateLiteral = el.node.quasi;
    //     replaceColorsForCssVarsInTemplateLiterals(j, localColorNames, templateLiteral);
    // });

    // Find all remaining SemanticColors member usage (e.g. SemanticColors.x)
    const semanticColorsExpressions = ast.find(j.MemberExpression, {
        object: {
            name: (colorName: string) => localColorNames.includes(colorName)
        }
    });

    semanticColorsExpressions.forEach(ex => {
        // Get initial object name (e.g. SemanticColors)
        const initialIdentifier = (ex.node.object as Identifier).name;

        // Build full semantic color path (e.g. SemanticColors.button.primary.backgroundDisabled)
        const semanticColorPath = buildFullAccessedPropertiesPath(initialIdentifier, ex);

        // Map the Color to a semantic token
        const semanticToken = DeprecatedSemanticColorsToSemanticTokensMap[semanticColorPath];

        if (!semanticToken) return;

        // Find highest level MemberExpression (i.e. the one that contains the whole color path)
        const highestExpression = getHighesLevelMemberExpression(ex);

        // Replace the SemanticColors usage for a call to getSemanticValue with the token (e.g. getSemanticValue('background-element-disabled-default'))
        const semanticValueGetterNode = j.callExpression(j.identifier('getSemanticValue'), [j.literal(semanticToken)]);
        highestExpression.replace(semanticValueGetterNode);
    });

    // Add an import for `getSemanticValue`
    const importDeclaration: ImportDeclaration = waveImports.get(0).node;
    importDeclaration.specifiers.push(j.importSpecifier(j.identifier(SEMANTIC_VALUE_GETTER_NAME)));

    // Remove the SemanticColors import
    colorsImports.remove();

    // If SemanticColors is the only named import from wave, remove the whole Wave import
    if (waveImports.size() === 1 && waveNamedImports.size() === 1) {
        waveImports.remove();
    }

    return ast.toSource(printOptions);
};
