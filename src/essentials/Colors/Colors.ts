import { SemanticColorsSchema } from './types';

// Bare Colors Tier (--wave-b-color-...)
export const Colors = {
    white: 'hsl(0, 0%, 100%)',
    black: 'hsl(0, 0%, 0%)',
    blue: {
        primary: {
            1100: 'hsl(211, 100%, 6%)',
            900: 'hsl(211, 100%, 12%)',
            750: 'hsl(210, 30%, 25%)',
            550: 'hsl(210, 16%, 46%)',
            350: 'hsl(213, 14%, 66%)',
            200: 'hsl(210, 14%, 80%)',
            50: 'hsl(220, 12%, 95%)'
        },
        secondary: {
            1000: 'hsl(212, 92%, 34%)',
            900: 'hsl(212, 92%, 45%)',
            350: 'hsl(212, 75%, 78%)',
            150: 'hsl(213, 74%, 91%)',
            100: 'hsl(211, 74%, 94%)',
            50: 'hsl(210, 75%, 97%)'
        }
    },
    red: {
        1000: 'hsl(352, 92%, 39%)',
        900: 'hsl(352, 100%, 52%)'
    },
    magenta: {
        1000: 'hsl(302, 100%, 37%)',
        900: 'hsl(302, 100%, 50%)',
        350: 'hsl(302, 100%, 81%)',
        50: 'hsl(300, 100%, 97%)'
    },
    green: {
        1000: 'hsl(149, 92%, 24%)',
        900: 'hsl(149, 93%, 32%)',
        350: 'hsl(149, 44%, 74%)',
        50: 'hsl(147, 47%, 96%)'
    },
    yellow: {
        900: 'hsl(48, 100%, 50%)',
        350: 'hsl(48, 100%, 81%)',
        50: 'hsl(47, 100%, 97%)'
    },
    orange: {
        1000: 'hsl(21, 96%, 38%)',
        900: 'hsl(21, 100%, 51%)',
        350: 'hsl(21, 100%, 81%)',
        50: 'hsl(21, 100%, 97%)'
    },
    transparent: 'transparent'
} as const;

// AUTHENTIC = primary now
// ACTION = secondary now
// Semantic Colors Tier (--wave-s-color-...)
export const SemanticColors = {
    black: Colors.black,
    white: Colors.white,
    transparent: Colors.transparent,
    foreground: {
        primary: Colors.blue.primary[900],
        'on-background': {
            primary: Colors.white,
            accent: Colors.white,
            info: Colors.white,
            success: Colors.white,
            warning: Colors.blue.primary[900],
            danger: Colors.white,
            disabled: Colors.white,
            neutral: Colors.blue.primary[900]
        },
        disabled: Colors.blue.primary[200],
        focus: Colors.blue.secondary[900],
        neutral: {
            faded: Colors.blue.primary[200],
            default: Colors.blue.primary[350],
            emphasized: Colors.blue.primary[550]
        },
        accent: {
            default: Colors.blue.secondary[900],
            emphasized: Colors.blue.secondary[1000]
        },
        info: {
            faded: Colors.blue.secondary[900],
            default: Colors.blue.secondary[900]
        },
        success: {
            default: Colors.green[900]
        },
        warning: {
            default: Colors.blue.primary[900]
        },
        danger: {
            default: Colors.orange[900],
            emphasized: Colors.orange[1000]
        }
    },
    background: {
        page: {
            default: Colors.white,
            'elevation-1': Colors.white,
            'elevation-2': Colors.white,
            'elevation-3': Colors.white
        },
        element: {
            disabled: {
                faded: Colors.blue.primary[50],
                default: Colors.blue.primary[200],
                emphasized: Colors.blue.primary[550]
            },
            primary: {
                default: Colors.blue.primary[900],
                emphasized: Colors.blue.primary[1100]
            },
            neutral: {
                default: Colors.white,
                emphasized: Colors.blue.primary[50]
            },
            accent: {
                faded: Colors.blue.secondary[50],
                default: Colors.blue.secondary[350],
                emphasized: Colors.blue.secondary[900]
            },
            info: {
                default: Colors.blue.secondary[50],
                emphasized: Colors.blue.secondary[900]
            },
            success: {
                default: Colors.green[50],
                emphasized: Colors.green[900]
            },
            warning: {
                default: Colors.yellow[50],
                emphasized: Colors.yellow[900]
            },
            danger: {
                faded: Colors.orange[50],
                default: Colors.orange[900],
                emphasized: Colors.orange[1000]
            }
        },
        surface: {
            primary: {
                default: Colors.blue.primary[900],
                emphasized: Colors.blue.primary[550]
            },
            neutral: {
                faded: Colors.blue.primary[50],
                default: Colors.white,
                emphasized: Colors.blue.primary[550]
            },
            info: {
                faded: Colors.blue.secondary[100],
                active: Colors.blue.secondary[150],
                default: Colors.blue.secondary[50],
                emphasized: Colors.blue.secondary[900]
            },
            success: {
                default: Colors.green[50],
                emphasized: Colors.green[900]
            },
            warning: {
                default: Colors.yellow[50],
                emphasized: Colors.yellow[900]
            },
            danger: {
                default: Colors.orange[50],
                emphasized: Colors.orange[900]
            }
        },
        backdrop: Colors.blue.primary[900]
    },
    border: {
        neutral: {
            faded: Colors.white,
            default: Colors.blue.primary[200],
            emphasized: Colors.blue.primary[550]
        },
        accent: {
            faded: Colors.blue.secondary[350],
            default: Colors.blue.secondary[900],
            emphasized: Colors.blue.secondary[1000]
        },
        focus: Colors.blue.secondary[900],
        disabled: Colors.blue.primary[200],
        info: {
            faded: Colors.blue.secondary[350],
            default: Colors.blue.secondary[900]
        },
        success: {
            faded: Colors.green[350],
            default: Colors.green[900]
        },
        warning: {
            faded: Colors.yellow[350],
            default: Colors.yellow[900]
        },
        danger: {
            faded: Colors.orange[350],
            default: Colors.orange[900]
        }
    },
    shadow: {
        default: Colors.blue.primary[200]
    }
} satisfies SemanticColorsSchema;

export const SemanticColorsDarkSchema = {
    black: Colors.black,
    white: Colors.white,
    transparent: Colors.transparent,
    foreground: {
        primary: Colors.white,
        accent: {
            default: Colors.white,
            emphasized: Colors.blue.primary[200]
        },
        neutral: {
            default: Colors.blue.primary[350],
            emphasized: Colors.blue.primary[200]
        },
        'on-background': {
            primary: Colors.blue.secondary[900],
            disabled: Colors.blue.primary[350],
            accent: Colors.white,
            neutral: Colors.blue.primary[900],
            info: Colors.white,
            danger: Colors.white
        },
        disabled: Colors.blue.primary[350],
        focus: Colors.white,
        info: {
            faded: Colors.white
        },
        danger: {
            default: Colors.orange[900],
            emphasized: Colors.orange[1000]
        }
    },
    background: {
        page: {
            default: Colors.blue.primary[900],
            'elevation-1': Colors.blue.primary[750],
            'elevation-2': Colors.blue.primary[550],
            'elevation-3': Colors.blue.primary[350]
        },
        element: {
            primary: {
                default: Colors.white,
                emphasized: Colors.blue.secondary[900]
            },
            disabled: {
                faded: Colors.blue.primary[750],
                default: Colors.blue.primary[550]
            },
            accent: {
                faded: Colors.blue.secondary[1000],
                default: Colors.blue.secondary[900],
                emphasized: Colors.blue.secondary[900]
            },
            info: {
                default: Colors.blue.secondary[900],
                emphasized: Colors.blue.secondary[1000]
            },
            neutral: {
                default: Colors.blue.primary[350],
                emphasized: Colors.white
            },
            danger: {
                faded: Colors.orange[1000],
                default: Colors.orange[900],
                emphasized: Colors.orange[1000]
            }
        },
        backdrop: Colors.blue.primary[50]
    },
    border: {
        neutral: {
            default: Colors.white
        },
        accent: {
            faded: Colors.blue.secondary[350],
            default: Colors.blue.secondary[350]
        },
        info: {
            default: Colors.blue.secondary[900]
        },
        danger: {
            default: Colors.orange[900]
        },
        focus: Colors.blue.secondary[900],
        disabled: Colors.blue.primary[550]
    },
    shadow: {
        default: Colors.blue.primary[550]
    }
}; // satisfies SemanticColorsSchema;
