import { API, ASTPath, FileInfo, JSXAttribute, JSXIdentifier } from 'jscodeshift';
import { Options } from 'recast';

module.exports = (file: FileInfo, api: API, options: Options) => {
    const j = api.jscodeshift;
    const ast = j(file.source);
    const printOptions = options ?? { quote: 'single' };

    const localTextNames = [];

    const secondaryProp = {
        type: 'JSXAttribute',
        name: 'secondary'
    };

    // Find Wave Text imports and store the local names
    ast.find(j.ImportDeclaration, decl => decl.source.value === '@freenow/wave').forEach(decl => {
        j(decl)
            .find(j.ImportSpecifier)
            .forEach(spec => {
                if (spec.node.imported.name === 'Text') localTextNames.push(spec.node.local.name);
            });
    });

    const weakTextAttributes: ASTPath<JSXAttribute>[] = [];

    // Search for usages of Text
    ast.find(j.JSXElement, {
        openingElement: {
            name: {
                name: name => localTextNames.includes(name)
            }
        }
    }).forEach(el => {
        // Find weak props being used
        const weakTextUsages = j(el).find(j.JSXAttribute, {
            name: name => name.name === 'weak'
        });

        weakTextAttributes.push(...weakTextUsages.paths());
    });

    // Early return in case `weak` is not used
    if (weakTextAttributes.length === 0) return file.source;

    weakTextAttributes.forEach(attr => {
        const mutableAttr = j(attr);

        // Find the identifier (where the prop name is kept)
        const identifier: ASTPath<JSXIdentifier> = mutableAttr
            .find(j.JSXIdentifier, {
                name: 'weak'
            })
            .get(0).node;

        // In case it has a boolean value (weak={false} or weak={true})
        if (
            attr.node.value?.type === 'JSXExpressionContainer' &&
            attr.node.value.expression.type === 'BooleanLiteral'
        ) {
            // If weak={true} replace with secondary prop
            if (attr.node.value.expression.value) mutableAttr.replaceWith(secondaryProp);
            // Otherwise (weak={false}) remove altogether
            else mutableAttr.remove();
            return;
        }

        // For other cases, e.g. implicit value (weak), dynamic value (weak={Date.now() % 2 === 0})
        // Replace the name of the prop
        identifier.name = 'secondary';
    });

    return ast.toSource(printOptions);
};
