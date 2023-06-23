import { ColorSchema } from './types';

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
    }
} as const;

// AUTHENTIC = primary now
// ACTION = secondary now

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
        warning: Colors.yellow[900]
    },
    background: {
        primary: Colors.white,
        secondary: Colors.blue.primary[50],
        info: Colors.blue.secondary[50],
        danger: Colors.orange[50],
        success: Colors.green[50],
        warning: Colors.yellow[50],
        primaryEmphasized: Colors.blue.primary[900],
        secondaryEmphasized: Colors.blue.primary[550],
        infoEmphasized: Colors.blue.secondary[900],
        dangerEmphasized: Colors.orange[900],
        successEmphasized: Colors.green[900],
        warningEmphasized: Colors.yellow[900]
    },
    icon: {
        primary: Colors.blue.primary[900],
        primaryInverted: Colors.white,
        secondary: Colors.blue.primary[550],
        secondaryInverted: Colors.blue.primary[200],
        tertiary: Colors.blue.primary[350],
        tertiaryInverted: Colors.blue.primary[350],
        disabled: Colors.blue.primary[200],
        disabledInverted: Colors.blue.primary[550],
        action: Colors.blue.secondary[900],
        danger: Colors.orange[900],
        success: Colors.green[900],
        warning: Colors.yellow[900]
    },
    border: {
        primary: Colors.blue.primary[200],
        info: Colors.blue.secondary[350],
        danger: Colors.orange[350],
        success: Colors.green[350],
        warning: Colors.yellow[350],
        infoEmphasized: Colors.blue.secondary[900],
        dangerEmphasized: Colors.orange[900],
        successEmphasized: Colors.green[900],
        warningEmphasized: Colors.yellow[900]
    },
// } satisfies ColorSchema;
}

export const ComponentColors = {
    text:  {
        button: {
            primary: {
                // --wave-c-color-text-button-primary-default
                default: Colors.white,
                // --wave-c-color-text-button-primary-hover
                hover: Colors.white,
                // --wave-c-color-text-button-primary-disabled
                disabled: Colors.white,
                // --wave-c-color-text-button-primary-inverted
                inverted: Colors.blue.primary[900],
                // --wave-c-color-text-button-primary-hoverInverted // This needs rething, as inverted is state, same as hover - Should be in Dark Mode Schema
                hoverInverted: Colors.white,
                // --wave-c-color-text-button-primary-disabledInverted // This needs rething, as inverted is state, same as hover - Should be in Dark Mode Schema
                disabledInverted: Colors.blue.primary[350],
            },
            secondary: {
                // --wave-c-color-text-button-secondary-default
                default: Colors.blue.primary[900],
                // --wave-c-color-text-button-secondary-hover
                hover: Colors.blue.primary[900],
                // --wave-c-color-text-button-secondary-disabled
                disabled: Colors.blue.primary[200],
                // --wave-c-color-text-button-secondary-inverted
                inverted: Colors.white,
                // --wave-c-color-text-button-secondary-hoverInverted // This needs rething, as inverted is state, same as hover - Should be in Dark Mode Schema
                hoverInverted: Colors.blue.primary[900],
                // --wave-c-color-text-button-secondary-disabledInverted // This needs rething, as inverted is state, same as hover - Should be in Dark Mode Schema
                disabledInverted: Colors.blue.primary[550],
            },
            danger: {
                // --wave-c-color-text-button-danger-default
                default: Colors.white,
                // --wave-c-color-text-button-danger-hover
                hover: Colors.white,
                // --wave-c-color-text-button-danger-disabled
                disabled: Colors.white,
                // --wave-c-color-text-button-danger-inverted
                inverted: Colors.white,
                // --wave-c-color-text-button-danger-hoverInverted // This needs rething, as inverted is state, same as hover - Should be in Dark Mode Schema
                hoverInverted: Colors.white,
                // --wave-c-color-text-button-danger-disabledInverted // This needs rething, as inverted is state, same as hover - Should be in Dark Mode Schema
                disabledInverted: Colors.white,
            }
        },
        textButton: {
            primary: {
                default: Colors.blue.secondary[900],
                hover: Colors.blue.secondary[1000],
                disabled: Colors.blue.primary[200],
                inverted: Colors.white,
                hoverInverted: Colors.blue.primary[350],
                disabledInverted: Colors.blue.primary[550],   
            },
            danger: {
                default: Colors.orange[900],
                hover: Colors.orange[1000],
                disabled: Colors.blue.primary[200],
                inverted: Colors.orange[900],
                hoverInverted: Colors.orange[100],
                disabledInverted: Colors.blue.primary[550],   
            },
        }
    },
    icon:  {
        button: {
            primary: {
                // --wave-c-color-icon-button-primary-default
                default: Colors.white,
                // --wave-c-color-icon-button-primary-hover
                hover: Colors.white,
                // --wave-c-color-icon-button-primary-disabled
                disabled: Colors.white,
                // --wave-c-color-icon-button-primary-inverted
                inverted: Colors.blue.primary[900],
                // --wave-c-color-icon-button-primary-hoverInverted // This needs rething, as inverted is state, same as hover - Should be in Dark Mode Schema
                hoverInverted: Colors.white,
                // --wave-c-color-icon-button-primary-disabledInverted // This needs rething, as inverted is state, same as hover - Should be in Dark Mode Schema
                disabledInverted: Colors.blue.primary[350],
            },
            secondary: {
                // --wave-c-color-icon-button-secondary-default
                default: Colors.blue.primary[900],
                // --wave-c-color-icon-button-secondary-hover
                hover: Colors.blue.primary[900],
                // --wave-c-color-icon-button-secondary-disabled
                disabled: Colors.blue.primary[200],
                // --wave-c-color-icon-button-secondary-inverted
                inverted: Colors.white,
                // --wave-c-color-icon-button-secondary-hoverInverted // This needs rething, as inverted is state, same as hover - Should be in Dark Mode Schema
                hoverInverted: Colors.blue.primary[900],
                // --wave-c-color-icon-button-secondary-disabledInverted // This needs rething, as inverted is state, same as hover - Should be in Dark Mode Schema
                disabledInverted: Colors.blue.primary[550],
            },
            danger: {
                // --wave-c-color-icon-button-danger-default
                default: Colors.white,
                // --wave-c-color-icon-button-danger-hover
                hover: Colors.white,
                // --wave-c-color-icon-button-danger-disabled
                disabled: Colors.white,
                // --wave-c-color-icon-button-danger-inverted
                inverted: Colors.white,
                // --wave-c-color-icon-button-danger-hoverInverted // This needs rething, as inverted is state, same as hover - Should be in Dark Mode Schema
                hoverInverted: Colors.white,
                // --wave-c-color-icon-button-danger-disabledInverted // This needs rething, as inverted is state, same as hover - Should be in Dark Mode Schema
                disabledInverted: Colors.white,
            }
        },
        textButton: {
            primary: {
                default: Colors.blue.secondary[900],
                hover: Colors.blue.secondary[1000],
                disabled: Colors.blue.primary[200],
                inverted: Colors.white,
                hoverInverted: Colors.blue.primary[350],
                disabledInverted: Colors.blue.primary[550],
            },
            danger: {
                default: Colors.orange[900],
                hover: Colors.orange[1000],
                disabled: Colors.blue.primary[200],
                inverted: Colors.orange[900],
                hoverInverted: Colors.orange[100],
                disabledInverted: Colors.blue.primary[550],   
            },
        }
    },
    background:  {
        button: {
            primary: {
                // --wave-c-color-icon-button-primary-default
                default: Colors.blue.primary[900],
                // --wave-c-color-icon-button-primary-hover
                hover: Colors.blue.primary[1100],
                // --wave-c-color-icon-button-primary-disabled
                disabled: Colors.blue.primary[200],
                // --wave-c-color-icon-button-primary-inverted
                inverted: Colors.white,
                // --wave-c-color-icon-button-primary-hoverInverted // This needs rething, as inverted is state, same as hover - Should be in Dark Mode Schema
                hoverInverted: Colors.blue.primary[900],
                // --wave-c-color-icon-button-primary-disabledInverted // This needs rething, as inverted is state, same as hover - Should be in Dark Mode Schema
                disabledInverted: Colors.blue.primary[550],
            },
            secondary: {
                // --wave-c-color-icon-button-secondary-default
                default: Colors.white,
                // --wave-c-color-icon-button-secondary-hover
                hover: Colors.blue.primary[50],
                // --wave-c-color-icon-button-secondary-disabled
                disabled: Colors.white,
                // --wave-c-color-icon-button-secondary-inverted
                inverted: 'transparent', // do we need to add a transparent color?
                // --wave-c-color-icon-button-secondary-hoverInverted // This needs rething, as inverted is state, same as hover - Should be in Dark Mode Schema
                hoverInverted: Colors.white,
                // --wave-c-color-icon-button-secondary-disabledInverted // This needs rething, as inverted is state, same as hover - Should be in Dark Mode Schema
                disabledInverted: 'transparent', // do we need to add a transparent color?
            },
            danger: {
                // --wave-c-color-icon-button-danger-default
                default: Colors.orange[900],
                // --wave-c-color-icon-button-danger-hover
                hover: Colors.orange[1000],
                // --wave-c-color-icon-button-danger-disabled
                disabled: Colors.blue.primary[200],
                // --wave-c-color-icon-button-danger-inverted
                inverted: Colors.orange[900],
                // --wave-c-color-icon-button-danger-hoverInverted // This needs rething, as inverted is state, same as hover - Should be in Dark Mode Schema
                hoverInverted: Colors.orange[1000],
                // --wave-c-color-icon-button-danger-disabledInverted // This needs rething, as inverted is state, same as hover - Should be in Dark Mode Schema
                disabledInverted: Colors.blue.primary[200],
            }
        },
        calendar: {
            default: Colors.white,
            hover: Colors.blue.primary[50],
            range: Colors.blue.secondary[50],
            selected: Colors.blue.secondary[900],
            rangeHover: Colors.blue.secondary[350],
        },
        table: {
            skeleton: Colors.blue.primary[50],
            rows: {
                zebra: {
                    active: Colors.blue.secondary[150],
                    hover: Colors.blue.secondary[100],  
                    secondary: 'rgba(241, 242, 244, 0.4)',
                },
                lines: {
                    active: Colors.blue.secondary[100],
                    hover: Colors.blue.secondary[50],
                },
                blank: {
                    active: Colors.blue.secondary[100],
                    hover: Colors.blue.secondary[50],
                },
            }
        },
        toggle: { 
            handle: {
                default: {
                    off: Colors.white,
                    on: Colors.white,
                    disabled: Colors.blue.primary[50],
                },
                error: {
                    off: Colors.white,
                    on: Colors.white,
                    disabled: Colors.blue.primary[50],
                }
            },
            frame: {
                default: {
                    off: Colors.blue.primary[200],
                    on: Colors.blue.secondary[900],
                    disabled: Colors.blue.primary[50],
                },
                error: {
                    off: Colors.blue.primary[200],
                    on: Colors.orange[900],
                    disabled: Colors.blue.primary[50],
                }
            }
        },
        dialog: {
            dimming: 'rgba(0, 15, 31, 0.6)',
        },
    },
    border:  {
        button: {
            primary: {
                // --wave-c-color-icon-button-primary-default
                default: Colors.blue.primary[900],
                // --wave-c-color-icon-button-primary-hover
                hover: Colors.blue.primary[1100],
                // --wave-c-color-icon-button-primary-disabled
                disabled: Colors.blue.primary[200],
                // --wave-c-color-icon-button-primary-inverted
                inverted: Colors.white,
                // --wave-c-color-icon-button-primary-hoverInverted // This needs rething, as inverted is state, same as hover - Should be in Dark Mode Schema
                hoverInverted: Colors.blue.primary[900],
                // --wave-c-color-icon-button-primary-disabledInverted // This needs rething, as inverted is state, same as hover - Should be in Dark Mode Schema
                disabledInverted: Colors.blue.primary[550],
            },
            secondary: {
                // --wave-c-color-icon-button-secondary-default
                default: Colors.blue.primary[200],
                // --wave-c-color-icon-button-secondary-hover
                hover: Colors.blue.primary[200],
                // --wave-c-color-icon-button-secondary-disabled
                disabled: Colors.blue.primary[200],
                // --wave-c-color-icon-button-secondary-inverted
                inverted: Colors.white,
                // --wave-c-color-icon-button-secondary-hoverInverted // This needs rething, as inverted is state, same as hover - Should be in Dark Mode Schema
                hoverInverted: Colors.white,
                // --wave-c-color-icon-button-secondary-disabledInverted // This needs rething, as inverted is state, same as hover - Should be in Dark Mode Schema
                disabledInverted: Colors.blue.primary[550],
            },
            danger: {
                // --wave-c-color-icon-button-danger-default
                default: Colors.orange[900],
                // --wave-c-color-icon-button-danger-hover
                hover: Colors.orange[1000],
                // --wave-c-color-icon-button-danger-disabled
                disabled: Colors.blue.primary[200],
                // --wave-c-color-icon-button-danger-inverted
                inverted: Colors.orange[900],
                // --wave-c-color-icon-button-danger-hoverInverted // This needs rething, as inverted is state, same as hover - Should be in Dark Mode Schema
                hoverInverted: Colors.orange[1000],
                // --wave-c-color-icon-button-danger-disabledInverted // This needs rething, as inverted is state, same as hover - Should be in Dark Mode Schema
                disabledInverted: Colors.blue.primary[200],
            }
        },
        calendar: {
            default: Colors.blue.primary[200],
            hover: Colors.blue.primary[200],
            range: Colors.blue.secondary[350],
            selected: Colors.blue.secondary[1000],
            rangeHover: Colors.blue.secondary[350],
        },
        table: {
            rows: {
                lines: Colors.blue.primary[200],
            },
            header: Colors.blue.primary[550],
        }
    },
}