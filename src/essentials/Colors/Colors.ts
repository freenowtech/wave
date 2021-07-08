export enum Colors {
    WHITE = '#FFFFFF',
    AUTHENTIC_BLUE_1100 = '#000F1F',
    AUTHENTIC_BLUE_900 = '#001E3E',
    AUTHENTIC_BLUE_550 = '#637689',
    AUTHENTIC_BLUE_350 = '#9CA7B4',
    AUTHENTIC_BLUE_200 = '#C6CDD4',
    AUTHENTIC_BLUE_50 = '#F1F2F4',
    FREEDOM_RED_1000 = '#BF0820',
    FREEDOM_RED_900 = '#FF0A2B',
    ACTION_BLUE_1000 = '#0750A4',
    ACTION_BLUE_900 = '#096BDB',
    ACTION_BLUE_350 = '#9FC5F1',
    ACTION_BLUE_150 = '#D6E6F9',
    ACTION_BLUE_100 = '#E4EFFB',
    ACTION_BLUE_50 = '#F1F7FD',
    BUMPY_MAGENTA_1000 = '#BF00B9',
    BUMPY_MAGENTA_900 = '#FF00F7',
    BUMPY_MAGENTA_350 = '#FF9CFC',
    BUMPY_MAGENTA_50 = '#FFF1FF',
    POSITIVE_GREEN_1000 = '#05763B',
    POSITIVE_GREEN_900 = '#069D4F',
    POSITIVE_GREEN_350 = '#9ED9BB',
    POSITIVE_GREEN_50 = '#F1FAF5',
    ATTENTION_YELLOW_900 = '#FFCC00',
    ATTENTION_YELLOW_350 = '#FFEB9C',
    ATTENTION_YELLOW_50 = '#FFFCF1',
    NEGATIVE_ORANGE_1000 = '#BF4704',
    NEGATIVE_ORANGE_900 = '#FF5E05',
    NEGATIVE_ORANGE_350 = '#FFC09E',
    NEGATIVE_ORANGE_50 = '#FFF6F1'
}

export const SemanticColors = {
    brand: {
        white: '#FFFFFF',
        black: '#000000',
        actionBlue: {
            '50': '#F1F7FD',
            '100': '#E4EFFB',
            '150': '#D6E6F9',
            '350': '#9FC5F1',
            '900': '#096BDB',
            '1000': '#0750A4'
        },
        freedomRed: {
            '900': '#FF0A2B',
            '1000': '#BF0820'
        },
        authenticBlue: {
            '50': '#F1F2F4',
            '200': '#C6CDD4',
            '350': '#9CA7B4',
            '550': '#637689',
            '900': '#001E3E',
            '1100': '#000F1F'
        },
        positiveGreen: {
            '50': '#F1FAF5',
            '350': '#9ED9BB',
            '900': '#069D4F',
            '1000': '#05763B'
        },
        attentionYellow: {
            '50': '#FFFCF1',
            '350': '#FFEB9C',
            '900': '#FFCC00'
        },
        negativeOrange: {
            '50': '#FFF6F1',
            '350': '#FFC09E',
            '900': '#FF5E05',
            '1000': '#BF4704'
        },
        bumpyMagenta: {
            '50': '#FFF1FF',
            '350': '#FF9CFC',
            '900': '#FF00F7',
            '1000': '#BF00B9'
        }
    },
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
        warning: Colors.ATTENTION_YELLOW_350,
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
    },
    button: {
        primary: {
            text: Colors.WHITE,
            background: Colors.AUTHENTIC_BLUE_900,
            borderColor: Colors.AUTHENTIC_BLUE_900,

            textHover: Colors.WHITE,
            backgroundHover: Colors.AUTHENTIC_BLUE_1100,
            borderColorHover: Colors.AUTHENTIC_BLUE_1100,

            textDisabled: Colors.WHITE,
            backgroundDisabled: Colors.AUTHENTIC_BLUE_200,
            borderColorDisabled: Colors.AUTHENTIC_BLUE_200,

            textInverted: Colors.ACTION_BLUE_900,
            backgroundInverted: Colors.WHITE,
            borderColorInverted: Colors.WHITE,

            textHoverInverted: Colors.WHITE,
            backgroundHoverInverted: Colors.ACTION_BLUE_900,
            borderColorHoverInverted: Colors.ACTION_BLUE_900,

            textDisabledInverted: Colors.AUTHENTIC_BLUE_350,
            backgroundDisabledInverted: Colors.AUTHENTIC_BLUE_550,
            borderColorDisabledInverted: Colors.AUTHENTIC_BLUE_550
        },
        secondary: {
            text: Colors.AUTHENTIC_BLUE_900,
            background: Colors.WHITE,
            borderColor: Colors.AUTHENTIC_BLUE_200,

            textHover: Colors.AUTHENTIC_BLUE_900,
            backgroundHover: Colors.AUTHENTIC_BLUE_50,
            borderColorHover: Colors.AUTHENTIC_BLUE_200,

            textDisabled: Colors.AUTHENTIC_BLUE_200,
            backgroundDisabled: Colors.WHITE,
            borderColorDisabled: Colors.AUTHENTIC_BLUE_200,

            textInverted: Colors.WHITE,
            backgroundInverted: 'transparent',
            borderColorInverted: Colors.WHITE,

            textHoverInverted: Colors.AUTHENTIC_BLUE_900,
            backgroundHoverInverted: Colors.WHITE,
            borderColorHoverInverted: Colors.WHITE,

            textDisabledInverted: Colors.AUTHENTIC_BLUE_550,
            backgroundDisabledInverted: 'transparent',
            borderColorDisabledInverted: Colors.AUTHENTIC_BLUE_550
        },
        danger: {
            text: Colors.WHITE,
            background: Colors.NEGATIVE_ORANGE_900,
            borderColor: Colors.NEGATIVE_ORANGE_900,

            textHover: Colors.WHITE,
            backgroundHover: Colors.NEGATIVE_ORANGE_1000,
            borderColorHover: Colors.NEGATIVE_ORANGE_1000,

            textDisabled: Colors.WHITE,
            backgroundDisabled: Colors.AUTHENTIC_BLUE_200,
            borderColorDisabled: Colors.AUTHENTIC_BLUE_200,

            textInverted: Colors.WHITE,
            backgroundInverted: Colors.NEGATIVE_ORANGE_900,
            borderColorInverted: Colors.NEGATIVE_ORANGE_900,

            textHoverInverted: Colors.WHITE,
            backgroundHoverInverted: Colors.NEGATIVE_ORANGE_1000,
            borderColorHoverInverted: Colors.NEGATIVE_ORANGE_1000,

            textDisabledInverted: Colors.WHITE,
            backgroundDisabledInverted: Colors.AUTHENTIC_BLUE_200,
            borderColorDisabledInverted: Colors.AUTHENTIC_BLUE_200
        }
    },
    textButton: {
        primary: {
            text: Colors.ACTION_BLUE_900,
            textHover: Colors.ACTION_BLUE_1000,
            textDisabled: Colors.AUTHENTIC_BLUE_200,

            textInverted: Colors.WHITE,
            textHoverInverted: Colors.AUTHENTIC_BLUE_350,
            textDisabledInverted: Colors.AUTHENTIC_BLUE_550
        },
        danger: {
            text: Colors.NEGATIVE_ORANGE_900,
            textHover: Colors.NEGATIVE_ORANGE_1000,
            textDisabled: Colors.AUTHENTIC_BLUE_200,

            textInverted: Colors.NEGATIVE_ORANGE_900,
            textHoverInverted: Colors.NEGATIVE_ORANGE_1000,
            textDisabledInverted: Colors.AUTHENTIC_BLUE_550
        }
    }
};
