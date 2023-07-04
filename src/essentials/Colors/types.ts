import { Object, String, List } from 'ts-toolbelt';

type HSL = `hsl(${number}, ${number}%, ${number}%)` | `hsla(${number}, ${number}%, ${number}%, ${number})`;
type RGB = `rgb(${number}, ${number}, ${number})` | `rgba(${number}, ${number}, ${number}, ${number})`;

export type Color = HSL | RGB;

export interface SemanticColorsSchema {
    text: {
        primary: Color,
        primaryInverted: Color,
        secondary: Color,
        secondaryInverted: Color,
        tertiary: Color,
        tertiaryInverted: Color,
        disabled: Color,
        disabledInverted: Color,
        link: Color,
        linkInverted: Color,
        linkHover: Color,
        linkHoverInverted: Color,
        info: Color,
        danger: Color,
        dangerInverted: Color,
        success: Color,
        warning: Color,
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
        transparent: 'transparent',
    },
    icon: {
        primary: {
            default: Color,
            inverted: Color,
        },
        secondary: {
            default: Color,
            inverted: Color,
            hover: Color,
            hoverInverted: Color,
        },
        tertiary: {
            default: Color,
            inverted: Color,
        },
        disabled: {
            default: Color,
            inverted: Color,
        },
        action: {
            default: Color,
            emphasized: Color,
        },
        danger: {
            default: Color,
            emphasized: Color,
        },
        success: Color,
        warning: Color,
        info: Color,
    },
    border: {
        primary: {
            default: Color,
            emphasized: Color,
            inverted: Color,
        },
        secondary: {
            default: Color,
            inverted: Color,
        },
        disabled: {
            default: Color,
            inverted: Color,
        },
        info: {
            default: Color,
            emphasized: Color,
        },
        success: {
            default: Color,
            emphasized: Color,
        },
        warning: {
            default: Color,
            emphasized: Color,
        },
        danger: {
            default: Color,
            emphasized: Color,
            disabled: Color,
        },
    },
}

export type SemanticCssToken = String.Join<List.Required<Object.Paths<SemanticColorsSchema>>, '-'>
export type SemanticCssVariable = `--wave-s-color-${SemanticCssToken}`;

export type ReadCssVariable = `var(${SemanticCssVariable})` | `var(${SemanticCssVariable}, ${string})`;

export type ComponentSemanticTokens = {
    [key: string]: ReadCssVariable | ComponentSemanticTokens;
}