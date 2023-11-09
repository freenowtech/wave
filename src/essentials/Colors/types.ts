import { Join, Leaves } from '../../utils/types';

export type HSL = `hsl(${number}, ${number}%, ${number}%)` | `hsla(${number}, ${number}%, ${number}%, ${number})`;

export type Color = HSL | 'transparent';

export type BareColorsSchema = {
    white: HSL;
    black: HSL;
    blue: {
        primary: {
            '1100': HSL;
            '900': HSL;
            '750': HSL;
            '550': HSL;
            '350': HSL;
            '200': HSL;
            '50': HSL;
        };
        secondary: {
            '1000': HSL;
            '900': HSL;
            '350': HSL;
            '150': HSL;
            '100': HSL;
            '50': HSL;
        };
    };
    red: {
        '1000': HSL;
        '900': HSL;
    };
    magenta: {
        '1000': HSL;
        '900': HSL;
        '350': HSL;
        '50': HSL;
    };
    green: {
        '1000': HSL;
        '900': HSL;
        '350': HSL;
        '50': HSL;
    };
    yellow: {
        '900': HSL;
        '350': HSL;
        '50': HSL;
    };
    orange: {
        '1000': HSL;
        '900': HSL;
        '350': HSL;
        '50': HSL;
    };
    transparent: 'transparent';
};

export type SemanticColorsSchema = {
    transparent: 'transparent';
    white: Color;
    black: Color;
    background: {
        page: {
            default: Color;
            'elevation-1': Color;
            'elevation-2': Color;
            'elevation-3': Color;
        };
        backdrop: Color;
        // for big areas
        surface: {
            primary: {
                default: Color;
                emphasized: Color;
            };
            neutral: {
                default: Color;
                faded: Color;
                emphasized: Color;
            };
            info: {
                default: Color;
                active: Color;
                faded: Color;
                emphasized: Color;
            };
            success: {
                default: Color;
                emphasized: Color;
            };
            warning: {
                default: Color;
                emphasized: Color;
            };
            danger: {
                faded: Color;
                default: Color;
                emphasized: Color;
            };
        };
        // for form elements and other small areas
        element: {
            primary: {
                default: Color;
                emphasized: Color;
            };
            neutral: {
                default: Color;
                emphasized: Color;
            };
            disabled: {
                faded: Color;
                default: Color;
            };
            accent: {
                default: Color;
                faded: Color;
                emphasized: Color;
            };
            info: {
                default: Color;
                emphasized: Color;
            };
            success: {
                default: Color;
            };
            warning: {
                default: Color;
            };
            danger: {
                default: Color;
                faded: Color;
                emphasized: Color;
            };
        };
    };
    border: {
        neutral: {
            faded: Color;
            default: Color;
            emphasized: Color;
        };
        accent: {
            faded: Color;
            default: Color;
        };
        info: {
            banner: Color;
            faded: Color;
            default: Color;
        };
        success: {
            banner: Color;
            faded: Color;
            default: Color;
        };
        warning: {
            banner: Color;
            default: Color;
        };
        danger: {
            banner: Color;
            faded: Color;
            default: Color;
        };
        focus: Color;
        disabled: Color;
    };
    foreground: {
        disabled: Color;
        focus: Color;
        primary: Color;
        'on-background': {
            primary: Color;
            accent: Color;
            info: Color;
            success: Color;
            warning: Color;
            danger: Color;
            disabled: Color;
            neutral: Color;
        };
        neutral: {
            faded: Color;
            default: Color;
            emphasized: Color;
        };
        accent: {
            default: Color;
            emphasized: Color;
        };
        info: {
            faded: Color;
            default: Color;
        };
        success: {
            default: Color;
        };
        warning: {
            default: Color;
        };
        danger: {
            default: Color;
            emphasized: Color;
        };
    };
    logo: {
        free: Color;
        now: Color;
        subtitle: Color;
    };
    shadow: {
        default: Color;
    };
};

// Bare Colors
type BareColorToken = Join<Leaves<BareColorsSchema>, '-'>;
type BareColorTokenCssVariable = `--wave-b-color-${BareColorToken}`;

type BareHslComponentsToken = `${BareColorToken}-hsl`;
type BareHslComponentsTokenCssVariable = `--wave-b-color-${BareHslComponentsToken}`;

export type BareColorCssVariable = BareColorTokenCssVariable | BareHslComponentsTokenCssVariable;

export type ReadBareCssColorVariable =
    | `var(${BareColorTokenCssVariable})`
    | `var(${BareColorTokenCssVariable}, ${string})`;

export type ReadBareCssVariable = `var(${BareColorCssVariable})` | `var(${BareColorCssVariable}, ${string})`;

// Semantic Colors
type SemanticColorToken = Join<Leaves<SemanticColorsSchema>, '-'>;
type SemanticColorTokenCssVariable = `--wave-s-color-${SemanticColorToken}`;

type SemanticHslComponentsToken = `${SemanticColorToken}-hsl`;
type SemanticHslComponentsTokenCssVariable = `--wave-s-color-${SemanticHslComponentsToken}`;

export type SemanticToken = SemanticColorToken | SemanticHslComponentsToken;
export type SemanticColorCssVariable = SemanticColorTokenCssVariable | SemanticHslComponentsTokenCssVariable;

export type ReadSemanticCssColorVariable =
    | `var(${SemanticColorTokenCssVariable})`
    | `var(${SemanticColorTokenCssVariable}, ${string})`;
export type ReadSemanticCssVariable =
    | `var(${SemanticColorCssVariable})`
    | `var(${SemanticColorCssVariable}, ${string})`;

export type ComponentSemanticTokens = {
    [key: string]: ReadSemanticCssVariable | ComponentSemanticTokens;
};
