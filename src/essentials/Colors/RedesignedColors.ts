import { SemanticColorsSchema } from './types';

// Global Tier (--wave-g-color-...)
export const Colors = {
    white: 'hsla(0, 0%, 99%, 1)',
    black: 'hsla(0, 0%, 0%, 1)',
    blue: {
        primary: {
            1100: 'hsla(0, 0%, 0%, 1)',
            900: 'hsla(350, 10%, 11%, 1)',
            550: 'hsla(0, 2%, 38%, 1)',
            350: 'hsla(0, 1%, 55%, 1)',
            200: 'hsla(0, 1%, 73%, 1)',
            50: 'hsla(0, 2%, 91%, 1)',
        },
        secondary: {
            1000: 'hsla(346, 51%, 33%, 1)',
            900: 'hsla(347, 42%, 43%, 1)',
            350: 'hsla(349, 89%, 76%, 1)',
            150: 'hsla(351, 100%, 85%, 1)',
            100: 'hsla(352, 100%, 93%, 1)',
            50: 'hsla(9, 100%, 96%, 1)',
        }
    },
    red: {
        1000: 'hsla(350, 91%, 41%, 1)',
        900: 'hsla(347, 42%, 43%, 1)',
    },
    magenta: {
        1000: 'hsla(302, 100%, 18%, 1)',
        900: 'hsla(302, 100%, 33%, 1)',
        350: 'hsla(311, 100%, 84%, 1)',
        50: 'hsla(324, 100%, 96%, 1)',
    },
    green: {
        1000: 'hsla(146, 100%, 11%, 1)',
        900: 'hsla(149, 98%, 22%, 1)',
        350: 'hsla(134, 55%, 68%, 1)',
        50: 'hsla(128, 94%, 94%, 1)',
    },
    yellow: {
        900: 'hsla(48, 100%, 47%, 1)',
        350: 'hsla(42, 100%, 79%, 1)',
        50: 'hsla(30, 100%, 97%, 1)',
    },
    orange: {
        1000: 'hsla(356, 100%, 29%, 1)',
        900: 'hsla(0, 75%, 42%, 1)',
        350: 'hsla(6, 100%, 84%, 1)',
        50: 'hsla(9, 100%, 96%, 1)'
    },
    transparent: 'transparent',
} as const;

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
        info: Colors.blue.primary[550],
    },
    background: {
        primary: {
            default: Colors.white,
            inverted: Colors.blue.primary[900],
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
            default: Colors.blue.primary[50],
            emphasized: Colors.blue.primary[550],
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
            default: Colors.blue.primary[350],
            inverted: Colors.blue.primary[50],
            hover: Colors.blue.primary[900],
            hoverInverted: Colors.white,
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
        info: Colors.blue.primary[350],
    },
    border: {
        primary: {
            default: Colors.blue.primary[200],
            emphasized: Colors.blue.primary[1100],
            inverted: Colors.blue.primary[550],
        },
        secondary: {
            default: Colors.blue.primary[50],
            inverted: Colors.white,
        },
        disabled: {
            default: Colors.blue.primary[200],
            inverted: Colors.blue.primary[550],
        },
        info: {
            default: Colors.blue.primary[200],
            emphasized: Colors.blue.primary[550],
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
            default: Colors.orange[350],
            emphasized: Colors.orange[900],
            disabled: Colors.orange[350],
        },
    },
} satisfies SemanticColorsSchema