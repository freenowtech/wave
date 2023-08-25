import { API, FileInfo, Identifier, JSCodeshift, MemberExpression, TemplateLiteral } from 'jscodeshift';
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

const replaceColorsForCssVarsInTemplateLiterals = (
    j: JSCodeshift,
    localColorNames: string[],
    templateLiteral: TemplateLiteral,
    n?: number
) => {
    const quasis = templateLiteral.quasis;
    const expressions = templateLiteral.expressions;

    const expressionsToRemoveIndexes: number[] = [];
    const quasisToRemoveIndexes: number[] = [];

    // Iterate over the quasis of the template string (the parts before the `${` and after the `}`)
    // e.g. in the template string `color: ${Colors.x};` there are 2 quasis, `color: ` and `;`, the `Colors.x` is an expression
    quasis.forEach((el, index) => {
        const expressionAfterQuasis = expressions[index];
        const isSecondToLastQuasis = index === quasis.length - 2;

        // Check if there are arrow functions inside the template string, since they can also have nested template string
        if (expressionAfterQuasis && expressionAfterQuasis.type === 'ArrowFunctionExpression') {
            const templateExpressions = j(expressionAfterQuasis).find(j.TemplateLiteral);

            // For every template string in the arrow function recursively replace colors for css vars
            templateExpressions.forEach(ex =>
                replaceColorsForCssVarsInTemplateLiterals(j, localColorNames, ex.node, 2)
            );
        }

        // Check if the expression is a MemberExpression (regular object property access)
        if (expressionAfterQuasis && expressionAfterQuasis.type === 'MemberExpression') {
            const expressionObject = (expressionAfterQuasis as MemberExpression).object as Identifier;

            // Identify if it's a usage of Colors
            const isColorsExpression = localColorNames.includes(expressionObject.name);

            if (isColorsExpression) {
                // Find the color being used
                const color = ((expressionAfterQuasis as MemberExpression).property as Identifier).name;
                const cssVar = ColorsToCssVariablesMap[color];

                if (!cssVar) return;

                // Add the mapped css var at the end of the quasis (where the color expression is)
                el.value.raw = el.value.raw + cssVar;

                // Flag the color expression so that it is removed afterwards
                expressionsToRemoveIndexes.push(index);

                if (isSecondToLastQuasis) {
                    const lastQuasisValue = quasis[index + 1].value.raw;

                    // In case the next quasis is the last one, append it's value to the current value and mark the last quasis to be removed
                    el.value.raw = el.value.raw + lastQuasisValue;
                    quasisToRemoveIndexes.push(index + 1);
                }
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

    // Find all remaining Colors usage
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

    // If it is the only named import from wave, remove the whole Wave import
    if (waveImports.size() === 1 && waveNamedImports.size() === 1 && colorsImports.size() === 1) {
        waveImports.remove();

        // If there are other named imports from wave, remove only the Colors named import
    } else if (waveNamedImports.size() > 1) {
        colorsImports.remove();
    }

    return ast.toSource(printOptions);
};
