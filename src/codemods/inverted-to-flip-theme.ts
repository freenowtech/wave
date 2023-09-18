import {
    API,
    ASTNode,
    ASTPath,
    FileInfo,
    ImportDeclaration,
    JSXAttribute,
    JSXElement,
    JSXText,
    VariableDeclarator
} from 'jscodeshift';
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
    'Text'
];

const WRAPPER_COMPONENT_NAME = 'FlipTheme';

// Check whether two elements are siblings, it relies on elements having spacing between them
const areSiblings = (elementA: ASTPath<JSXElement>, elementB: ASTPath<JSXElement>): boolean => {
    // element.name is the position of the element as a children
    return elementA.parent === elementB.parent && Math.abs(elementA.name - elementB.name) === 2; // 2 because there's a JSXText (spacing) in the middle
};

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

    // Find declarations of styled components that use a component which can have the inverted prop
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
        // TODO is this a problem if we rely on position (.name)
        openingElement: {
            name: {
                name: name => localComponentNames.includes(name)
            }
        }
    });

    // TODO change strategy to avoid depending on spacing:
    // Iterate over parents of elementsToWrapPaths
    // Identify JSXText that are spacing and remove them
    // Iterate over parents again and check for siblings
    // Continue with current algorithm to create groups

    // TODO, how to identify JSXText that are spacing (don't have actual text)
    const jsxTexts = ast.find(j.JSXText, {
        regex: {
            pattern: '\\n{1,}+s{1,}'
        }
    });

    console.log(jsxTexts.length); // 0, wtf

    const elementsToWrapPaths: ASTPath<JSXElement>[] = [];

    // Iterate over jsx components
    jsxComponents.forEach(elementPath => {
        // Find inverted props
        const invertedProps = j(elementPath).find(j.JSXAttribute, { name: name => name.name === 'inverted' });

        if (invertedProps.size() !== 1) return;

        const invertedProp: JSXAttribute = invertedProps.get(0).node;

        // In case the inverted prop is true (e.g. implicit `inverted` or explicit `inverted={true}`) mark the element to be wrapped later
        if (
            !invertedProp.value ||
            (invertedProp.value &&
                invertedProp.value.type === 'JSXExpressionContainer' &&
                invertedProp.value.expression.type === 'BooleanLiteral' &&
                invertedProp.value.expression.value)
        )
            elementsToWrapPaths.push(elementPath);

        // Remove the inverted prop
        invertedProps.at(0).remove();
    });

    const elementGroups = elementsToWrapPaths.reduce((accum, curr, i) => {
        const lastGroup = accum[accum.length - 1];
        const lastElement = lastGroup ? lastGroup[lastGroup.length - 1] : undefined;

        // In case the last element and the current one are siblings, add the current one to the last existing group
        if (lastElement && areSiblings(lastElement, curr)) lastGroup.push(curr);
        // Otherwise add the current element to a new group
        else accum.push([curr]);

        return accum;
    }, [] as ASTPath<JSXElement>[][]);

    elementGroups.forEach(elements => {
        const openingSpacing = j.jsxText('\n        ', '\n        ');
        const closingSpacing = j.jsxText('\n    ', '\n    ');

        // TODO avoid JSXText altogether, only take care of relevant nodes
        const elementNodes: (JSXElement | JSXText)[] = elements.reduce((accum, curr, i) => {
            if (elements.length === 1) return [openingSpacing, curr.node, closingSpacing];
            if (i === 0) return [openingSpacing, curr.node];
            return [...accum, closingSpacing, curr.node, closingSpacing];
        }, []);

        // Build wrapper component with the current element as it's children
        const WrapperComponent = j.jsxElement(
            j.jsxOpeningElement(j.jsxIdentifier(WRAPPER_COMPONENT_NAME)),
            j.jsxClosingElement(j.jsxIdentifier(WRAPPER_COMPONENT_NAME)),
            elementNodes
        );

        elements.forEach((el, index) => {
            // Replace the first element for the whole wrapper with children
            if (index === 0) el.replace(WrapperComponent);
            // Remove other elements
            else el.prune();
        });
    });

    // Add wrapper import
    if (elementsToWrapPaths.length > 0 && waveImports.size() > 0) {
        const importDeclaration: ImportDeclaration = waveImports.get(0).node;
        importDeclaration.specifiers.push(j.importSpecifier(j.identifier(WRAPPER_COMPONENT_NAME)));
    }

    return ast.toSource(printOptions);
};
