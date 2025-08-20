import { SemanticColorsSchema } from './types';
import { createThemeGlobalStyle } from './globalStyles';

// Bare Tier (--wave-b-color-...)
export const Colors = {
    white: 'hsl(0, 0%, 99%)',
    black: 'hsl(0, 0%, 0%)',
    neutral: {
        900: 'hsl(0, 0%, 11%)',
        800: 'hsl(0, 0%, 19%)',
        750: 'hsl(0, 0%, 28%)',
        650: 'hsl(0, 0%, 37%)',
        550: 'hsl(0, 0%, 47%)',
        350: 'hsl(0, 0%, 67%)',
        200: 'hsl(0, 0%, 78%)',
        50: 'hsl(0, 0%, 95%)',
        10: 'hsl(0, 0%, 98%)'
    },
    primary: {
        1100: 'hsl(348, 100%, 13%)',
        1000: 'hsl(345, 100%, 20%)',
        950: 'hsl(344, 100%, 29%)',
        900: 'hsl(342, 100%, 37%)',
        500: 'hsl(342, 100%, 45%)',
        350: 'hsl(352, 100%, 66%)',
        150: 'hsl(355, 100%, 76%)',
        120: 'hsl(357, 100%, 85%)',
        100: 'hsl(0, 100%, 93%)',
        50: 'hsl(3, 100%, 96%)',
        10: 'hsl(0, 100%, 98%)'
    },
    brand: {
        rushhour: 'hsl(342, 100%, 45%)',
        lyft: 'hsl(316, 81%, 56%)'
    },
    magenta: {
        1000: 'hsl(302, 100%, 37%)',
        900: 'hsl(302, 100%, 50%)',
        350: 'hsl(302, 100%, 81%)',
        50: 'hsl(300, 100%, 97%)'
    },
    green: {
        1000: 'hsl(124, 47%, 7%)',
        900: 'hsl(123, 48%, 33%)',
        350: 'hsl(123, 27%, 46%)',
        50: 'hsl(120, 24%, 93%)'
    },
    yellow: {
        900: 'hsl(46, 94%, 46%)',
        350: 'hsl(46, 98%, 61%)',
        50: 'hsl(46, 100%, 95%)'
    },
    red: {
        1000: 'hsl(345, 100%, 20%)',
        900: 'hsl(342, 100%, 37%)',
        350: 'hsl(357, 100%, 85%)'
    },
    transparent: 'transparent'
} as const;

// Semantic Colors Tier (--wave-s-color-...)
export const SemanticColors = {
    black: Colors.black,
    white: Colors.white,
    transparent: Colors.transparent,
    foreground: {
        primary: Colors.neutral[900],
        accent: {
            default: Colors.primary[900],
            emphasized: Colors.primary[950]
        },
        neutral: {
            faded: Colors.neutral[200],
            default: Colors.neutral[350],
            emphasized: Colors.neutral[550]
        },
        'on-background': {
            primary: Colors.white,
            accent: Colors.white,
            neutral: Colors.neutral[900],
            disabled: Colors.white,
            info: Colors.white,
            success: Colors.white,
            warning: Colors.neutral[900],
            danger: Colors.white
        },
        disabled: Colors.neutral[200],
        focus: Colors.neutral[550],
        info: {
            faded: Colors.neutral[550],
            default: Colors.neutral[900]
        },
        success: {
            default: Colors.green[900]
        },
        warning: {
            default: Colors.yellow[900]
        },
        danger: {
            default: Colors.red[900],
            emphasized: Colors.red[1000]
        }
    },
    background: {
        page: {
            default: Colors.white,
            'elevation-0': Colors.neutral[10],
            'elevation-1': Colors.white,
            'elevation-2': Colors.white,
            'elevation-3': Colors.white
        },
        element: {
            primary: {
                default: Colors.primary[500],
                emphasized: Colors.primary[900]
            },
            disabled: {
                faded: Colors.neutral[50],
                default: Colors.neutral[200]
            },
            neutral: {
                default: Colors.white,
                emphasized: Colors.neutral[50]
            },
            accent: {
                faded: Colors.primary[50],
                default: Colors.primary[500],
                emphasized: Colors.primary[900]
            },
            info: {
                default: Colors.neutral[50],
                emphasized: Colors.neutral[550]
            },
            success: {
                default: Colors.white
            },
            warning: {
                default: Colors.white
            },
            danger: {
                faded: Colors.primary[50],
                default: Colors.red[900],
                emphasized: Colors.red[1000]
            }
        },
        surface: {
            primary: {
                default: Colors.neutral[550],
                emphasized: Colors.neutral[900]
            },
            neutral: {
                faded: Colors.neutral[10],
                default: Colors.neutral[50],
                emphasized: Colors.neutral[200]
            },
            info: {
                faded: Colors.primary[100],
                active: Colors.primary[150],
                default: Colors.neutral[50],
                emphasized: Colors.neutral[550]
            },
            success: {
                default: Colors.neutral[50],
                emphasized: Colors.green[900]
            },
            warning: {
                default: Colors.neutral[50],
                emphasized: Colors.yellow[900]
            },
            danger: {
                faded: Colors.primary[50],
                default: Colors.neutral[50],
                emphasized: Colors.red[900]
            }
        },
        backdrop: Colors.neutral[900]
    },
    border: {
        accent: {
            faded: Colors.primary[350],
            default: Colors.primary[500]
        },
        neutral: {
            faded: Colors.neutral[50],
            default: Colors.neutral[200],
            emphasized: Colors.neutral[550]
        },
        disabled: Colors.neutral[200],
        focus: Colors.neutral[550],
        info: {
            banner: Colors.neutral[200],
            faded: Colors.neutral[200],
            default: Colors.neutral[550]
        },
        success: {
            banner: Colors.neutral[200],
            faded: Colors.green[350],
            default: Colors.green[900]
        },
        warning: {
            banner: Colors.neutral[200],
            default: Colors.yellow[900]
        },
        danger: {
            banner: Colors.neutral[200],
            faded: Colors.red[350],
            default: Colors.red[900]
        }
    },
    logo: {
        free: Colors.brand.rushhour,
        now: Colors.brand.rushhour,
        subtitle: Colors.black,
        lyft: Colors.brand.lyft
    },
    shadow: {
        default: Colors.neutral[200]
    },
    chart: {
        '1': Colors.primary[50],
        '2': Colors.primary[120],
        '3': Colors.primary[350],
        '4': Colors.primary[500],
        '5': Colors.primary[950],
        '6': Colors.primary[1100]
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
            emphasized: Colors.neutral[350]
        },
        neutral: {
            faded: Colors.neutral[350],
            default: Colors.neutral[350],
            emphasized: Colors.neutral[200]
        },
        'on-background': {
            primary: Colors.primary[900],
            accent: Colors.primary[900],
            neutral: Colors.neutral[900],
            disabled: Colors.neutral[350],
            info: Colors.white,
            success: Colors.white,
            warning: Colors.neutral[900],
            danger: Colors.white
        },
        disabled: Colors.neutral[550],
        focus: Colors.white,
        info: {
            faded: Colors.white,
            default: Colors.white
        },
        success: {
            default: Colors.green[900]
        },
        warning: {
            default: Colors.yellow[900]
        },
        danger: {
            default: Colors.red[900],
            emphasized: Colors.primary[50]
        }
    },
    background: {
        page: {
            default: Colors.neutral[800],
            'elevation-0': Colors.neutral[900],
            'elevation-1': Colors.neutral[750],
            'elevation-2': Colors.neutral[650],
            'elevation-3': Colors.neutral[550]
        },
        element: {
            primary: {
                default: Colors.neutral[50],
                emphasized: Colors.white
            },
            accent: {
                faded: Colors.primary[900],
                default: Colors.primary[500],
                emphasized: Colors.primary[350]
            },
            disabled: {
                faded: Colors.neutral[650],
                default: Colors.neutral[550]
            },
            neutral: {
                default: Colors.neutral[350],
                emphasized: Colors.white
            },
            info: {
                default: Colors.neutral[350],
                emphasized: Colors.neutral[550]
            },
            success: {
                default: Colors.green[50]
            },
            warning: {
                default: Colors.yellow[50]
            },
            danger: {
                faded: Colors.red[1000],
                default: Colors.red[900],
                emphasized: Colors.red[1000]
            }
        },
        surface: {
            primary: {
                default: Colors.neutral[550],
                emphasized: Colors.neutral[200]
            },
            neutral: {
                faded: Colors.neutral[350],
                default: Colors.neutral[550],
                emphasized: Colors.neutral[550]
            },
            info: {
                faded: Colors.primary[900],
                active: Colors.primary[900],
                default: Colors.primary[1000],
                emphasized: Colors.neutral[550]
            },
            success: {
                default: Colors.neutral[750],
                emphasized: Colors.green[900]
            },
            warning: {
                default: Colors.neutral[750],
                emphasized: Colors.yellow[900]
            },
            danger: {
                faded: Colors.red[1000],
                default: Colors.neutral[750],
                emphasized: Colors.red[900]
            }
        },
        backdrop: Colors.neutral[50]
    },
    border: {
        accent: {
            faded: Colors.primary[350],
            default: Colors.primary[500]
        },
        neutral: {
            faded: Colors.neutral[50],
            default: Colors.neutral[200],
            emphasized: Colors.neutral[50]
        },
        disabled: Colors.neutral[550],
        focus: Colors.neutral[550],
        info: {
            banner: Colors.neutral[200],
            faded: Colors.neutral[550],
            default: Colors.neutral[550]
        },
        success: {
            banner: Colors.green[900],
            faded: Colors.green[900],
            default: Colors.green[900]
        },
        warning: {
            banner: Colors.yellow[900],
            default: Colors.yellow[900]
        },
        danger: {
            banner: Colors.red[900],
            faded: Colors.red[900],
            default: Colors.red[900]
        }
    },
    logo: {
        free: Colors.brand.rushhour,
        now: Colors.white,
        subtitle: Colors.white,
        lyft: Colors.white
    },
    shadow: {
        default: Colors.neutral[650]
    },
    chart: {
        '1': Colors.primary[50],
        '2': Colors.primary[120],
        '3': Colors.primary[150],
        '4': Colors.primary[350],
        '5': Colors.primary[500],
        '6': Colors.primary[950]
    }
} satisfies SemanticColorsSchema;

export const GlobalStyle = createThemeGlobalStyle(Colors, SemanticColors, SemanticColorsDarkSchema);
