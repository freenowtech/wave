import { API, FileInfo } from 'jscodeshift';

module.exports = (file: FileInfo, api: API) => {
    const j = api.jscodeshift;
    const ast = j(file.source);

    const localButtonNames = [];

    const fullWidthProp = {
        type: 'JSXAttribute',
        name: 'width',
        value: {
            type: 'StringLiteral',
            value: '100%'
        }
    };

    ast.find(j.ImportDeclaration, decl => decl.source.value === '@freenow/wave').forEach(decl => {
        j(decl)
            .find(j.ImportSpecifier)
            .forEach(spec => {
                if (spec.node.imported.name === 'Button' || spec.node.imported.name === 'TextButton') {
                    localButtonNames.push(spec.node.local.name);
                }
            });
    });

    ast.find(j.JSXElement, {
        openingElement: {
            name: {
                name: name => localButtonNames.includes(name)
            }
        }
    }).forEach(el => {
        j(el)
            .find(j.JSXAttribute, {
                name: name => name.name === 'block'
            })
            .forEach(attr => {
                if (attr.value.value) {
                    j(attr)
                        .find(j.Literal)
                        .forEach(literal => {
                            if (literal.value.value === false) {
                                j(attr).remove();
                            } else {
                                j(attr).replaceWith(fullWidthProp);
                            }
                        });
                } else {
                    j(attr).replaceWith(fullWidthProp);
                }
            });
    });

    return ast.toSource({ quote: 'single' });
};
