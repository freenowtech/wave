import { SemanticColorsSchema } from './types';
import { createThemeGlobalStyle } from './globalStyles';

// Bare Colors Tier (--wave-b-color-...)
export const Colors = {
    white: 'hsl(0, 0%, 100%)',
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
    blue: {
        10: 'hsl(214, 77%, 10%)',
        20: 'hsl(215, 75%, 20%)',
        30: 'hsl(214, 76%, 31%)',
        40: 'hsl(214, 75%, 41%)',
        50: 'hsl(214, 78%, 51%)',
        60: 'hsl(214, 78%, 61%)',
        70: 'hsl(214, 79%, 71%)',
        80: 'hsl(215, 78%, 80%)',
        90: 'hsl(215, 80%, 90%)',
        95: 'hsl(215, 76%, 95%)',
        97: 'hsl(218, 80%, 98%)',

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
    orange: {
        10: 'hsl(32, 92%, 10%)',
        20: 'hsl(32, 92%, 20%)',
        30: 'hsl(33, 92%, 30%)',
        40: 'hsl(32, 92%, 45%)',
        50: 'hsl(32, 92%, 50%)',
        60: 'hsl(32, 91%, 55%)',
        70: 'hsl(32, 91%, 65%)',
        80: 'hsl(32, 92%, 75%)',
        90: 'hsl(32, 92%, 85%)',
        95: 'hsl(32, 92%, 90%)',
        97: 'hsl(30, 100%, 96%)'
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
        accent: {
            default: Colors.blue.secondary[900],
            emphasized: Colors.blue.secondary[1000]
        },
        neutral: {
            faded: Colors.blue.primary[200],
            default: Colors.blue.primary[350],
            emphasized: Colors.blue.primary[550]
        },
        'on-background': {
            primary: Colors.white,
            accent: Colors.white,
            neutral: Colors.blue.primary[900],
            disabled: Colors.white,
            info: Colors.white,
            success: Colors.white,
            warning: Colors.blue.primary[900],
            danger: Colors.white
        },
        disabled: Colors.blue.primary[200],
        focus: Colors.blue.secondary[900],
        info: {
            faded: Colors.blue.secondary[900],
            default: Colors.blue.secondary[900]
        },
        success: {
            default: Colors.green[900]
        },
        warning: {
            default: Colors.yellow[60]
        },
        danger: {
            default: Colors.orange[40],
            emphasized: Colors.orange[30]
        }
    },
    background: {
        page: {
            default: Colors.white,
            'elevation-0': Colors.blue.primary[50],
            'elevation-1': Colors.white,
            'elevation-2': Colors.white,
            'elevation-3': Colors.white
        },
        element: {
            primary: {
                default: Colors.blue.primary[900],
                emphasized: Colors.blue.primary[1100]
            },
            disabled: {
                faded: Colors.blue.primary[50],
                default: Colors.blue.primary[200]
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
                default: Colors.green[97]
            },
            warning: {
                default: Colors.yellow[97]
            },
            danger: {
                faded: Colors.orange[97],
                default: Colors.orange[40],
                emphasized: Colors.orange[30]
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
                default: Colors.green[97],
                emphasized: Colors.green[900]
            },
            warning: {
                default: Colors.yellow[97],
                emphasized: Colors.yellow[60]
            },
            danger: {
                faded: Colors.orange[97],
                default: Colors.orange[97],
                emphasized: Colors.orange[40]
            }
        },
        backdrop: Colors.blue.primary[900]
    },
    border: {
        accent: {
            faded: Colors.blue.secondary[350],
            default: Colors.blue.secondary[900]
        },
        neutral: {
            faded: Colors.white,
            default: Colors.blue.primary[200],
            emphasized: Colors.blue.primary[550]
        },
        disabled: Colors.blue.primary[200],
        focus: Colors.blue.secondary[900],
        info: {
            banner: Colors.blue.secondary[350],
            faded: Colors.blue.secondary[350],
            default: Colors.blue.secondary[900]
        },
        success: {
            banner: Colors.green[350],
            faded: Colors.green[350],
            default: Colors.green[900]
        },
        warning: {
            banner: Colors.yellow[90],
            default: Colors.yellow[60]
        },
        danger: {
            banner: Colors.orange[80],
            faded: Colors.orange[80],
            default: Colors.orange[40]
        }
    },
    logo: {
        free: 'hsl(350, 91%, 41%)',
        now: 'hsl(350, 91%, 41%)',
        subtitle: Colors.black,
        lyft: 'hsl(316, 81%, 56%)'
    },
    shadow: {
        default: Colors.blue.primary[200]
    },
    chart: {
        '1': Colors.blue.secondary[50],
        '2': Colors.blue.secondary[100],
        '3': Colors.blue.secondary[150],
        '4': Colors.blue.secondary[350],
        '5': Colors.blue.secondary[900],
        '6': Colors.blue.secondary[1000]
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
            faded: Colors.blue.primary[200],
            default: Colors.blue.primary[350],
            emphasized: Colors.blue.primary[200]
        },
        'on-background': {
            primary: Colors.blue.secondary[900],
            accent: Colors.white,
            neutral: Colors.blue.primary[900],
            disabled: Colors.blue.primary[350],
            info: Colors.white,
            success: Colors.white,
            warning: Colors.blue.primary[900],
            danger: Colors.white
        },
        disabled: Colors.blue.primary[350],
        focus: Colors.white,
        info: {
            faded: Colors.white,
            default: Colors.white
        },
        success: {
            default: Colors.green[900]
        },
        warning: {
            default: Colors.yellow[60]
        },
        danger: {
            default: Colors.orange[40],
            emphasized: Colors.orange[30]
        }
    },
    background: {
        page: {
            default: Colors.blue.primary[1000],
            'elevation-0': Colors.blue.primary[1100],
            'elevation-1': Colors.blue.primary[750],
            'elevation-2': Colors.blue.primary[550],
            'elevation-3': Colors.blue.primary[350]
        },
        element: {
            primary: {
                default: Colors.white,
                emphasized: Colors.blue.secondary[900]
            },
            accent: {
                faded: Colors.blue.secondary[1000],
                default: Colors.blue.secondary[900],
                emphasized: Colors.blue.secondary[900]
            },
            disabled: {
                faded: Colors.blue.primary[750],
                default: Colors.blue.primary[550]
            },
            neutral: {
                default: Colors.blue.primary[350],
                emphasized: Colors.white
            },
            info: {
                default: Colors.blue.secondary[900],
                emphasized: Colors.blue.secondary[1000]
            },
            success: {
                default: Colors.green[97]
            },
            warning: {
                default: Colors.yellow[97]
            },
            danger: {
                faded: Colors.orange[30],
                default: Colors.orange[40],
                emphasized: Colors.orange[30]
            }
        },
        surface: {
            primary: {
                default: Colors.blue.primary[900],
                emphasized: Colors.blue.primary[200]
            },
            neutral: {
                faded: Colors.blue.secondary[350],
                default: Colors.blue.primary[550],
                emphasized: Colors.blue.primary[550]
            },
            info: {
                faded: Colors.blue.secondary[900],
                active: Colors.blue.secondary[900],
                default: Colors.blue.secondary[1000],
                emphasized: Colors.blue.secondary[1000]
            },
            success: {
                default: Colors.blue.primary[750],
                emphasized: Colors.green[900]
            },
            warning: {
                default: Colors.blue.primary[750],
                emphasized: Colors.yellow[60]
            },
            danger: {
                faded: Colors.orange[80],
                default: Colors.blue.primary[750],
                emphasized: Colors.red[40]
            }
        },
        backdrop: Colors.blue.primary[50]
    },
    border: {
        accent: {
            faded: Colors.blue.secondary[350],
            default: Colors.blue.secondary[350]
        },
        neutral: {
            faded: Colors.white,
            default: Colors.white,
            emphasized: Colors.blue.primary[550]
        },
        disabled: Colors.blue.primary[550],
        focus: Colors.blue.secondary[900],
        info: {
            banner: Colors.blue.secondary[350],
            default: Colors.blue.secondary[900],
            faded: Colors.blue.secondary[900]
        },
        success: {
            banner: Colors.green[350],
            faded: Colors.green[900],
            default: Colors.green[900]
        },
        warning: {
            banner: Colors.yellow[90],
            default: Colors.yellow[60]
        },
        danger: {
            banner: Colors.orange[80],
            faded: Colors.orange[40],
            default: Colors.orange[40]
        }
    },
    logo: {
        free: 'hsl(350, 91%, 41%)',
        now: Colors.white,
        subtitle: Colors.white,
        lyft: Colors.white
    },
    shadow: {
        default: Colors.blue.primary[550]
    },
    chart: {
        '1': Colors.blue.secondary[50],
        '2': Colors.blue.secondary[100],
        '3': Colors.blue.secondary[150],
        '4': Colors.blue.secondary[350],
        '5': Colors.blue.secondary[900],
        '6': Colors.blue.secondary[1000]
    }
} satisfies SemanticColorsSchema;

export const GlobalStyle = createThemeGlobalStyle(Colors, SemanticColors, SemanticColorsDarkSchema);
