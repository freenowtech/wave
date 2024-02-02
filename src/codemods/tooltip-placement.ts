import { API, ASTPath, FileInfo, StringLiteral } from 'jscodeshift';
import { Options } from 'recast';

const DeprecatedToValidPlacementsMap = {
    'bottom-left': 'bottom-start',
    'bottom-center': 'bottom',
    'bottom-right': 'bottom-end',
    'top-left': 'top-start',
    'top-center': 'top',
    'top-right': 'top-end',
    'center-left': 'left',
    'center-right': 'right'
};

const DeprecatedPlacements = Array.from(Object.keys(DeprecatedToValidPlacementsMap));

module.exports = (file: FileInfo, api: API, options: Options) => {
    const j = api.jscodeshift;
    const ast = j(file.source);
    const printOptions = options ?? { quote: 'single' };

    const localTooltipNames = [];

    // Find Wave Tooltip imports and store the local names
    ast.find(j.ImportDeclaration, decl => decl.source.value === '@freenow/wave').forEach(decl => {
        j(decl)
            .find(j.ImportSpecifier)
            .forEach(spec => {
                if (spec.node.imported.name === 'Tooltip') localTooltipNames.push(spec.node.local.name);
            });
    });

    const deprecatedPlacementLiterals: ASTPath<StringLiteral>[] = [];

    // Search for usages of Tooltip
    ast.find(j.JSXElement, {
        openingElement: {
            name: {
                name: name => localTooltipNames.includes(name)
            }
        }
    }).forEach(el => {
        j(el)
            // Find placement props being used
            .find(j.JSXAttribute, {
                name: name => name.name === 'placement'
            })
            .forEach(attr => {
                const mutableAttr = j(attr);

                // Find the value of the placement prop
                mutableAttr.find(j.StringLiteral).forEach(literal => {
                    // Check if it's using a deprecated value
                    if (DeprecatedPlacements.includes(literal.value.value)) deprecatedPlacementLiterals.push(literal);
                });
            });
    });

    // Early return when no deprecated values are used
    if (deprecatedPlacementLiterals.length === 0) return file.source;

    deprecatedPlacementLiterals.forEach(literal => {
        const validPlacementValue: string = DeprecatedToValidPlacementsMap[literal.value.value];

        // Replace for a valid placement value
        literal.value.value = validPlacementValue;
    });

    return ast.toSource(printOptions);
};
