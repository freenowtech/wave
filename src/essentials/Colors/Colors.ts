import { SemanticColorsSchema } from './types';
import { createThemeGlobalStyle } from './globalStyles';

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
            default: Colors.yellow[900]
        },
        danger: {
            default: Colors.orange[900],
            emphasized: Colors.orange[1000]
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
                default: Colors.green[50]
            },
            warning: {
                default: Colors.yellow[50]
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
                faded: Colors.orange[50],
                default: Colors.orange[50],
                emphasized: Colors.orange[900]
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
            banner: Colors.yellow[350],
            default: Colors.yellow[900]
        },
        danger: {
            banner: Colors.orange[350],
            faded: Colors.orange[350],
            default: Colors.orange[900]
        }
    },
    logo: {
        free: 'hsl(350, 91%, 41%)',
        now: 'hsl(350, 91%, 41%)',
        subtitle: Colors.black
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
            default: Colors.yellow[900]
        },
        danger: {
            default: Colors.orange[900],
            emphasized: Colors.orange[1000]
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
                default: Colors.green[50]
            },
            warning: {
                default: Colors.yellow[50]
            },
            danger: {
                faded: Colors.orange[1000],
                default: Colors.orange[900],
                emphasized: Colors.orange[1000]
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
                emphasized: Colors.yellow[900]
            },
            danger: {
                faded: Colors.orange[350],
                default: Colors.blue.primary[750],
                emphasized: Colors.red[1000]
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
            banner: Colors.yellow[350],
            default: Colors.yellow[900]
        },
        danger: {
            banner: Colors.orange[350],
            faded: Colors.orange[900],
            default: Colors.orange[900]
        }
    },
    logo: {
        free: 'hsl(350, 91%, 41%)',
        now: Colors.white,
        subtitle: Colors.white
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
