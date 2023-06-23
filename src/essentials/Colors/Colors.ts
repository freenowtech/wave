import { ColorSchema } from './types';

export const Colors = {
    WHITE: 'hsl(0, 0%, 100%)',
    BLACK: 'hsl(0, 0%, 0%)',
    AUTHENTIC_BLUE_1100: 'hsl(211, 100%, 6%)',
    AUTHENTIC_BLUE_900: 'hsl(211, 100%, 12%)',
    AUTHENTIC_BLUE_550: 'hsl(210, 16%, 46%)',
    AUTHENTIC_BLUE_350: 'hsl(213, 14%, 66%)',
    AUTHENTIC_BLUE_200: 'hsl(210, 14%, 80%)',
    AUTHENTIC_BLUE_50: 'hsl(220, 12%, 95%)',
    FREEDOM_RED_1000: 'hsl(352, 92%, 39%)',
    FREEDOM_RED_900: 'hsl(352, 100%, 52%)',
    ACTION_BLUE_1000: 'hsl(212, 92%, 34%)',
    ACTION_BLUE_900: 'hsl(212, 92%, 45%)',
    ACTION_BLUE_350: 'hsl(212, 75%, 78%)',
    ACTION_BLUE_150: 'hsl(213, 74%, 91%)',
    ACTION_BLUE_100: 'hsl(211, 74%, 94%)',
    ACTION_BLUE_50: 'hsl(210, 75%, 97%)',
    BUMPY_MAGENTA_1000: 'hsl(302, 100%, 37%)',
    BUMPY_MAGENTA_900: 'hsl(302, 100%, 50%)',
    BUMPY_MAGENTA_350: 'hsl(302, 100%, 81%)',
    BUMPY_MAGENTA_50: 'hsl(300, 100%, 97%)',
    POSITIVE_GREEN_1000: 'hsl(149, 92%, 24%)',
    POSITIVE_GREEN_900: 'hsl(149, 93%, 32%)',
    POSITIVE_GREEN_350: 'hsl(149, 44%, 74%)',
    POSITIVE_GREEN_50: 'hsl(147, 47%, 96%)',
    ATTENTION_YELLOW_900: 'hsl(48, 100%, 50%)',
    ATTENTION_YELLOW_350: 'hsl(48, 100%, 81%)',
    ATTENTION_YELLOW_50: 'hsl(47, 100%, 97%)',
    NEGATIVE_ORANGE_1000: 'hsl(21, 96%, 38%)',
    NEGATIVE_ORANGE_900: 'hsl(21, 100%, 51%)',
    NEGATIVE_ORANGE_350: 'hsl(21, 100%, 81%)',
    NEGATIVE_ORANGE_50: 'hsl(21, 100%, 97%)'
} as const;

export const SemanticColors = {
    text: {
        primary: Colors.AUTHENTIC_BLUE_900,
        primaryInverted: Colors.WHITE,
        secondary: Colors.AUTHENTIC_BLUE_550,
        secondaryInverted: Colors.AUTHENTIC_BLUE_200,
        tertiary: Colors.AUTHENTIC_BLUE_350,
        tertiaryInverted: Colors.AUTHENTIC_BLUE_350,
        disabled: Colors.AUTHENTIC_BLUE_200,
        disabledInverted: Colors.AUTHENTIC_BLUE_550,
        link: Colors.ACTION_BLUE_900,
        linkInverted: Colors.WHITE,
        linkHover: Colors.ACTION_BLUE_1000,
        linkHoverInverted: Colors.ACTION_BLUE_50,
        danger: Colors.NEGATIVE_ORANGE_1000,
        dangerInverted: Colors.NEGATIVE_ORANGE_900,
        success: Colors.POSITIVE_GREEN_900,
        warning: Colors.ATTENTION_YELLOW_900
    },
    background: {
        primary: Colors.WHITE,
        secondary: Colors.AUTHENTIC_BLUE_50,
        info: Colors.ACTION_BLUE_50,
        danger: Colors.NEGATIVE_ORANGE_50,
        success: Colors.POSITIVE_GREEN_50,
        warning: Colors.ATTENTION_YELLOW_50,
        primaryEmphasized: Colors.AUTHENTIC_BLUE_900,
        secondaryEmphasized: Colors.AUTHENTIC_BLUE_550,
        infoEmphasized: Colors.ACTION_BLUE_900,
        dangerEmphasized: Colors.NEGATIVE_ORANGE_900,
        successEmphasized: Colors.POSITIVE_GREEN_900,
        warningEmphasized: Colors.ATTENTION_YELLOW_900
    },
    icon: {
        primary: Colors.AUTHENTIC_BLUE_900,
        primaryInverted: Colors.WHITE,
        secondary: Colors.AUTHENTIC_BLUE_550,
        secondaryInverted: Colors.AUTHENTIC_BLUE_200,
        tertiary: Colors.AUTHENTIC_BLUE_350,
        tertiaryInverted: Colors.AUTHENTIC_BLUE_350,
        disabled: Colors.AUTHENTIC_BLUE_200,
        disabledInverted: Colors.AUTHENTIC_BLUE_550,
        action: Colors.ACTION_BLUE_900,
        danger: Colors.NEGATIVE_ORANGE_900,
        success: Colors.POSITIVE_GREEN_900,
        warning: Colors.ATTENTION_YELLOW_900
    },
    border: {
        primary: Colors.AUTHENTIC_BLUE_200,
        info: Colors.ACTION_BLUE_350,
        danger: Colors.NEGATIVE_ORANGE_350,
        success: Colors.POSITIVE_GREEN_350,
        warning: Colors.ATTENTION_YELLOW_350,
        infoEmphasized: Colors.ACTION_BLUE_900,
        dangerEmphasized: Colors.NEGATIVE_ORANGE_900,
        successEmphasized: Colors.POSITIVE_GREEN_900,
        warningEmphasized: Colors.ATTENTION_YELLOW_900
    }
    // button: {
    //     primary: {
    //         text: Colors.WHITE,
    //         icon: Colors.WHITE,
    //         background: Colors.AUTHENTIC_BLUE_900,
    //         border: Colors.AUTHENTIC_BLUE_900,
    //
    //         textHover: Colors.WHITE,
    //         iconHover: Colors.WHITE,
    //         backgroundHover: Colors.AUTHENTIC_BLUE_1100,
    //         borderHover: Colors.AUTHENTIC_BLUE_1100,
    //
    //         textDisabled: Colors.WHITE,
    //         iconDisabled: Colors.WHITE,
    //         backgroundDisabled: Colors.AUTHENTIC_BLUE_200,
    //         borderDisabled: Colors.AUTHENTIC_BLUE_200,
    //
    //         textInverted: Colors.ACTION_BLUE_900,
    //         iconInverted: Colors.ACTION_BLUE_900,
    //         backgroundInverted: Colors.WHITE,
    //         borderInverted: Colors.WHITE,
    //
    //         textHoverInverted: Colors.WHITE,
    //         iconHoverInverted: Colors.WHITE,
    //         backgroundHoverInverted: Colors.ACTION_BLUE_900,
    //         borderHoverInverted: Colors.ACTION_BLUE_900,
    //
    //         textDisabledInverted: Colors.AUTHENTIC_BLUE_350,
    //         iconDisabledInverted: Colors.AUTHENTIC_BLUE_350,
    //         backgroundDisabledInverted: Colors.AUTHENTIC_BLUE_550,
    //         borderDisabledInverted: Colors.AUTHENTIC_BLUE_550
    //     },
    //     secondary: {
    //         text: Colors.AUTHENTIC_BLUE_900,
    //         icon: Colors.AUTHENTIC_BLUE_900,
    //         background: Colors.WHITE,
    //         border: Colors.AUTHENTIC_BLUE_200,
    //
    //         textHover: Colors.AUTHENTIC_BLUE_900,
    //         iconHover: Colors.AUTHENTIC_BLUE_900,
    //         backgroundHover: Colors.AUTHENTIC_BLUE_50,
    //         borderHover: Colors.AUTHENTIC_BLUE_200,
    //
    //         textDisabled: Colors.AUTHENTIC_BLUE_200,
    //         iconDisabled: Colors.AUTHENTIC_BLUE_200,
    //         backgroundDisabled: Colors.WHITE,
    //         borderDisabled: Colors.AUTHENTIC_BLUE_200,
    //
    //         textInverted: Colors.WHITE,
    //         iconInverted: Colors.WHITE,
    //         backgroundInverted: 'transparent',
    //         borderInverted: Colors.WHITE,
    //
    //         textHoverInverted: Colors.AUTHENTIC_BLUE_900,
    //         iconHoverInverted: Colors.AUTHENTIC_BLUE_900,
    //         backgroundHoverInverted: Colors.WHITE,
    //         borderHoverInverted: Colors.WHITE,
    //
    //         textDisabledInverted: Colors.AUTHENTIC_BLUE_550,
    //         iconDisabledInverted: Colors.AUTHENTIC_BLUE_550,
    //         backgroundDisabledInverted: 'transparent',
    //         borderDisabledInverted: Colors.AUTHENTIC_BLUE_550
    //     },
    //     danger: {
    //         text: Colors.WHITE,
    //         icon: Colors.WHITE,
    //         background: Colors.NEGATIVE_ORANGE_900,
    //         border: Colors.NEGATIVE_ORANGE_900,
    //
    //         textHover: Colors.WHITE,
    //         iconHover: Colors.WHITE,
    //         backgroundHover: Colors.NEGATIVE_ORANGE_1000,
    //         borderHover: Colors.NEGATIVE_ORANGE_1000,
    //
    //         textDisabled: Colors.WHITE,
    //         iconDisabled: Colors.WHITE,
    //         backgroundDisabled: Colors.AUTHENTIC_BLUE_200,
    //         borderDisabled: Colors.AUTHENTIC_BLUE_200,
    //
    //         textInverted: Colors.WHITE,
    //         iconInverted: Colors.WHITE,
    //         backgroundInverted: Colors.NEGATIVE_ORANGE_900,
    //         borderInverted: Colors.NEGATIVE_ORANGE_900,
    //
    //         textHoverInverted: Colors.WHITE,
    //         iconHoverInverted: Colors.WHITE,
    //         backgroundHoverInverted: Colors.NEGATIVE_ORANGE_1000,
    //         borderHoverInverted: Colors.NEGATIVE_ORANGE_1000,
    //
    //         textDisabledInverted: Colors.WHITE,
    //         iconDisabledInverted: Colors.WHITE,
    //         backgroundDisabledInverted: Colors.AUTHENTIC_BLUE_200,
    //         borderDisabledInverted: Colors.AUTHENTIC_BLUE_200
    //     }
    // },
    // textButton: {
    //     primary: {
    //         text: Colors.ACTION_BLUE_900,
    //         icon: Colors.ACTION_BLUE_900,
    //         textHover: Colors.ACTION_BLUE_1000,
    //         iconHover: Colors.ACTION_BLUE_1000,
    //         textDisabled: Colors.AUTHENTIC_BLUE_200,
    //         iconDisabled: Colors.AUTHENTIC_BLUE_200,
    //
    //         textInverted: Colors.WHITE,
    //         iconInverted: Colors.WHITE,
    //         textHoverInverted: Colors.AUTHENTIC_BLUE_350,
    //         iconHoverInverted: Colors.AUTHENTIC_BLUE_350,
    //         textDisabledInverted: Colors.AUTHENTIC_BLUE_550,
    //         iconDisabledInverted: Colors.AUTHENTIC_BLUE_550
    //     },
    //     danger: {
    //         text: Colors.NEGATIVE_ORANGE_900,
    //         icon: Colors.NEGATIVE_ORANGE_900,
    //         textHover: Colors.NEGATIVE_ORANGE_1000,
    //         iconHover: Colors.NEGATIVE_ORANGE_1000,
    //         textDisabled: Colors.AUTHENTIC_BLUE_200,
    //         iconDisabled: Colors.AUTHENTIC_BLUE_200,
    //
    //         textInverted: Colors.NEGATIVE_ORANGE_900,
    //         iconInverted: Colors.NEGATIVE_ORANGE_900,
    //         textHoverInverted: Colors.NEGATIVE_ORANGE_1000,
    //         iconHoverInverted: Colors.NEGATIVE_ORANGE_1000,
    //         textDisabledInverted: Colors.AUTHENTIC_BLUE_550,
    //         iconDisabledInverted: Colors.AUTHENTIC_BLUE_550
    //     }
    // },
    // forms: {
    //     toggle: {
    //         default: {
    //             slideOff: Colors.WHITE,
    //             slideOn: Colors.WHITE,
    //             frameOff: Colors.AUTHENTIC_BLUE_200,
    //             frameOn: Colors.ACTION_BLUE_900
    //         },
    //         error: {
    //             slideOff: Colors.WHITE,
    //             slideOn: Colors.WHITE,
    //             frameOff: Colors.AUTHENTIC_BLUE_200,
    //             frameOn: Colors.NEGATIVE_ORANGE_900
    //         },
    //         disabled: {
    //             slideOff: Colors.AUTHENTIC_BLUE_50,
    //             slideOn: Colors.AUTHENTIC_BLUE_50,
    //             frameOff: Colors.AUTHENTIC_BLUE_50,
    //             frameOn: Colors.AUTHENTIC_BLUE_50
    //         }
    //     },
    //     datePicker: {
    //         calendar: {
    //             border: Colors.AUTHENTIC_BLUE_200,
    //             borderHover: Colors.AUTHENTIC_BLUE_200,
    //             borderRange: Colors.ACTION_BLUE_350,
    //             borderSelected: Colors.ACTION_BLUE_1000,
    //             borderRangeHover: Colors.ACTION_BLUE_350,
    //             background: Colors.WHITE,
    //             backgroundHover: Colors.AUTHENTIC_BLUE_50,
    //             backgroundRange: Colors.ACTION_BLUE_50,
    //             backgroundSelected: Colors.ACTION_BLUE_900,
    //             backgroundRangeHover: Colors.ACTION_BLUE_350
    //         }
    //     }
    // },
    // table: {
    //     skeleton: Colors.AUTHENTIC_BLUE_50,
    //     zebraStyles: {
    //         backgroundSecondary: 'rgba(241, 242, 244, 0.4)',
    //         backgroundHover: Colors.ACTION_BLUE_100,
    //         backgroundActive: Colors.ACTION_BLUE_150
    //     },
    //     linesStyles: {
    //         backgroundHover: Colors.ACTION_BLUE_50,
    //         backgroundActive: Colors.ACTION_BLUE_100,
    //         border: Colors.AUTHENTIC_BLUE_200
    //     },
    //     blank: {
    //         backgroundHover: Colors.ACTION_BLUE_50,
    //         backgroundActive: Colors.ACTION_BLUE_100
    //     },
    //     header: {
    //         border: Colors.AUTHENTIC_BLUE_550
    //     }
    // },
    // dialog: {
    //     dimming: 'rgba(0, 15, 31, 0.6)'
    // }
} satisfies ColorSchema;