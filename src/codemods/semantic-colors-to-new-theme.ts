import {
    API,
    ASTPath,
    CallExpression,
    FileInfo,
    Identifier,
    ImportDeclaration,
    JSCodeshift,
    Literal,
    MemberExpression,
    TemplateLiteral
} from 'jscodeshift';
import { Options } from 'recast';

// TODO actual map
const DeprecatedSemanticColorsToSemanticTokensMap = {
    'text.primary': 'foreground-primary',
    'text.primaryInverted': '', // foreground-primary
    'text.secondary': 'foreground-neutral-emphasized',
    'text.secondaryInverted': '', // foreground-neutral-emphasized
    'text.tertiary': '', // TODO where is it??
    'text.tertiaryInverted': '',
    'text.disabled': 'foreground-disabled',
    'text.disabledInverted': '', // foreground-disabled is Colors.blue.primary[350], before was Colors.blue.primary[550]
    'text.link': '',
    'text.linkInverted': '',
    'text.linkHover': '',
    'text.linkHoverInverted': '',
    'text.danger': '',
    'text.dangerInverted': '',
    'text.success': '',
    'text.warning': '',

    'background.primary': 'TODO',
    'background.secondary': '',
    'background.info': '',
    'background.danger': '',
    'background.success': '',
    'background.warning': '',
    'background.primaryEmphasized': '',
    'background.secondaryEmphasized': '',
    'background.infoEmphasized': 'TODO',
    'background.dangerEmphasized': '',
    'background.successEmphasized': '',
    'background.warningEmphasized': '',

    'icon.primary': '',
    'icon.primaryInverted': '',
    'icon.secondary': '',
    'icon.secondaryInverted': '',
    'icon.tertiary': '',
    'icon.tertiaryInverted': '',
    'icon.disabled': '',
    'icon.disabledInverted': '',
    'icon.action': '',
    'icon.danger': '',
    'icon.success': '',
    'icon.warning': '',

    'border.primary': '',
    'border.secondary': '',
    'border.info': '',
    'border.danger': '',
    'border.success': '',
    'border.warning': '',
    'border.infoEmphasized': '',
    'border.dangerEmphasized': '',
    'border.successEmphasized': '',
    'border.warningEmphasized': '',

    'button.primary.text': 'foreground-on-background-primary',
    'button.primary.icon': 'foreground-on-background-primary',
    'button.primary.background': 'background-element-primary-default',
    'button.primary.border': 'background-element-primary-default',

    'button.primary.textHover': 'foreground-on-background-accent',
    'button.primary.iconHover': 'foreground-on-background-accent',
    'button.primary.backgroundHover': 'background-element-primary-emphasized',
    'button.primary.borderHover': 'background-element-primary-emphasized',

    'button.primary.textDisabled': 'foreground-on-background-disabled',
    'button.primary.iconDisabled': 'foreground-on-background-disabled',
    'button.primary.backgroundDisabled': 'background-element-disabled-default',
    'button.primary.borderDisabled': 'background-element-disabled-default',

    'button.primary.textInverted': '', // foreground-on-background-primary
    'button.primary.iconInverted': '', // foreground-on-background-primary
    'button.primary.backgroundInverted': '', // background-element-primary-default
    'button.primary.borderInverted': '', // background-element-primary-default

    'button.primary.textHoverInverted': '', // foreground-on-background-accent
    'button.primary.iconHoverInverted': '', // foreground-on-background-accent
    'button.primary.backgroundHoverInverted': '', // background-element-primary-emphasized
    'button.primary.borderHoverInverted': '', // background-element-primary-emphasized

    'button.primary.textDisabledInverted': '', // foreground-on-background-disabled
    'button.primary.iconDisabledInverted': '', // foreground-on-background-disabled
    'button.primary.backgroundDisabledInverted': '', // background-element-disabled-default
    'button.primary.borderDisabledInverted': '', // background-element-disabled-default

    'button.secondary.text': '',
    'button.secondary.icon': '',
    'button.secondary.background': '',
    'button.secondary.border': '',

    'button.secondary.textHover': '',
    'button.secondary.iconHover': '',
    'button.secondary.backgroundHover': '',
    'button.secondary.borderHover': '',

    'button.secondary.textDisabled': '',
    'button.secondary.iconDisabled': '',
    'button.secondary.backgroundDisabled': '',
    'button.secondary.borderDisabled': '',

    'button.secondary.textInverted': '',
    'button.secondary.iconInverted': '',
    'button.secondary.backgroundInverted': '',
    'button.secondary.borderInverted': '',

    'button.secondary.textHoverInverted': '',
    'button.secondary.iconHoverInverted': '',
    'button.secondary.backgroundHoverInverted': '',
    'button.secondary.borderHoverInverted': '',

    'button.secondary.textDisabledInverted': '',
    'button.secondary.iconDisabledInverted': '',
    'button.secondary.backgroundDisabledInverted': '',
    'button.secondary.borderDisabledInverted': '',

    'button.danger.text': '',
    'button.danger.icon': '',
    'button.danger.background': '',
    'button.danger.border': '',

    'button.danger.textHover': '',
    'button.danger.iconHover': '',
    'button.danger.backgroundHover': '',
    'button.danger.borderHover': '',

    'button.danger.textDisabled': '',
    'button.danger.iconDisabled': '',
    'button.danger.backgroundDisabled': '',
    'button.danger.borderDisabled': '',

    'button.danger.textInverted': '',
    'button.danger.iconInverted': '',
    'button.danger.backgroundInverted': '',
    'button.danger.borderInverted': '',

    'button.danger.textHoverInverted': '',
    'button.danger.iconHoverInverted': '',
    'button.danger.backgroundHoverInverted': '',
    'button.danger.borderHoverInverted': '',

    'button.danger.textDisabledInverted': '',
    'button.danger.iconDisabledInverted': '',
    'button.danger.backgroundDisabledInverted': '',
    'button.danger.borderDisabledInverted': '',

    'textButton.primary.text': '',
    'textButton.primary.icon': '',
    'textButton.primary.textHover': '',
    'textButton.primary.iconHover': '',
    'textButton.primary.textDisabled': '',
    'textButton.primary.iconDisabled': '',

    'textButton.primary.textInverted': '',
    'textButton.primary.iconInverted': '',
    'textButton.primary.textHoverInverted': '',
    'textButton.primary.iconHoverInverted': '',
    'textButton.primary.textDisabledInverted': '',
    'textButton.primary.iconDisabledInverted': '',

    'textButton.danger.textInverted': '',
    'textButton.danger.iconInverted': '',
    'textButton.danger.textHoverInverted': '',
    'textButton.danger.iconHoverInverted': '',
    'textButton.danger.textDisabledInverted': '',
    'textButton.danger.iconDisabledInverted': '',

    'forms.toggle.default.slideOff': '',
    'forms.toggle.default.slideOn': '',
    'forms.toggle.default.frameOff': '',
    'forms.toggle.default.frameOn': '',

    'forms.toggle.error.slideOff': '',
    'forms.toggle.error.slideOn': '',
    'forms.toggle.error.frameOff': '',
    'forms.toggle.error.frameOn': '',

    'forms.toggle.disabled.slideOff': '',
    'forms.toggle.disabled.slideOn': '',
    'forms.toggle.disabled.frameOff': '',
    'forms.toggle.disabled.frameOn': '',

    'forms.datePicker.calendar.border': '',
    'forms.datePicker.calendar.borderHover': '',
    'forms.datePicker.calendar.borderRange': '',
    'forms.datePicker.calendar.borderSelected': '',
    'forms.datePicker.calendar.borderRangeHover': '',
    'forms.datePicker.calendar.background': '',
    'forms.datePicker.calendar.backgroundHover': '',
    'forms.datePicker.calendar.backgroundRange': '',
    'forms.datePicker.calendar.backgroundSelected': '',
    'forms.datePicker.calendar.backgroundRangeHover': '',

    'table.skeleton': '',
    'table.zebraStyles.backgroundSecondary': '',
    'table.zebraStyles.backgroundHover': '',
    'table.zebraStyles.backgroundActive': '',
    'table.linesStyles.backgroundHover': '',
    'table.linesStyles.backgroundActive': '',
    'table.linesStyles.border': '',
    'table.blank.backgroundHover': '',
    'table.blank.backgroundActive': '',
    'table.header.border': '',

    'dialog.dimming': ''
};

/**
 * Possible usages
 * [DONE] As `CallExpression`? -> themeGet('border.primary') (regular)
 * [DONE] As `CallExpression`? -> themeGet('border.primary') (inside template literal)
 * [DONE] As constant -> SemanticColors.button.primary.backgroundDisabled (regular)
 * - As constant -> SemanticColors.button.primary.backgroundDisabled (inside template literal)
 */

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

const buildFullAccessedPropertiesPath = (ex: ASTPath<MemberExpression>, initialPath?: string): string => {
    const propertyName = (ex.node.property as Identifier).name;
    const builtPath = initialPath ? `${initialPath}.${propertyName}` : propertyName;

    // Recursively add more properties if the parent has more
    if (isMemberExpression(ex.parentPath)) return buildFullAccessedPropertiesPath(ex.parentPath, builtPath);
    else return builtPath;
};

const getHighesLevelMemberExpression = (ex: ASTPath<MemberExpression>): ASTPath<MemberExpression> => {
    if (isMemberExpression(ex.parentPath)) return getHighesLevelMemberExpression(ex.parentPath);
    return ex;
};

const buildGetSemanticValueCall = (j: JSCodeshift, semanticToken: string): CallExpression => {
    return j.callExpression(j.identifier('getSemanticValue'), [j.literal(semanticToken)]);
};

export default (file: FileInfo, api: API, options: Options) => {
    const j = api.jscodeshift;
    const ast = j(file.source);
    const printOptions = options ?? { quote: 'single' };

    const localColorNames: string[] = [];
    const localThemeGetNames: string[] = [];

    // Find @freenow/wave imports
    const waveImports = ast.find(j.ImportDeclaration, {
        source: {
            value: '@freenow/wave'
        }
    });

    const waveNamedImports = waveImports.find(j.ImportSpecifier);

    // Find SemanticColors named imports in wave imports
    const colorsImports = waveNamedImports.filter(path => path.node.imported.name === 'SemanticColors');

    // Find themeGet named imports in wave imports
    const themeGetImports = waveNamedImports.filter(path => path.node.imported.name === 'themeGet');

    // Early return in case no SemanticColors are imported
    if (colorsImports.length === 0 && themeGetImports.length === 0) return file.source;

    // Get the local SemanticColors import names
    colorsImports.forEach(spec => {
        if (spec.node.local?.name) localColorNames.push(spec.node.local.name);
    });

    // Get the local themeGet import names
    themeGetImports.forEach(spec => {
        if (spec.node.local?.name) localThemeGetNames.push(spec.node.local.name);
    });

    // // Iterate over template strings
    // ast.find(j.TaggedTemplateExpression).forEach(el => {
    //     // Get template literals in template expression
    //     const templateLiteral = el.node.quasi;
    //     replaceColorsForCssVarsInTemplateLiterals(j, localColorNames, templateLiteral);
    // });

    // Find all themeGet CallExpressions (e.g. themeGet('text.primary'))
    const themeGetExpressions = ast.find(j.CallExpression, {
        callee: {
            name: (colorName: string) => localThemeGetNames.includes(colorName)
        }
    });

    themeGetExpressions.forEach(ex => {
        // Get first argument of the call (i.e. the semantic color)
        const firstArgument = ex.node.arguments[0] as Literal;

        // Remove the `semanticColors.` part of the string to later map to the token, 15 is the number of chars it has
        const semanticColor = (firstArgument.value as string).substring(15);

        // Map the Color to a semantic token
        const semanticToken = DeprecatedSemanticColorsToSemanticTokensMap[semanticColor];

        if (!semanticToken) return;

        // Replace the themeGet usage for a getSemanticValue call with the new token (e.g. getSemanticValue('background-element-disabled-default'))
        const getSemanticValueCall = buildGetSemanticValueCall(j, semanticToken);
        ex.replace(getSemanticValueCall);
    });

    // Find all remaining SemanticColors member usage (e.g. SemanticColors.x)
    const semanticColorsExpressions = ast.find(j.MemberExpression, {
        object: {
            name: (colorName: string) => localColorNames.includes(colorName)
        }
    });

    semanticColorsExpressions.forEach(ex => {
        // Build full semantic color path (e.g. SemanticColors.button.primary.backgroundDisabled)
        const semanticColorPath = buildFullAccessedPropertiesPath(ex);

        // Map the Color to a semantic token
        const semanticToken = DeprecatedSemanticColorsToSemanticTokensMap[semanticColorPath];

        if (!semanticToken) return;

        // Find highest level MemberExpression (i.e. the one that contains the whole color path)
        const highestExpression = getHighesLevelMemberExpression(ex);

        // Replace the SemanticColors usage for a getSemanticValue call with the new token (e.g. getSemanticValue('background-element-disabled-default'))
        const getSemanticValueCall = buildGetSemanticValueCall(j, semanticToken);
        highestExpression.replace(getSemanticValueCall);
    });

    // Add an import for `getSemanticValue`
    const importDeclaration: ImportDeclaration = waveImports.get(0).node;
    importDeclaration.specifiers.push(j.importSpecifier(j.identifier(SEMANTIC_VALUE_GETTER_NAME)));

    // Remove the SemanticColors import
    colorsImports.remove();

    // Remove the themeGet import
    themeGetImports.remove();

    // If SemanticColors is the only named import from wave, remove the whole Wave import
    if (waveImports.size() === 1 && waveNamedImports.size() === 1) {
        waveImports.remove();
    }

    return ast.toSource(printOptions);
};
