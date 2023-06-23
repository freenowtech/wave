import { O, S, L } from 'ts-toolbelt';

type HSL = `hsl(${number}, ${number}%, ${number}%)` | `hsla(${number}, ${number}%, ${number}%, ${number})`;
type RGB = `rgb(${number}, ${number}, ${number})` | `rgba(${number}, ${number}, ${number}, ${number})`;

export type Color = HSL | RGB;

export interface ColorSchema {
    text: {
        primary: Color;
        primaryInverted: Color;
        secondary: Color;
        secondaryInverted: Color;
        tertiary: Color;
        tertiaryInverted: Color;
        disabled: Color;
        disabledInverted: Color;
        link: Color;
        linkInverted: Color;
        linkHover: Color;
        linkHoverInverted: Color;
        danger: Color;
        dangerInverted: Color;
        success: Color;
        warning: Color;
    };
    background: {
        primary: Color;
        secondary: Color;
        info: Color;
        danger: Color;
        success: Color;
        warning: Color;
        primaryEmphasized: Color;
        secondaryEmphasized: Color;
        infoEmphasized: Color;
        dangerEmphasized: Color;
        successEmphasized: Color;
        warningEmphasized: Color;
    };
    icon: {
        primary: Color;
        primaryInverted: Color;
        secondary: Color;
        secondaryInverted: Color;
        tertiary: Color;
        tertiaryInverted: Color;
        disabled: Color;
        disabledInverted: Color;
        action: Color;
        danger: Color;
        success: Color;
        warning: Color;
    };
    border: {
        primary: Color;
        info: Color;
        danger: Color;
        success: Color;
        warning: Color;
        infoEmphasized: Color;
        dangerEmphasized: Color;
        successEmphasized: Color;
        warningEmphasized: Color;
    };
}

export type SemanticCssVariable = `--${S.Join<L.Required<O.Paths<ColorSchema>>, '-'>}`;

export type ReadCssVariable = `var(${SemanticCssVariable})` | `var(${SemanticCssVariable}, ${string})`;

export type ComponentSemanticTokens = {
    [key: string]: ReadCssVariable | ComponentSemanticTokens;
}