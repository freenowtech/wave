import { SemanticColorsSchema } from './types';

// Global Colors Tier (--wave-g-color-...)
export const Colors = {
    white: 'hsl(0, 0%, 100%)',
    black: 'hsl(0, 0%, 0%)',
    blue: {
        primary: {
            1100: 'hsl(211, 100%, 6%)',
            900: 'hsl(211, 100%, 12%)',
            550: 'hsl(210, 16%, 46%)',
            350: 'hsl(213, 14%, 66%)',
            200: 'hsl(210, 14%, 80%)',
            50: 'hsl(220, 12%, 95%)',
        },
        secondary: {
            1000: 'hsl(212, 92%, 34%)',
            900: 'hsl(212, 92%, 45%)',
            350: 'hsl(212, 75%, 78%)',
            150: 'hsl(213, 74%, 91%)',
            100: 'hsl(211, 74%, 94%)',
            50: 'hsl(210, 75%, 97%)',
        }
    },
    red: {
        1000: 'hsl(352, 92%, 39%)',
        900: 'hsl(352, 100%, 52%)',
    },
    magenta: {
        1000: 'hsl(302, 100%, 37%)',
        900: 'hsl(302, 100%, 50%)',
        350: 'hsl(302, 100%, 81%)',
        50: 'hsl(300, 100%, 97%)',
    },
    green: {
        1000: 'hsl(149, 92%, 24%)',
        900: 'hsl(149, 93%, 32%)',
        350: 'hsl(149, 44%, 74%)',
        50: 'hsl(147, 47%, 96%)',
    },
    yellow: {
        900: 'hsl(48, 100%, 50%)',
        350: 'hsl(48, 100%, 81%)',
        50: 'hsl(47, 100%, 97%)',
    },
    orange: {
        1000: 'hsl(21, 96%, 38%)',
        900: 'hsl(21, 100%, 51%)',
        350: 'hsl(21, 100%, 81%)',
        50: 'hsl(21, 100%, 97%)'
    },
    transparent: 'transparent',
} as const;

// AUTHENTIC = primary now
// ACTION = secondary now
// Semantic Colors Tier (--wave-s-color-...)
export const SemanticColors = {
    text: {
        primary: Colors.blue.primary[900],
        primaryInverted: Colors.white,
        secondary: Colors.blue.primary[550],
        secondaryInverted: Colors.blue.primary[200],
        tertiary: Colors.blue.primary[350],
        tertiaryInverted: Colors.blue.primary[350],
        disabled: Colors.blue.primary[200],
        disabledInverted: Colors.blue.primary[550],
        link: Colors.blue.secondary[900],
        linkInverted: Colors.white,
        linkHover: Colors.blue.secondary[1000],
        linkHoverInverted: Colors.blue.secondary[50],
        danger: Colors.orange[1000],
        dangerInverted: Colors.orange[900],
        success: Colors.green[900],
        warning: Colors.yellow[900],
        info: Colors.blue.secondary[900]
    },
    background: {
        primary: {
            default: Colors.white,
            emphasized: Colors.blue.primary[900],
            hover: Colors.blue.primary[1100],
            disabled: Colors.blue.primary[200],
        },   
        secondary: {
            default: Colors.blue.primary[50],
            emphasized: Colors.blue.primary[550],
        },
        danger: {
            default: Colors.orange[50],
            emphasized: Colors.orange[900],
            hover: Colors.orange[1000]
        },
        info: {
            default: Colors.blue.secondary[50],
            emphasized: Colors.blue.secondary[900],
            hover: Colors.blue.secondary[350],
        },
        success: {
            default: Colors.green[50],
            emphasized: Colors.green[900],
        },
        warning: {
            default: Colors.yellow[50],
            emphasized: Colors.yellow[900],
        },
        transparent: Colors.transparent,
    },
    icon: {
        primary: {
            default: Colors.blue.primary[900],
            inverted:  Colors.white,
        },
        secondary: {
            default: Colors.blue.primary[550],
            inverted: Colors.blue.primary[200],
        },
        tertiary: {
            default: Colors.blue.primary[350],
            inverted: Colors.blue.primary[350],
        },
        disabled: {
            default: Colors.blue.primary[200],
            inverted: Colors.blue.primary[550],
        },
        action: {
            default: Colors.blue.secondary[900],
            emphasized: Colors.blue.secondary[1000],
        },
        danger: {
            default: Colors.orange[900],
            emphasized: Colors.orange[1000],
        },
        success: Colors.green[900],
        warning: Colors.yellow[900],
        info: Colors.blue.secondary[900]
    },
    border: {
        primary: {
            default: Colors.blue.primary[900],
            emphasized: Colors.blue.primary[1100],
            inverted: Colors.white,
        },
        secondary: {
            default: Colors.blue.primary[200],
            inverted: Colors.white,
        },
        disabled: {
            default: Colors.blue.primary[200],
            inverted: Colors.blue.primary[550],
        },
        info: {
            default: Colors.blue.secondary[350],
            emphasized: Colors.blue.secondary[900],
        },
        success: {
            default: Colors.green[350],
            emphasized: Colors.green[900],
        },
        warning: {
            default: Colors.yellow[350],
            emphasized: Colors.yellow[900]
        },
        danger: {
            default: Colors.orange[900],
            emphasized: Colors.orange[1000],
            disabled: Colors.orange[350],
        },
    },
} satisfies SemanticColorsSchema
