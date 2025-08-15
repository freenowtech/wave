import { SemanticColorsSchema } from './types';
import { createThemeGlobalStyle } from './globalStyles';

// Bare Tier (--wave-b-color-...)
export const Colors = {
    white: 'hsl(0, 0%, 99%)',
    black: 'hsl(0, 0%, 0%)',
    neutral: {
        10: 'hsl(0, 0%, 11%)',
        20: 'hsl(0, 0%, 19%)',
        30: 'hsl(0, 0%, 28%)',
        40: 'hsl(0, 0%, 37%)',
        50: 'hsl(0, 0%, 47%)',
        60: 'hsl(0, 0%, 57%)',
        70: 'hsl(0, 0%, 67%)',
        80: 'hsl(0, 0%, 78%)',
        90: 'hsl(0, 0%, 89%)',
        95: 'hsl(0, 0%, 95%)',
        97: 'hsl(0, 0%, 98%)',
        99: 'hsl(0, 0%, 99%)'
    },
    primary: {
        10: 'hsl(348, 100%, 13%)',
        20: 'hsl(345, 100%, 20%)',
        30: 'hsl(344, 100%, 29%)',
        40: 'hsl(342, 100%, 37%)',
        50: 'hsl(342, 100%, 45%)',
        60: 'hsl(352, 100%, 66%)',
        70: 'hsl(355, 100%, 76%)',
        80: 'hsl(357, 100%, 85%)',
        90: 'hsl(0, 100%, 93%)',
        95: 'hsl(3, 100%, 96%)',
        97: 'hsl(0, 100%, 98%)'
    },
    brand: {
        freenow: 'hsl(342, 100%, 45%)', // RED-50
        lyft: 'hsl(316, 81%, 56%)'
    },
    magenta: {
        1000: 'hsl(302, 100%, 18%)',
        900: 'hsl(302, 100%, 33%)',
        350: 'hsl(311, 100%, 84%)',
        50: 'hsl(324, 100%, 96%)'
    },
    green: {
        10: 'hsl(124, 47%, 7%)',
        20: 'hsl(122, 47%, 13%)',
        30: 'hsl(124, 48%, 20%)',
        40: 'hsl(123, 48%, 26%)',
        50: 'hsl(123, 48%, 33%)',
        60: 'hsl(123, 27%, 46%)',
        70: 'hsl(124, 23%, 60%)',
        80: 'hsl(122, 24%, 73%)',
        90: 'hsl(124, 24%, 87%)',
        95: 'hsl(120, 24%, 93%)',
        97: 'hsl(120, 20%, 97%)'
    },
    yellow: {
        10: 'hsl(45, 92%, 5%)',
        20: 'hsl(45, 95%, 15%)',
        30: 'hsl(46, 94%, 25%)',
        40: 'hsl(46, 93%, 36%)',
        50: 'hsl(46, 94%, 46%)',
        60: 'hsl(46, 98%, 51%)',
        70: 'hsl(46, 98%, 61%)',
        80: 'hsl(46, 97%, 71%)',
        90: 'hsl(46, 98%, 80%)',
        95: 'hsl(46, 96%, 90%)',
        97: 'hsl(46, 100%, 95%)'
    },
    red: {
        10: 'hsl(348, 100%, 13%)',
        20: 'hsl(345, 100%, 20%)',
        30: 'hsl(344, 100%, 29%)',
        40: 'hsl(342, 100%, 37%)',
        50: 'hsl(342, 100%, 45%)',
        60: 'hsl(352, 100%, 66%)',
        70: 'hsl(355, 100%, 76%)',
        80: 'hsl(357, 100%, 85%)',
        90: 'hsl(0, 100%, 93%)',
        95: 'hsl(3, 100%, 96%)',
        97: 'hsl(0, 100%, 98%)'
    },
    transparent: 'transparent'
} as const;

// Semantic Colors Tier (--wave-s-color-...)
export const SemanticColors = {
    black: Colors.black,
    white: Colors.white,
    transparent: Colors.transparent,
    foreground: {
        primary: Colors.neutral[10],
        accent: {
            default: Colors.primary[40],
            emphasized: Colors.primary[20]
        },
        neutral: {
            faded: Colors.neutral[80],
            default: Colors.neutral[60],
            emphasized: Colors.neutral[40]
        },
        'on-background': {
            primary: Colors.white,
            accent: Colors.white,
            neutral: Colors.neutral[10],
            disabled: Colors.white,
            info: Colors.white,
            success: Colors.white,
            warning: Colors.neutral[10],
            danger: Colors.white
        },
        disabled: Colors.neutral[80],
        focus: Colors.neutral[40],
        info: {
            faded: Colors.neutral[40],
            default: Colors.neutral[10]
        },
        success: {
            default: Colors.green[40]
        },
        warning: {
            default: Colors.yellow[60]
        },
        danger: {
            default: Colors.red[40],
            emphasized: Colors.red[30]
        }
    },
    background: {
        page: {
            default: Colors.white,
            'elevation-0': Colors.neutral[95],
            'elevation-1': Colors.white,
            'elevation-2': Colors.white,
            'elevation-3': Colors.white
        },
        element: {
            primary: {
                default: Colors.primary[40],
                emphasized: Colors.primary[20]
            },
            disabled: {
                faded: Colors.neutral[90],
                default: Colors.neutral[80]
            },
            neutral: {
                default: Colors.white,
                emphasized: Colors.neutral[90]
            },
            accent: {
                faded: Colors.primary[50],
                default: Colors.primary[70],
                emphasized: Colors.primary[40]
            },
            info: {
                default: Colors.neutral[90],
                emphasized: Colors.neutral[40]
            },
            success: {
                default: Colors.white
            },
            warning: {
                default: Colors.white
            },
            danger: {
                faded: Colors.primary[50],
                default: Colors.red[40],
                emphasized: Colors.red[30]
            }
        },
        surface: {
            primary: {
                default: Colors.neutral[40],
                emphasized: Colors.neutral[10]
            },
            neutral: {
                faded: Colors.neutral[90],
                default: Colors.white,
                emphasized: Colors.neutral[40]
            },
            info: {
                faded: Colors.primary[95],
                active: Colors.primary[80],
                default: Colors.neutral[90],
                emphasized: Colors.neutral[40]
            },
            success: {
                default: Colors.white,
                emphasized: Colors.green[40]
            },
            warning: {
                default: Colors.white,
                emphasized: Colors.yellow[60]
            },
            danger: {
                faded: Colors.primary[50],
                default: Colors.white,
                emphasized: Colors.red[40]
            }
        },
        backdrop: Colors.neutral[10]
    },
    border: {
        accent: {
            faded: Colors.primary[70],
            default: Colors.primary[40]
        },
        neutral: {
            faded: Colors.neutral[90],
            default: Colors.neutral[80],
            emphasized: Colors.neutral[40]
        },
        disabled: Colors.neutral[80],
        focus: Colors.neutral[40],
        info: {
            banner: Colors.neutral[80],
            faded: Colors.neutral[80],
            default: Colors.neutral[40]
        },
        success: {
            banner: Colors.neutral[80],
            faded: Colors.green[60],
            default: Colors.green[40]
        },
        warning: {
            banner: Colors.neutral[80],
            default: Colors.yellow[60]
        },
        danger: {
            banner: Colors.neutral[80],
            faded: Colors.red[80],
            default: Colors.red[40]
        }
    },
    logo: {
        free: Colors.brand.freenow,
        now: Colors.brand.freenow,
        subtitle: Colors.black,
        lyft: Colors.brand.lyft
    },
    shadow: {
        default: Colors.neutral[80]
    },
    chart: {
        '1': Colors.primary[50],
        '2': Colors.primary[90],
        '3': Colors.primary[70],
        '4': Colors.primary[60],
        '5': Colors.primary[30],
        '6': Colors.primary[10]
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
            emphasized: Colors.neutral[60]
        },
        neutral: {
            faded: Colors.neutral[60],
            default: Colors.neutral[60],
            emphasized: Colors.neutral[80]
        },
        'on-background': {
            primary: Colors.primary[40],
            accent: Colors.primary[40],
            neutral: Colors.neutral[10],
            disabled: Colors.neutral[60],
            info: Colors.white,
            success: Colors.white,
            warning: Colors.neutral[10],
            danger: Colors.white
        },
        disabled: Colors.neutral[40],
        focus: Colors.white,
        info: {
            faded: Colors.white,
            default: Colors.white
        },
        success: {
            default: Colors.green[40]
        },
        warning: {
            default: Colors.yellow[60]
        },
        danger: {
            default: Colors.red[40],
            emphasized: Colors.primary[50]
        }
    },
    background: {
        page: {
            default: Colors.neutral[20],
            'elevation-0': Colors.neutral[10],
            'elevation-1': Colors.neutral[20],
            'elevation-2': Colors.neutral[30],
            'elevation-3': Colors.neutral[40]
        },
        element: {
            primary: {
                default: Colors.neutral[90],
                emphasized: Colors.white
            },
            accent: {
                faded: Colors.primary[20],
                default: Colors.primary[40],
                emphasized: Colors.primary[70]
            },
            disabled: {
                faded: Colors.neutral[30],
                default: Colors.neutral[40]
            },
            neutral: {
                default: Colors.neutral[60],
                emphasized: Colors.white
            },
            info: {
                default: Colors.neutral[60],
                emphasized: Colors.neutral[40]
            },
            success: {
                default: Colors.green[90]
            },
            warning: {
                default: Colors.yellow[97]
            },
            danger: {
                faded: Colors.red[30],
                default: Colors.red[40],
                emphasized: Colors.red[30]
            }
        },
        surface: {
            primary: {
                default: Colors.neutral[40],
                emphasized: Colors.neutral[80]
            },
            neutral: {
                faded: Colors.neutral[60],
                default: Colors.neutral[40],
                emphasized: Colors.neutral[40]
            },
            info: {
                faded: Colors.primary[40],
                active: Colors.primary[40],
                default: Colors.primary[20],
                emphasized: Colors.neutral[40]
            },
            success: {
                default: Colors.neutral[20],
                emphasized: Colors.green[40]
            },
            warning: {
                default: Colors.neutral[20],
                emphasized: Colors.yellow[60]
            },
            danger: {
                faded: Colors.red[30],
                default: Colors.neutral[20],
                emphasized: Colors.red[40]
            }
        },
        backdrop: Colors.neutral[90]
    },
    border: {
        accent: {
            faded: Colors.primary[70],
            default: Colors.primary[70]
        },
        neutral: {
            faded: Colors.neutral[90],
            default: Colors.neutral[80],
            emphasized: Colors.neutral[90]
        },
        disabled: Colors.neutral[40],
        focus: Colors.neutral[40],
        info: {
            banner: Colors.neutral[80],
            faded: Colors.neutral[40],
            default: Colors.neutral[40]
        },
        success: {
            banner: Colors.green[40],
            faded: Colors.green[40],
            default: Colors.green[40]
        },
        warning: {
            banner: Colors.yellow[60],
            default: Colors.yellow[60]
        },
        danger: {
            banner: Colors.red[40],
            faded: Colors.red[40],
            default: Colors.red[40]
        }
    },
    logo: {
        free: Colors.brand.freenow,
        now: Colors.white,
        subtitle: Colors.white,
        lyft: Colors.white
    },
    shadow: {
        default: Colors.neutral[30]
    },
    chart: {
        '1': Colors.primary[50],
        '2': Colors.primary[90],
        '3': Colors.primary[80],
        '4': Colors.primary[70],
        '5': Colors.primary[60],
        '6': Colors.primary[30]
    }
} satisfies SemanticColorsSchema;

export const GlobalStyle = createThemeGlobalStyle(Colors, SemanticColors, SemanticColorsDarkSchema);
