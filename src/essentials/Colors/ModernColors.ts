import { SemanticColorsSchema } from './types';
import { createThemeGlobalStyle } from './globalStyles';

// Bare Tier (--wave-b-color-...)
export const Colors = {
    white: 'hsl(0, 0%, 99%)',
    black: 'hsl(0, 0%, 0%)',
    neutral: {
        900: 'hsl(350, 10%, 11%)',
        750: 'hsl(0, 5%, 20%)',
        650: 'hsl(353, 5%, 29%)',
        550: 'hsl(0, 2%, 38%)',
        350: 'hsl(0, 1%, 55%)',
        200: 'hsl(0, 1%, 73%)',
        50: 'hsl(0, 2%, 91%)'
    },
    primary: {
        1100: 'hsl(341, 100%, 13%)',
        1000: 'hsl(343, 70%, 22%)',
        950: 'hsl(346, 51%, 33%)',
        900: 'hsl(347, 42%, 43%)',
        500: 'hsl(347, 41%, 50%)',
        350: 'hsl(349, 50%, 65%)',
        150: 'hsl(348, 50%, 76%)',
        120: 'hsl(351, 51%, 85%)',
        100: 'hsl(352, 48%, 91%)',
        50: 'hsl(350, 46%, 95%)',
        10: 'hsl(0, 47%, 97%)'
    },
    brand: {
        rushhour: 'hsl(350, 91%, 41%)'
    },
    magenta: {
        1000: 'hsl(302, 100%, 18%)',
        900: 'hsl(302, 100%, 33%)',
        350: 'hsl(311, 100%, 84%)',
        50: 'hsl(324, 100%, 96%)'
    },
    green: {
        1000: 'hsl(146, 100%, 11%)',
        900: 'hsl(149, 98%, 22%)',
        350: 'hsl(134, 55%, 68%)',
        50: 'hsl(128, 94%, 94%)'
    },
    yellow: {
        900: 'hsl(48, 100%, 47%)',
        350: 'hsl(42, 100%, 79%)',
        50: 'hsl(30, 100%, 97%)'
    },
    red: {
        1000: 'hsl(356, 100%, 29%)',
        900: 'hsl(0, 75%, 42%)',
        350: 'hsl(6, 100%, 84%)'
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
            emphasized: Colors.primary[1000]
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
            'elevation-1': Colors.white,
            'elevation-2': Colors.white,
            'elevation-3': Colors.white
        },
        element: {
            primary: {
                default: Colors.primary[900],
                emphasized: Colors.primary[1000]
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
                default: Colors.primary[350],
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
                faded: Colors.neutral[50],
                default: Colors.white,
                emphasized: Colors.neutral[550]
            },
            info: {
                faded: Colors.primary[100],
                active: Colors.primary[150],
                default: Colors.neutral[50],
                emphasized: Colors.neutral[550]
            },
            success: {
                default: Colors.white,
                emphasized: Colors.green[900]
            },
            warning: {
                default: Colors.white,
                emphasized: Colors.yellow[900]
            },
            danger: {
                faded: Colors.primary[50],
                default: Colors.white,
                emphasized: Colors.red[900]
            }
        },
        backdrop: Colors.neutral[900]
    },
    border: {
        accent: {
            faded: Colors.primary[350],
            default: Colors.primary[900]
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
        subtitle: Colors.black
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
        '6': Colors.primary[1100],
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
            default: Colors.neutral[900],
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
                faded: Colors.primary[1000],
                default: Colors.primary[900],
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
            default: Colors.primary[350]
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
        subtitle: Colors.white
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
        '6': Colors.primary[950],
    }
} satisfies SemanticColorsSchema;

export const GlobalStyle = createThemeGlobalStyle(Colors, SemanticColors, SemanticColorsDarkSchema);
