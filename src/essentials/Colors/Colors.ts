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
        warning: Colors.yellow[900]
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
        warning: Colors.yellow[900]
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

// Component Colors Tier (--wave-c-color-...)
export const ComponentColors = {
    text:  {
        button: {
            primary: {
                // --wave-c-color-text-button-primary-default
                default: SemanticColors.text.primaryInverted,
                // --wave-c-color-text-button-primary-hover
                hover: SemanticColors.text.primaryInverted,
                // --wave-c-color-text-button-primary-disabled
                disabled: SemanticColors.text.primaryInverted,
                // --wave-c-color-text-button-primary-inverted
                inverted: SemanticColors.text.primary,
                // --wave-c-color-text-button-primary-hoverInverted // This needs rething, as inverted is state, same as hover - Should be in Dark Mode Schema
                hoverInverted: SemanticColors.text.tertiaryInverted,
                // --wave-c-color-text-button-primary-disabledInverted // This needs rething, as inverted is state, same as hover - Should be in Dark Mode Schema
                disabledInverted: SemanticColors.text.tertiaryInverted,
            },
            secondary: {
                // --wave-c-color-text-button-secondary-default
                default: SemanticColors.text.primary,
                // --wave-c-color-text-button-secondary-hover
                hover: SemanticColors.text.primary,
                // --wave-c-color-text-button-secondary-disabled
                disabled: SemanticColors.text.disabled,
                // --wave-c-color-text-button-secondary-inverted
                inverted: SemanticColors.text.primaryInverted,
                // --wave-c-color-text-button-secondary-hoverInverted // This needs rething, as inverted is state, same as hover - Should be in Dark Mode Schema
                hoverInverted: SemanticColors.text.primary,
                // --wave-c-color-text-button-secondary-disabledInverted // This needs rething, as inverted is state, same as hover - Should be in Dark Mode Schema
                disabledInverted: SemanticColors.text.disabledInverted,
            },
            danger: {
                // --wave-c-color-text-button-danger-default
                default: SemanticColors.text.primaryInverted,
                // --wave-c-color-text-button-danger-hover
                hover: SemanticColors.text.primaryInverted,
                // --wave-c-color-text-button-danger-disabled
                disabled: SemanticColors.text.primaryInverted,
                // --wave-c-color-text-button-danger-inverted
                inverted: SemanticColors.text.primaryInverted,
                // --wave-c-color-text-button-danger-hoverInverted // This needs rething, as inverted is state, same as hover - Should be in Dark Mode Schema
                hoverInverted: SemanticColors.text.primaryInverted,
                // --wave-c-color-text-button-danger-disabledInverted // This needs rething, as inverted is state, same as hover - Should be in Dark Mode Schema
                disabledInverted: SemanticColors.text.primaryInverted,
            }
        },
        textButton: {
            primary: {
                default: SemanticColors.text.link,
                hover: SemanticColors.text.linkHover,
                disabled: SemanticColors.text.disabled,
                inverted: SemanticColors.text.linkInverted,
                hoverInverted: SemanticColors.text.tertiary,
                disabledInverted: SemanticColors.text.disabledInverted,
            },
            danger: {
                default: SemanticColors.text.dangerInverted,
                hover: SemanticColors.text.danger,
                disabled: SemanticColors.text.disabled,
                inverted: SemanticColors.text.dangerInverted,
                hoverInverted: SemanticColors.text.danger,
                disabledInverted: SemanticColors.text.disabledInverted,
            },
        }
    },
    background:  {
        button: {
            primary: {
                // --wave-c-color-icon-button-primary-default
                default: SemanticColors.background.primary.emphasized,
                // --wave-c-color-icon-button-primary-hover
                hover: SemanticColors.background.primary.hover,
                // --wave-c-color-icon-button-primary-disabled
                disabled: SemanticColors.background.primary.disabled,
                // --wave-c-color-icon-button-primary-inverted
                inverted: SemanticColors.background.primary.default,
                // --wave-c-color-icon-button-primary-hoverInverted // This needs rething, as inverted is state, same as hover - Should be in Dark Mode Schema
                hoverInverted: SemanticColors.background.primary.emphasized,
                // --wave-c-color-icon-button-primary-disabledInverted // This needs rething, as inverted is state, same as hover - Should be in Dark Mode Schema
                disabledInverted: SemanticColors.background.secondary.emphasized,
            },
            secondary: {
                // --wave-c-color-icon-button-secondary-default
                default: SemanticColors.background.primary.default,
                // --wave-c-color-icon-button-secondary-hover
                hover: SemanticColors.background.secondary.default,
                // --wave-c-color-icon-button-secondary-disabled
                disabled: SemanticColors.background.primary.default,
                // --wave-c-color-icon-button-secondary-inverted
                inverted: SemanticColors.background.transparent,
                // --wave-c-color-icon-button-secondary-hoverInverted // This needs rething, as inverted is state, same as hover - Should be in Dark Mode Schema
                hoverInverted: SemanticColors.background.primary.default,
                // --wave-c-color-icon-button-secondary-disabledInverted // This needs rething, as inverted is state, same as hover - Should be in Dark Mode Schema
                disabledInverted: SemanticColors.background.transparent,
            },
            danger: {
                // --wave-c-color-icon-button-danger-default
                default: SemanticColors.background.danger.emphasized,
                // --wave-c-color-icon-button-danger-hover
                hover: SemanticColors.background.danger.hover,
                // --wave-c-color-icon-button-danger-disabled
                disabled: SemanticColors.background.primary.disabled,
                // --wave-c-color-icon-button-danger-inverted
                inverted: SemanticColors.background.danger.emphasized,
                // --wave-c-color-icon-button-danger-hoverInverted // This needs rething, as inverted is state, same as hover - Should be in Dark Mode Schema
                hoverInverted: SemanticColors.background.danger.hover,
                // --wave-c-color-icon-button-danger-disabledInverted // This needs rething, as inverted is state, same as hover - Should be in Dark Mode Schema
                disabledInverted: SemanticColors.background.primary.disabled,
            }
        },
        calendar: {
            default: SemanticColors.background.primary.default,
            hover: SemanticColors.background.secondary.default,
            range: SemanticColors.background.info.default,
            selected: SemanticColors.background.info.emphasized,
            rangeHover: SemanticColors.background.info.hover,
        },
        table: {
            skeleton: SemanticColors.background.secondary.default,
            rows: {
                zebra: {
                    // Does it make sense to define SemanticColors for these cases? (Check when revisiting this for refactor)
                    // What would be suitable semantic names?
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
                    off: SemanticColors.background.primary.default,
                    on: SemanticColors.background.primary.default,
                    disabled: SemanticColors.background.secondary.default,
                },
                error: {
                    off: SemanticColors.background.primary.default,
                    on: SemanticColors.background.primary.default,
                    disabled: SemanticColors.background.secondary.default,
                }
            },
            frame: {
                default: {
                    off: SemanticColors.background.primary.disabled,
                    on: SemanticColors.background.info.emphasized,
                    disabled: SemanticColors.background.secondary.default,
                },
                error: {
                    off: SemanticColors.background.primary.disabled,
                    on: SemanticColors.background.danger.emphasized,
                    disabled: SemanticColors.background.secondary.default,
                }
            }
        },
        dialog: {
            // Define new color?
            dimming: 'rgba(0, 15, 31, 0.6)',
        },
    },
    border:  {
        button: {
            primary: {
                // --wave-c-color-icon-button-primary-default
                default: SemanticColors.border.primary.default,
                // --wave-c-color-icon-button-primary-hover
                hover: SemanticColors.border.primary.emphasized,
                // --wave-c-color-icon-button-primary-disabled
                disabled: SemanticColors.border.disabled.default,
                // --wave-c-color-icon-button-primary-inverted
                inverted: SemanticColors.border.primary.inverted,
                // --wave-c-color-icon-button-primary-hoverInverted // This needs rething, as inverted is state, same as hover - Should be in Dark Mode Schema
                hoverInverted: SemanticColors.border.primary.default,
                // --wave-c-color-icon-button-primary-disabledInverted // This needs rething, as inverted is state, same as hover - Should be in Dark Mode Schema
                disabledInverted: SemanticColors.border.disabled.inverted,
            },
            secondary: {
                // --wave-c-color-icon-button-secondary-default
                default: SemanticColors.border.secondary.default,
                // --wave-c-color-icon-button-secondary-hover
                hover: SemanticColors.border.secondary.default,
                // --wave-c-color-icon-button-secondary-disabled
                disabled: SemanticColors.border.disabled.default,
                // --wave-c-color-icon-button-secondary-inverted
                inverted: SemanticColors.border.secondary.inverted,
                // --wave-c-color-icon-button-secondary-hoverInverted // This needs rething, as inverted is state, same as hover - Should be in Dark Mode Schema
                hoverInverted: Colors.white,
                // --wave-c-color-icon-button-secondary-disabledInverted // This needs rething, as inverted is state, same as hover - Should be in Dark Mode Schema
                disabledInverted: SemanticColors.border.disabled.inverted,
            },
            danger: {
                // --wave-c-color-icon-button-danger-default
                default: SemanticColors.border.danger.default,
                // --wave-c-color-icon-button-danger-hover
                hover: SemanticColors.border.danger.emphasized,
                // --wave-c-color-icon-button-danger-disabled
                disabled: SemanticColors.border.disabled.default,
                // --wave-c-color-icon-button-danger-inverted
                inverted: SemanticColors.border.danger.default,
                // --wave-c-color-icon-button-danger-hoverInverted // This needs rething, as inverted is state, same as hover - Should be in Dark Mode Schema
                hoverInverted: SemanticColors.border.danger.emphasized,
                // --wave-c-color-icon-button-danger-disabledInverted // This needs rething, as inverted is state, same as hover - Should be in Dark Mode Schema
                disabledInverted: SemanticColors.border.disabled.default,
            }
        },
        calendar: {
            default: SemanticColors.border.secondary.default,
            hover: SemanticColors.border.secondary.default,
            range: SemanticColors.border.info.default,
            selected: SemanticColors.border.info.emphasized,
            rangeHover: SemanticColors.border.secondary.default,
        },
        table: {
            rows: {
                lines: SemanticColors.border.secondary.default,
            },
            header: SemanticColors.border.disabled.inverted,
        }
    },
    icon:  {
        button: {
            primary: {
                // --wave-c-color-icon-button-primary-default
                default: SemanticColors.icon.primary.inverted,
                // --wave-c-color-icon-button-primary-hover
                hover: SemanticColors.icon.primary.inverted,
                // --wave-c-color-icon-button-primary-disabled
                disabled: SemanticColors.icon.primary.inverted,
                // --wave-c-color-icon-button-primary-inverted
                inverted: SemanticColors.icon.primary.default,
                // --wave-c-color-icon-button-primary-hoverInverted // This needs rething, as inverted is state, same as hover - Should be in Dark Mode Schema
                hoverInverted: SemanticColors.icon.primary.inverted,
                // --wave-c-color-icon-button-primary-disabledInverted // This needs rething, as inverted is state, same as hover - Should be in Dark Mode Schema
                disabledInverted: SemanticColors.icon.tertiary.default,
            },
            secondary: {
                // --wave-c-color-icon-button-secondary-default
                default: SemanticColors.icon.primary.default,
                // --wave-c-color-icon-button-secondary-hover
                hover: SemanticColors.icon.primary.default,
                // --wave-c-color-icon-button-secondary-disabled
                disabled: SemanticColors.icon.disabled.default,
                // --wave-c-color-icon-button-secondary-inverted
                inverted: SemanticColors.icon.primary.inverted,
                // --wave-c-color-icon-button-secondary-hoverInverted // This needs rething, as inverted is state, same as hover - Should be in Dark Mode Schema
                hoverInverted: SemanticColors.icon.primary.default,
                // --wave-c-color-icon-button-secondary-disabledInverted // This needs rething, as inverted is state, same as hover - Should be in Dark Mode Schema
                disabledInverted: SemanticColors.icon.disabled.inverted,
            },
            danger: {
                // --wave-c-color-icon-button-danger-default
                default: SemanticColors.icon.primary.inverted,
                // --wave-c-color-icon-button-danger-hover
                hover: SemanticColors.icon.primary.inverted,
                // --wave-c-color-icon-button-danger-disabled
                disabled: SemanticColors.icon.primary.inverted,
                // --wave-c-color-icon-button-danger-inverted
                inverted: SemanticColors.icon.primary.inverted,
                // --wave-c-color-icon-button-danger-hoverInverted // This needs rething, as inverted is state, same as hover - Should be in Dark Mode Schema
                hoverInverted: SemanticColors.icon.primary.inverted,
                // --wave-c-color-icon-button-danger-disabledInverted // This needs rething, as inverted is state, same as hover - Should be in Dark Mode Schema
                disabledInverted: SemanticColors.icon.primary.inverted,
            }
        },
        textButton: {
            primary: {
                default: SemanticColors.icon.action.default,
                hover: SemanticColors.icon.action.emphasized,
                disabled: SemanticColors.icon.disabled.default,
                inverted: SemanticColors.icon.primary.inverted,
                hoverInverted: SemanticColors.icon.tertiary.inverted,
                disabledInverted: SemanticColors.icon.disabled.inverted,
            },
            danger: {
                default: SemanticColors.icon.danger.default,
                hover: SemanticColors.icon.danger.emphasized,
                disabled: SemanticColors.icon.disabled.default,
                inverted: SemanticColors.icon.danger.default,
                hoverInverted: SemanticColors.icon.danger.emphasized,
                disabledInverted: SemanticColors.icon.disabled.inverted,
            },
        }
    },
}