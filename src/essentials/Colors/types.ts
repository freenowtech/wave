import { Join, Leaves } from '../../utils/types';

export type HSL = `hsl(${number}, ${number}%, ${number}%)` | `hsla(${number}, ${number}%, ${number}%, ${number})`;

export type Color = HSL | 'transparent';

export interface SemanticColorsSchema {
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
                emphasized: Color;
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
                emphasized: Color;
            };
            warning: {
                default: Color;
                emphasized: Color;
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
            emphasized: Color;
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
            faded: Color;
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
    }
    shadow: {
        default: Color;
    };
}

type SemanticColorToken = Join<Leaves<SemanticColorsSchema>, '-'>;
type SemanticColorTokenCssVariable = `--wave-s-color-${SemanticColorToken}`;

type SemanticHslComponentsToken = `${SemanticColorToken}-hsl`;
type HslComponentsTokenCssVariable = `--wave-s-color-${SemanticHslComponentsToken}`;

export type SemanticToken = SemanticColorToken | SemanticHslComponentsToken;
export type SemanticColorCssVariable = SemanticColorTokenCssVariable | HslComponentsTokenCssVariable;

export type ReadCssColorVariable =
    | `var(${SemanticColorTokenCssVariable})`
    | `var(${SemanticColorTokenCssVariable}, ${string})`;
export type ReadCssVariable = `var(${SemanticColorCssVariable})` | `var(${SemanticColorCssVariable}, ${string})`;

export type ComponentSemanticTokens = {
    [key: string]: ReadCssVariable | ComponentSemanticTokens;
};
