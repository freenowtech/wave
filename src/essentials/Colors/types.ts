import { Object, String, List } from 'ts-toolbelt';

type HSL = `hsl(${number}, ${number}%, ${number}%)` | `hsla(${number}, ${number}%, ${number}%, ${number})`;
type RGB = `rgb(${number}, ${number}, ${number})` | `rgba(${number}, ${number}, ${number}, ${number})`;

export type Color = HSL | RGB;

type PartialSchema = Object.Partial<SemanticColorsSchema, 'deep'>

export interface SemanticColorsSchema {
    overrides: {
        label: PartialSchema,
        datepicker: PartialSchema,
        infobanner: PartialSchema
    },
    background: {
        primary: {
            default: Color,
            inverted: Color,
            emphasized: Color,
            hover: Color,
            disabled: Color,
        },
        secondary: {
            default: Color,
            emphasized: Color,
        },
        tertiary: {
            default:Color,
            disabled: Color,
        },
        danger: {
            default: Color,
            emphasized: Color,
            hover: Color,
        },
        info: {
            default: Color,
            emphasized: Color,
            hover: Color,
        },
        success: {
            default: Color,
            emphasized: Color,
        },
        warning: {
            default: Color,
            emphasized: Color,
        },
        highlight: Color,
        transparent: 'transparent',
    },
    border: {
        neutral: {
            faded: Color,
            default: Color,
            emphasized: Color,
        }
        accent: {
            faded: Color,
            default: Color,
            emphasized: Color,
        },
        info: {
            faded: Color,
            default: Color,
        },
        success: {
            faded: Color,
            default: Color,
        },
        warning: {
            faded: Color,
            default: Color,
        },
        danger: {
            faded: Color,
            default: Color,
        },
        focus:Color,
        disabled: Color,
        transparent: 'transparent'
    },
    foreground: {
        disabled: Color,
        focus: Color,
        primary: Color,
        'on-background': {
            primary: Color,
            accent: Color,
            info: Color,
            success: Color,
            warning: Color,
            danger: Color,
        },
        neutral: {
            faded: Color,
            default: Color,
            emphasized: Color,
        },
        accent: {
            default: Color,
            emphasized: Color,
        },
        info: {
            faded: Color,
            default: Color,
        },
        success: {
            default: Color,
        },
        warning: {
            default: Color,
        },
        danger: {
            default: Color,
            emphasized: Color,
        },
    },
    shadow: {
        default: Color,
    },
    white: Color,
    black: Color,
}

export type SemanticCssToken = String.Join<List.Required<Object.Paths<SemanticColorsSchema>>, '-'>
export type SemanticCssVariable = `--wave-s-color-${SemanticCssToken}`;

export type ReadCssVariable = `var(${SemanticCssVariable})` | `var(${SemanticCssVariable}, ${string})`;

export type ComponentSemanticTokens = {
    [key: string]: ReadCssVariable | ComponentSemanticTokens;
}
