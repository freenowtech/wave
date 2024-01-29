import {
    API,
    ASTPath,
    CallExpression,
    FileInfo,
    Identifier,
    ImportDeclaration,
    JSCodeshift,
    Literal,
    MemberExpression
} from 'jscodeshift';
import { Options } from 'recast';

// TODO actual map
const DeprecatedSemanticColorsToSemanticTokensMap = {
    'text.primary': 'foreground-primary',
    'text.primaryInverted': 'foreground-on-background-primary',
    'text.secondary': 'foreground-neutral-emphasized',
    'text.secondaryInverted': 'foreground-neutral-faded',
    'text.tertiary': 'foreground-neutral-default',
    'text.tertiaryInverted': 'foreground-neutral-default',
    'text.disabled': 'foreground-disabled',
    'text.disabledInverted': 'foreground-neutral-emphasized',
    'text.link': 'foreground-accent-default',
    'text.linkInverted': 'foreground-on-background-accent',
    'text.linkHover': 'foreground-accent-emphasized',
    'text.linkHoverInverted': 'background-element-accent-faded',
    'text.danger': 'foreground-danger-emphasized',
    'text.dangerInverted': 'foreground-danger-default',
    'text.success': 'foreground-success-default',
    'text.warning': 'foreground-warning-default',

    'background.primary': 'background-element-neutral-default',
    'background.secondary': 'background-element-neutral-emphasized',
    'background.info': 'background-element-info-default',
    'background.danger': 'background-element-danger-faded',
    'background.success': 'background-element-success-default',
    'background.warning': 'background-element-warning-default',
    'background.primaryEmphasized': 'background-element-primary-default',
    'background.secondaryEmphasized': 'background-surface-primary-emphasized',
    'background.infoEmphasized': 'background-element-info-emphasized',
    'background.dangerEmphasized': 'background-element-danger-default',
    'background.successEmphasized': 'background-surface-success-emphasized',
    'background.warningEmphasized': 'background-surface-warning-emphasized',

    'icon.primary': 'foreground-primary',
    'icon.primaryInverted': 'foreground-on-background-primary',
    'icon.secondary': 'foreground-neutral-emphasized',
    'icon.secondaryInverted': 'foreground-neutral-faded',
    'icon.tertiary': 'foreground-neutral-default',
    'icon.tertiaryInverted': 'foreground-neutral-default',
    'icon.disabled': 'foreground-disabled',
    'icon.disabledInverted': 'foreground-neutral-emphasized',
    'icon.action': 'foreground-accent-default',
    'icon.danger': 'foreground-danger-default',
    'icon.success': 'foreground-success-default',
    'icon.warning': 'foreground-warning-default',

    'border.primary': 'border-neutral-default',
    'border.secondary': 'background-element-neutral-emphasized',
    'border.info': 'border-info-banner',
    'border.danger': 'border-danger-banner',
    'border.success': 'border-success-banner',
    'border.warning': 'border-warning-banner',
    'border.infoEmphasized': 'border-info-default',
    'border.dangerEmphasized': 'border-danger-default',
    'border.successEmphasized': 'border-success-default',
    'border.warningEmphasized': 'border-warning-default',

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

    'button.primary.textInverted': 'foreground-focus',
    'button.primary.iconInverted': 'foreground-focus',
    'button.primary.backgroundInverted': 'foreground-on-background-primary',
    'button.primary.borderInverted': 'foreground-on-background-primary',

    'button.primary.textHoverInverted': 'foreground-on-background-primary',
    'button.primary.iconHoverInverted': 'foreground-on-background-primary',
    'button.primary.backgroundHoverInverted': 'foreground-focus',
    'button.primary.borderHoverInverted': 'foreground-focus',

    'button.primary.textDisabledInverted': 'foreground-neutral-default',
    'button.primary.iconDisabledInverted': 'foreground-neutral-default',
    'button.primary.backgroundDisabledInverted': 'foreground-neutral-emphasized',
    'button.primary.borderDisabledInverted': 'foreground-neutral-emphasized',

    'button.secondary.text': 'foreground-primary',
    'button.secondary.icon': 'foreground-primary',
    'button.secondary.background': 'foreground-on-background-primary',
    'button.secondary.border': 'foreground-neutral-faded',

    'button.secondary.textHover': 'foreground-primary',
    'button.secondary.iconHover': 'foreground-primary',
    'button.secondary.backgroundHover': 'background-surface-neutral-faded',
    'button.secondary.borderHover': 'foreground-neutral-faded',

    'button.secondary.textDisabled': 'foreground-neutral-faded',
    'button.secondary.iconDisabled': 'foreground-neutral-faded',
    'button.secondary.backgroundDisabled': 'foreground-on-background-disabled',
    'button.secondary.borderDisabled': 'foreground-neutral-faded',

    'button.secondary.textInverted': 'foreground-on-background-primary',
    'button.secondary.iconInverted': 'foreground-on-background-primary',
    'button.secondary.backgroundInverted': 'transparent',
    'button.secondary.borderInverted': 'foreground-on-background-primary',

    'button.secondary.textHoverInverted': 'foreground-primary',
    'button.secondary.iconHoverInverted': 'foreground-primary',
    'button.secondary.backgroundHoverInverted': 'foreground-on-background-primary',
    'button.secondary.borderHoverInverted': 'foreground-on-background-primary',

    'button.secondary.textDisabledInverted': 'foreground-neutral-emphasized',
    'button.secondary.iconDisabledInverted': 'foreground-neutral-emphasized',
    'button.secondary.backgroundDisabledInverted': 'transparent',
    'button.secondary.borderDisabledInverted': 'foreground-neutral-emphasized',

    'button.danger.text': 'foreground-on-background-danger',
    'button.danger.icon': 'foreground-on-background-danger',
    'button.danger.background': 'background-element-danger-default',
    'button.danger.border': 'border-danger-default',

    'button.danger.textHover': 'foreground-on-background-danger',
    'button.danger.iconHover': 'foreground-on-background-danger',
    'button.danger.backgroundHover': 'background-element-danger-emphasized',
    'button.danger.borderHover': 'background-element-danger-emphasized',

    'button.danger.textDisabled': 'foreground-on-background-danger',
    'button.danger.iconDisabled': 'foreground-on-background-danger',
    'button.danger.backgroundDisabled': 'background-element-disabled-default',
    'button.danger.borderDisabled': 'border-disabled',

    'button.danger.textInverted': 'foreground-on-background-danger',
    'button.danger.iconInverted': 'foreground-on-background-danger',
    'button.danger.backgroundInverted': 'background-element-danger-default',
    'button.danger.borderInverted': 'border-danger-default',

    'button.danger.textHoverInverted': 'foreground-on-background-danger',
    'button.danger.iconHoverInverted': 'foreground-on-background-danger',
    'button.danger.backgroundHoverInverted': 'background-element-danger-emphasized',
    'button.danger.borderHoverInverted': 'background-element-danger-emphasized',

    'button.danger.textDisabledInverted': 'foreground-on-background-danger',
    'button.danger.iconDisabledInverted': 'foreground-on-background-danger',
    'button.danger.backgroundDisabledInverted': 'background-element-disabled-default',
    'button.danger.borderDisabledInverted': 'border-disabled',

    'textButton.primary.text': 'foreground-focus',
    'textButton.primary.icon': 'foreground-focus',
    'textButton.primary.textHover': 'foreground-accent-emphasized',
    'textButton.primary.iconHover': 'foreground-accent-emphasized',
    'textButton.primary.textDisabled': 'foreground-disabled',
    'textButton.primary.iconDisabled': 'foreground-disabled',

    'textButton.primary.textInverted': 'foreground-on-background-primary',
    'textButton.primary.iconInverted': 'foreground-on-background-primary',
    'textButton.primary.textHoverInverted': 'foreground-neutral-default',
    'textButton.primary.iconHoverInverted': 'foreground-neutral-default',
    'textButton.primary.textDisabledInverted': 'foreground-neutral-emphasized',
    'textButton.primary.iconDisabledInverted': 'foreground-neutral-emphasized',

    'textButton.danger.text': 'foreground-danger-default',
    'textButton.danger.icon': 'foreground-danger-default',
    'textButton.danger.textHover': 'foreground-danger-emphasized',
    'textButton.danger.iconHover': 'foreground-danger-emphasized',
    'textButton.danger.textDisabled': 'foreground-disabled',
    'textButton.danger.iconDisabled': 'foreground-disabled',

    'textButton.danger.textInverted': 'foreground-danger-default',
    'textButton.danger.iconInverted': 'foreground-danger-default',
    'textButton.danger.textHoverInverted': 'foreground-danger-emphasized',
    'textButton.danger.iconHoverInverted': 'foreground-danger-emphasized',
    'textButton.danger.textDisabledInverted': 'foreground-neutral-emphasized',
    'textButton.danger.iconDisabledInverted': 'foreground-neutral-emphasized',

    'forms.toggle.default.slideOff': 'white',
    'forms.toggle.default.slideOn': 'white',
    'forms.toggle.default.frameOff': 'foreground-neutral-faded',
    'forms.toggle.default.frameOn': 'foreground-focus',

    'forms.toggle.error.slideOff': 'white',
    'forms.toggle.error.slideOn': 'white',
    'forms.toggle.error.frameOff': 'foreground-neutral-faded',
    'forms.toggle.error.frameOn': 'foreground-danger-default',

    'forms.toggle.disabled.slideOff': 'background-element-disabled-faded',
    'forms.toggle.disabled.slideOn': 'background-element-disabled-faded',
    'forms.toggle.disabled.frameOff': 'background-element-disabled-faded',
    'forms.toggle.disabled.frameOn': 'background-element-disabled-faded',

    'forms.datePicker.calendar.border': 'border-neutral-default',
    'forms.datePicker.calendar.borderHover': 'border-neutral-default',
    'forms.datePicker.calendar.borderRange': 'border-accent-faded',
    'forms.datePicker.calendar.borderSelected': 'foreground-accent-emphasized',
    'forms.datePicker.calendar.borderRangeHover': 'border-accent-faded',
    'forms.datePicker.calendar.background': 'background-element-neutral-default',
    'forms.datePicker.calendar.backgroundHover': 'background-element-neutral-emphasized',
    'forms.datePicker.calendar.backgroundRange': 'background-element-accent-faded',
    'forms.datePicker.calendar.backgroundSelected': 'background-element-accent-emphasized',
    'forms.datePicker.calendar.backgroundRangeHover': 'background-element-accent-default',

    'table.skeleton': 'background-element-neutral-emphasized',
    'table.zebraStyles.backgroundSecondary': 'TODO',
    'table.zebraStyles.backgroundHover': 'background-surface-info-faded',
    'table.zebraStyles.backgroundActive': 'background-surface-info-active',
    'table.linesStyles.backgroundHover': 'background-element-accent-faded',
    'table.linesStyles.backgroundActive': 'background-surface-info-faded',
    'table.linesStyles.border': 'border-neutral-default',
    'table.blank.backgroundHover': 'background-element-accent-faded',
    'table.blank.backgroundActive': 'background-surface-info-faded',
    'table.header.border': 'border-neutral-emphasized',

    'dialog.dimming': 'TODO'
};

const SEMANTIC_VALUE_GETTER_NAME = 'getSemanticValue';

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

    // Early return in case no SemanticColors or themeGet are imported
    if (colorsImports.length === 0 && themeGetImports.length === 0) return file.source;

    // Get the local SemanticColors import names
    colorsImports.forEach(spec => {
        if (spec.node.local?.name) localColorNames.push(spec.node.local.name);
    });

    // Get the local themeGet import names
    themeGetImports.forEach(spec => {
        if (spec.node.local?.name) localThemeGetNames.push(spec.node.local.name);
    });

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

    // Find all SemanticColors member usage (e.g. SemanticColors.x)
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
