import { createThemeGlobalStyle } from './globalStyles';
import { ColorPaletteSchema, SemanticColorsSchema } from './types';

export const ColorPalette = {
    neutral: {
        100: 'hsl(0, 0%, 100%)',
        99: 'hsl(0, 6%, 99%)',
        97: 'hsl(0, 6%, 97%)',
        95: 'hsl(0, 6%, 94%)',
        90: 'hsl(0, 6%, 82%)',
        80: 'hsl(0, 6%, 76%)',
        70: 'hsl(0, 6%, 64%)',
        60: 'hsl(0, 6%, 55%)',
        50: 'hsl(0, 6%, 47%)',
        40: 'hsl(0, 6%, 38%)',
        30: 'hsl(0, 6%, 25%)',
        20: 'hsl(0, 6%, 20%)',
        10: 'hsl(0, 6%, 11%)',
        0: 'hsl(0, 0%, 0%)'
    },
    marooned: {
        97: 'hsl(0, 47%, 97%)',
        95: 'hsl(350, 46%, 95%)',
        90: 'hsl(352, 48%, 91%)',
        80: 'hsl(351, 51%, 85%)',
        70: 'hsl(348, 50%, 76%)',
        60: 'hsl(349, 50%, 65%)',
        50: 'hsl(347, 41%, 50%)',
        40: 'hsl(347, 42%, 43%)',
        30: 'hsl(346, 51%, 33%)',
        20: 'hsl(343, 70%, 22%)',
        10: 'hsl(341, 100%, 13%)'
    },
    red: {
        97: 'hsl(348, 63%, 97%)',
        95: 'hsl(348, 67%, 94%)',
        90: 'hsl(351, 63%, 88%)',
        80: 'hsl(351, 65%, 77%)',
        70: 'hsl(350, 64%, 65%)',
        60: 'hsl(350, 65%, 55%)',
        50: 'hsl(350, 91%, 41%)',
        40: 'hsl(350, 92%, 33%)',
        30: 'hsl(350, 92%, 25%)',
        20: 'hsl(351, 91%, 17%)',
        10: 'hsl(351, 90%, 8%)'
    },
    green: {
        97: 'hsl(120, 20%, 97%)',
        95: 'hsl(120, 24%, 93%)',
        90: 'hsl(124, 24%, 87%)',
        80: 'hsl(122, 24%, 73%)',
        70: 'hsl(124, 23%, 60%)',
        60: 'hsl(123, 27%, 46%)',
        50: 'hsl(123, 48%, 33%)',
        40: 'hsl(123, 48%, 26%)',
        30: 'hsl(124, 48%, 20%)',
        20: 'hsl(122, 47%, 13%)',
        10: 'hsl(124, 47%, 7%)'
    },
    blue: {
        97: 'hsl(218, 80%, 98%)',
        95: 'hsl(215, 76%, 95%)',
        90: 'hsl(215, 80%, 90%)',
        80: 'hsl(215, 78%, 80%)',
        70: 'hsl(214, 79%, 71%)',
        60: 'hsl(214, 78%, 61%)',
        50: 'hsl(214, 78%, 51%)',
        40: 'hsl(214, 75%, 41%)',
        30: 'hsl(214, 76%, 31%)',
        20: 'hsl(215, 75%, 20%)',
        10: 'hsl(214, 77%, 10%)'
    },
    orange: {
        97: 'hsl(31, 100%, 97%)',
        95: 'hsl(32, 92%, 90%)',
        90: 'hsl(32, 92%, 85%)',
        80: 'hsl(32, 92%, 75%)',
        70: 'hsl(32, 91%, 65%)',
        60: 'hsl(32, 91%, 55%)',
        50: 'hsl(32, 92%, 50%)',
        40: 'hsl(32, 92%, 45%)',
        30: 'hsl(33, 92%, 30%)',
        20: 'hsl(32, 92%, 20%)',
        10: 'hsl(32, 92%, 10%)'
    },
    yellow: {
        97: 'hsl(46, 100%, 95%)',
        95: 'hsl(46, 96%, 90%)',
        90: 'hsl(46, 98%, 80%)',
        80: 'hsl(46, 97%, 71%)',
        70: 'hsl(46, 98%, 61%)',
        60: 'hsl(46, 98%, 51%)',
        50: 'hsl(46, 94%, 46%)',
        40: 'hsl(46, 93%, 36%)',
        30: 'hsl(46, 94%, 25%)',
        20: 'hsl(45, 95%, 15%)',
        10: 'hsl(45, 92%, 5%)'
    }
} satisfies ColorPaletteSchema;

export const SemanticColorsLight = {
    // Accent
    accent: 'transparent',
    'on-accent': 'transparent',
    // Interactive
    interactive: ColorPalette.marooned['50'],
    'on-interactive': ColorPalette.neutral['99'],
    'interactive-container': ColorPalette.marooned['90'],
    'on-interactive-container': ColorPalette.marooned['20'],
    // Neutrals
    surface: ColorPalette.neutral['99'],
    'on-surface': ColorPalette.neutral['10'],
    'surface-variant': ColorPalette.neutral['95'],
    'on-surface-variant': ColorPalette.neutral['40'],
    outline: ColorPalette.neutral['50'],
    'outline-variant': ColorPalette.neutral['80'],
    // Inverse
    'inverse-surface': ColorPalette.neutral['10'],
    'inverse-on-surface': ColorPalette.neutral['99'],
    'inverse-on-surface-variant': ColorPalette.neutral['80'],
    // Informative
    negative: ColorPalette.red[40],
    'negative-container': ColorPalette.red[95],
    'on-negative-container': ColorPalette.red[30],
    positive: ColorPalette.green[40],
    'positive-container': ColorPalette.green[95],
    'on-positive-container': ColorPalette.green[30]
} satisfies SemanticColorsSchema;

export const SemanticColorsDark = {
    // Accent
    accent: 'transparent',
    'on-accent': 'transparent',
    // Interactive
    interactive: ColorPalette.marooned['70'],
    'on-interactive': ColorPalette.neutral['10'],
    'interactive-container': ColorPalette.marooned['20'],
    'on-interactive-container': ColorPalette.marooned['95'],
    // Neutrals
    surface: ColorPalette.neutral['10'],
    'on-surface': ColorPalette.neutral['99'],
    'surface-variant': ColorPalette.neutral['30'],
    'on-surface-variant': ColorPalette.neutral['80'],
    outline: ColorPalette.neutral['60'],
    'outline-variant': ColorPalette.neutral['40'],
    // Inverse
    'inverse-surface': ColorPalette.neutral['99'],
    'inverse-on-surface': ColorPalette.neutral['10'],
    'inverse-on-surface-variant': ColorPalette.neutral['20'],
    // Informative
    negative: ColorPalette.red[80],
    'negative-container': ColorPalette.red[30],
    'on-negative-container': ColorPalette.red[95],
    positive: ColorPalette.green[80],
    'positive-container': ColorPalette.green[30],
    'on-positive-container': ColorPalette.green[95]
} satisfies SemanticColorsSchema;

type Accents = {
    accent: SemanticColorsSchema['accent'];
    onAccent: SemanticColorsSchema['on-accent'];
    accentDark?: SemanticColorsSchema['accent'];
    onAccentDark?: SemanticColorsSchema['on-accent'];
};

export const createGlobalStyle = ({ accent, onAccent, accentDark, onAccentDark }: Accents) =>
    createThemeGlobalStyle(
        ColorPalette,
        { ...SemanticColorsLight, accent, 'on-accent': onAccent },
        { ...SemanticColorsDark, accent: accentDark || accent, 'on-accent': onAccentDark || onAccent }
    );
