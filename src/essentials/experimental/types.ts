import { Color } from '../Colors/types';

export type Palette = {
    [key in 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 95 | 97]: Color;
};

export type ExtendedPalette = Palette & {
    [key in 0 | 99 | 100]: Color;
};

export type ColorPaletteSchema = {
    neutral: ExtendedPalette;
    marooned: Palette;
    red: Palette;
    green: Palette;
    blue: Palette;
    orange: Palette;
    yellow: Palette;
};

export type SemanticColorsSchema = {
    // Accent
    accent: Color;
    'on-accent': Color;
    // Interactive
    interactive: Color;
    'on-interactive': Color;
    'interactive-container': Color;
    'on-interactive-container': Color;
    // Neutrals
    surface: Color;
    'on-surface': Color;
    'surface-variant': Color;
    'on-surface-variant': Color;
    outline: Color;
    'outline-variant': Color;
    // Inverse
    'inverse-surface': Color;
    'inverse-on-surface': Color;
    'inverse-on-surface-variant': Color;
    // Informative
    negative: Color;
    'negative-container': Color;
    'on-negative-container': Color;
    positive: Color;
    'positive-container': Color;
    'on-positive-container': Color;
};
