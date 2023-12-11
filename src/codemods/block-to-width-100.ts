import { API, FileInfo } from 'jscodeshift';
import { Options } from 'recast';

module.exports = (file: FileInfo, api: API, options: Options) => {
    const j = api.jscodeshift;
    const ast = j(file.source);
    const printOptions = options ?? { quote: 'single' };

    const localButtonNames = [];

    // Node representing the `width="100%"` prop
    const fullWidthProp = {
        type: 'JSXAttribute',
        name: 'width',
        value: {
            type: 'StringLiteral',
            value: '100%'
        }
    };

    // Find Wave imports
    ast.find(j.ImportDeclaration, decl => decl.source.value === '@freenow/wave').forEach(decl => {
        j(decl)
            .find(j.ImportSpecifier)
            .forEach(spec => {
                // Keep a copy of the local rename of Button and TextButton named imports
                if (spec.node.imported.name === 'Button' || spec.node.imported.name === 'TextButton') {
                    localButtonNames.push(spec.node.local.name);
                }
            });
    });

    // Find usages of the block prop
    const buttonsWithBlockProp = ast.find(j.JSXElement, {
        openingElement: {
            name: {
                name: name => localButtonNames.includes(name)
            },
            attributes: attributes =>
                attributes.some(attr => attr.type === 'JSXAttribute' && attr.name.name === 'block')
        }
    });

    // Early return in case there are no usages of the block prop
    if (buttonsWithBlockProp.length === 0) return file.source;

    buttonsWithBlockProp.forEach(el => {
        j(el)
            // Find block props
            .find(j.JSXAttribute, {
                name: name => name.name === 'block'
            })
            .forEach(attr => {
                // If prop has a value (i.e. `block={true}` or `block={false}`)
                if (attr.value.value) {
                    j(attr)
                        // Find the literal (either `true` or `false`)
                        .find(j.Literal)
                        .forEach(literal => {
                            // If `block={false}` remove it altogether
                            if (literal.value.value === false) {
                                j(attr).remove();
                                // Else replace `block={true}` for `width="100%"`
                            } else {
                                j(attr).replaceWith(fullWidthProp);
                            }
                        });
                    // Else replace `block` for `width="100%"`
                } else {
                    j(attr).replaceWith(fullWidthProp);
                }
            });
    });

    return ast.toSource(printOptions);
};
