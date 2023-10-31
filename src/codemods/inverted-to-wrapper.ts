import { API, FileInfo, ImportDeclaration, JSXAttribute, VariableDeclarator } from 'jscodeshift';
import { Options } from 'recast';

const ComponentNamesWithInvertedProp = [
    'Input',
    'Password',
    'Textarea',
    'Button',
    'Select',
    'SelectList',
    'PhoneInput',
    'Datepicker',
    'Tooltip',
    'Text',
    'Breadcrumbs'
];

const WRAPPER_COMPONENT_NAME = 'FlipTheme';

export default (file: FileInfo, api: API, options: Options) => {
    const j = api.jscodeshift;
    const ast = j(file.source);
    const printOptions = options ?? { quote: 'single' };

    const localComponentNames: string[] = [];

    // Find @freenow/wave imports
    const waveImports = ast.find(j.ImportDeclaration, {
        source: {
            value: '@freenow/wave'
        }
    });

    // Find components named imports in @freenow/wave imports that potentially have an inverted prop
    const componentImports = waveImports
        .find(j.ImportSpecifier)
        .filter(path => ComponentNamesWithInvertedProp.includes(path.node.imported.name));

    // Get the local icons import names
    componentImports.forEach(spec => {
        if (spec.node.local?.name) localComponentNames.push(spec.node.local.name);
    });

    // Find declarations of styled components that use a component which has the inverted prop
    const styledExpressions = ast.find(j.TaggedTemplateExpression, {
        tag: {
            arguments: ([argument]) =>
                argument?.type === 'Identifier' && ComponentNamesWithInvertedProp.includes(argument.name)
        }
    });

    styledExpressions.forEach(ex => {
        if (ex.parent?.node && ex.parent.node.type === 'VariableDeclarator') {
            const styledDeclaration: VariableDeclarator = ex.parent.node;
            // Mark the name of the declared styled component as a local component which can have the inverted prop
            if (styledDeclaration.id.type === 'Identifier') localComponentNames.push(styledDeclaration.id.name);
        }
    });

    // Find usages of the components
    const jsxComponents = ast.find(j.JSXElement, {
        openingElement: {
            name: {
                name: name => localComponentNames.includes(name)
            }
        }
    });

    let shouldAddWrapperImport = false;

    // Iterate over jsx components
    jsxComponents.forEach(el => {
        // Find inverted props
        const invertedProps = j(el).find(j.JSXAttribute, { name: name => name.name === 'inverted' });

        if (invertedProps.size() !== 1) return;

        let shouldWrap = false;
        const invertedProp: JSXAttribute = invertedProps.get(0).node;

        // console.log(invertedProp)
        // In case the prop has a value (`inverted={true}` or `inverted={false}`) set shouldWrap based on the value
        if (
            invertedProp.value &&
            invertedProp.value.type === 'JSXExpressionContainer' &&
            invertedProp.value.expression.type === 'BooleanLiteral'
        ) {
            shouldWrap = invertedProp.value.expression.value;
        } else {
            // In case the prop has an implicit `true` value set shouldWrap to `true`
            shouldWrap = true;
        }

        // Remove the inverted prop
        invertedProps.at(0).remove();

        // In case `inverted` was `true` wrap the element with the wrapper component
        if (shouldWrap) {
            shouldAddWrapperImport = true;

            // Build wrapper component with the current element as it's children
            const WrapperComponent = j.jsxElement(
                j.jsxOpeningElement(j.jsxIdentifier(WRAPPER_COMPONENT_NAME)),
                j.jsxClosingElement(j.jsxIdentifier(WRAPPER_COMPONENT_NAME)),
                [j.jsxText('\n        ', '\n        '), el.node, j.jsxText('\n    ', '\n    ')]
            );

            // Replace element with wrapper
            el.replace(WrapperComponent);
        }
    });

    // Add wrapper import
    if (shouldAddWrapperImport && waveImports.size() > 0) {
        const importDeclaration: ImportDeclaration = waveImports.get(0).node;
        importDeclaration.specifiers.push(j.importSpecifier(j.identifier(WRAPPER_COMPONENT_NAME)));
    }

    return ast.toSource(printOptions);
};
