import { API, FileInfo } from 'jscodeshift';
import { Options } from 'recast';

const DeprecatedToValidIconsMap = {
    BackwardSmallIcon: 'BackwardLastIcon',
    ChevronDownSmallIcon: 'ChevronDownIcon',
    ChevronLeftSmallIcon: 'ChevronLeftIcon',
    ChevronRightSmallIcon: 'ChevronRightIcon',
    ChevronUpSmallIcon: 'ChevronUpIcon',
    DownloadSmallIcon: 'DownloadIcon',
    ForwardSmallIcon: 'ForwardLastIcon',
    SearchSmallIcon: 'MagnifyingGlassIcon',
    XSmallIcon: 'CloseIcon',
    AirportIcon: 'PlaneIcon',
    EcoIcon: 'LeafSolidIcon',
    GearIcon: 'CogIcon',
    HeartIcon: 'HeartSolidIcon',
    HomeIcon: 'HouseIcon',
    InfoCircleIcon: 'InfoCircleOutlineIcon',
    ListUnorderedIcon: 'ListIcon',
    PrebookingIcon: 'CalendarCheckedIcon',
    SearchIcon: 'MagnifyingGlassIcon',
    XIcon: 'CloseIcon'
};

const DeprecatedIconsNames = Array.from(Object.keys(DeprecatedToValidIconsMap));

export default (file: FileInfo, api: API, options: Options) => {
    const j = api.jscodeshift;
    const ast = j(file.source);
    const printOptions = options ?? { quote: 'single' };

    const localIconsNames: string[] = [];

    // Find @freenow/wave imports
    const waveImports = ast.find(j.ImportDeclaration, {
        source: {
            value: '@freenow/wave'
        }
    });

    // Find deprecated icons named imports in @freenow/wave imports
    const deprecatedIconsImports = waveImports
        .find(j.ImportSpecifier)
        .filter(path => DeprecatedIconsNames.includes(path.node.imported.name));

    // Early return if no deprecated icons are imported
    if (deprecatedIconsImports.length === 0) return file.source;

    // Get the local icons import names
    deprecatedIconsImports.forEach(spec => {
        if (spec.node.local?.name) localIconsNames.push(spec.node.local.name);
    });

    // Find usages of the deprecated icons
    const iconsIdentifiers = ast.find(j.Identifier, {
        name: (name: string) => localIconsNames.includes(name)
    });

    // Iterate over deprecated usages and replace for valid ones, this includes imports
    iconsIdentifiers.forEach(id => {
        const validIconName: string = DeprecatedToValidIconsMap[id.node.name];
        if (!validIconName) return;

        id.node.name = validIconName;
    });

    return ast.toSource(printOptions);
};
