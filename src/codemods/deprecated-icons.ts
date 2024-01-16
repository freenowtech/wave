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
    SearchSmallIcon: 'MagnifierIcon',
    XSmallIcon: 'XCrossIcon',
    AirportIcon: 'PlaneDepartureIcon',
    EcoIcon: 'LeafFilledIcon',
    GearIcon: 'ScrewNutIcon',
    HeartIcon: 'HeartFilledIcon',
    HomeIcon: 'HouseIcon',
    ListUnorderedIcon: 'ListIcon',
    PrebookingIcon: 'CalendarCheckIcon',
    SearchIcon: 'MagnifierIcon',
    XIcon: 'XCrossIcon',

    // renamed icons
    // actions
    AlertIcon: 'WarningIcon',
    CheckCircleOutlineIcon: 'CheckCircleIcon',
    CheckCircleSolidIcon: 'CheckCircleFilledIcon',
    CloseIcon: 'XCrossIcon',
    CloseCircleSolidIcon: 'XCrossCircleFilledIcon',
    CloseCircleOutlineIcon: 'XCrossCircleIcon',
    EnvelopeReinviteIcon: 'ResendIcon',
    EyeOpenIcon: 'EyeIcon',
    MagnifyingGlassIcon: 'MagnifierIcon',
    MinusCircleSolidIcon: 'MinusCircleFilledIcon',
    MinusCircleOutlineIcon: 'MinusCircleIcon',
    PlusCircleOutlineIcon: 'PlusCircleIcon',
    PlusCircleSolidIcon: 'PlusCircleFilledIcon',
    ShareIcon: 'UploadIcon',
    ThumbDownSolidIcon: 'ThumbDownFilledIcon',
    ThumbDownOutlineIcon: 'ThumbDownIcon',
    ThumbUpSolidIcon: 'ThumbUpFilledIcon',
    ThumbUpOutlineIcon: 'ThumbUpIcon',
    TrashBinIcon: 'TrashIcon',
    WarningSolidIcon: 'WarningFilledIcon',

    // basic
    FlagOutlineIcon: 'FlagIcon',
    FreeNowArrowIcon: 'FreenowLogoIcon',
    MegaphoneSolidIcon: 'MegaphoneFilledIcon',
    MegaphoneOutlineIcon: 'MegaphoneIcon',
    StarCircleSolidIcon: 'StarCircleFilledIcon',

    // battery
    Battery100Icon: 'BatteryFullIcon',
    BatteryGenericIcon: 'BatteryIcon',
    Fuel0Icon: 'FuelEmptyIcon',
    Fuel100Icon: 'FuelFullIcon',
    FuelGenericIcon: 'FuelIcon',

    // brands
    AmericanExpressIcon: 'AmexIcon',
    BrandsConcurIcon: 'ConcurIcon',
    BrandsMercedesIcon: 'MercedesIcon',
    BrandsMilesAndMoreIcon: 'LufthansaIcon',

    // mobility
    BikeSolidIcon: 'BikeFilledIcon',
    BikeOutlineIcon: 'BikeIcon',
    BikeScooterSolidIcon: 'BikeScooterFilledIcon',
    BikeScooterOutlineIcon: 'BikeScooterIcon',
    BlackCabSolidIcon: 'BlackCabFilledIcon',
    BlackCabOutlineIcon: 'BlackCabIcon',
    BusSolidIcon: 'BusFilledIcon',
    BusOutlineIcon: 'BusIcon',
    CarOutlineIcon: 'CarIcon',
    CarSolidIcon: 'CarFilledIcon',
    PersonHailingSolidIcon: 'HailingFilledIcon',
    PersonHailingOutlineIcon: 'HailingIcon',
    KeySolidIcon: 'KeyFilledIcon',
    KeyOutlineIcon: 'KeyIcon',
    MopedSolidIcon: 'MopedFilledIcon',
    MopedOutlineIcon: 'MopedIcon',
    ScooterOutlineIcon: 'ScooterIcon',
    ScooterSolidIcon: 'ScooterFilledIcon',
    TrainSolidIcon: 'TrainFilledIcon',
    TrainOutlineIcon: 'TrainIcon',

    // navigation
    CrosshairsIcon: 'CrosshairOnIcon',
    DirectionArrowCircleOutlineIcon: 'NorthArrowCircleIcon',
    DirectionArrowOutlineIcon: 'NorthArrowIcon',
    DirectionArrowSolidIcon: 'NorthArrowFilledIcon',
    MortarboardIcon: 'EducationIcon',
    PlaneIcon: 'PlaneDepartureIcon',

    // options
    CalendarCheckedIcon: 'CalendarCheckIcon',
    CheckShieldIcon: 'ShieldIcon',
    SpeechbubblesCommentIcon: 'ThreeDotsBubbleIcon',
    SpeechbubblesPairIcon: 'ChatIcon',
    SpeechbubblesSingleIcon: 'TwoLinesBubbleIcon',
    CogIcon: 'ScrewNutIcon',
    SheetSolidIcon: 'DocumentFilledIcon',
    SheetOutlineIcon: 'DocumentIcon',
    FavoriteBannerOutlineIcon: 'StarBannerIcon',
    FavoriteBannerSolidIcon: 'StarBannerFilledIcon',
    SpeedometerIcon: 'GaugeIcon',
    HeartSolidIcon: 'HeartFilledIcon',
    HeartOutlineIcon: 'HeartIcon',
    InfoCircleSolidIcon: 'InfoCircleFilledIcon',
    InfoCircleOutlineIcon: 'InfoCircleIcon',
    LockClosedIcon: 'LockIcon',
    LegalBannerSolidIcon: 'ParagraphBannerFilledIcon',
    LegalBannerOutlineIcon: 'ParagraphBannerIcon',
    ProfileSolidIcon: 'ProfileFilledIcon',
    ProfileOutlineIcon: 'ProfileIcon',
    StarOutlineIcon: 'StarIcon',
    StarSolidIcon: 'StarFilledIcon',
    StopWatchIcon: 'StopwatchIcon',

    // payment
    BankNoteIcon: 'CashBillIcon',
    TravelExpensesIcon: 'BusinessDocsIcon',
    TippingIcon: 'CashCoinsIcon',
    DigitalPaymentIcon: 'PayByAppIcon',

    // service-type
    BoltCircleIcon: 'LightningIcon',
    BoltOutlineIcon: 'LightningIcon',
    BoltSolidIcon: 'LightningFilledIcon',
    WheelchairOutlineIcon: 'AccessibilityIcon',
    WheelchairSolidIcon: 'AccessibilityFilledIcon',
    TwoPeopleSolidIcon: 'GroupFilledIcon',
    TwoPeopleCircleIcon: 'GroupIcon',
    TwoPeopleOutlineIcon: 'GroupIcon',
    LeafSolidIcon: 'LeafFilledIcon',
    LeafOutlineIcon: 'LeafIcon',
    LiteCircleIcon: 'LeafIcon',

    // trip
    SurgeCircleSolidIcon: 'BarChartCircleFilledIcon',
    SurgeCircleOutlineIcon: 'BarChartCircleIcon',
    ChangeDestinationIcon: 'TurnRightIcon',
    DestinationIcon: 'DotIcon',
    PickUpIcon: 'DotIcon',
    LabelCheckedIcon: 'TagIcon',
    LabelIcon: 'TagIcon',
    LabelOutlineIcon: 'TagIcon',
    LabelPlusIcon: 'TagIcon',
    LabelSolidIcon: 'TagFilledIcon',
    PersonSolidIcon: 'PersonFilledIcon',
    PersonOutlineIcon: 'PersonIcon',
    DriverpHeartIcon: 'PersonHeartIcon'
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
