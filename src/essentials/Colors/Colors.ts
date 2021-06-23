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
    button: {
        primary: {
            text: Colors.WHITE,
            background: Colors.AUTHENTIC_BLUE_900,
            borderColor: Colors.AUTHENTIC_BLUE_900,

            hoverText: Colors.WHITE,
            hoverBackground: Colors.AUTHENTIC_BLUE_1100,
            hoverBorderColor: Colors.AUTHENTIC_BLUE_1100,

            disabledText: Colors.WHITE,
            disabledBackground: Colors.AUTHENTIC_BLUE_200,
            disabledBorderColor: Colors.AUTHENTIC_BLUE_200,

            textInverted: Colors.ACTION_BLUE_900,
            backgroundInverted: Colors.WHITE,
            borderColorInverted: Colors.WHITE,

            hoverTextInverted: Colors.WHITE,
            hoverBackgroundInverted: Colors.ACTION_BLUE_900,
            hoverBorderColorInverted: Colors.ACTION_BLUE_900,

            disabledTextInverted: Colors.AUTHENTIC_BLUE_350,
            disabledBackgroundInverted: Colors.AUTHENTIC_BLUE_550,
            disabledBorderColorInverted: Colors.AUTHENTIC_BLUE_550
        },
        secondary: {
            text: Colors.AUTHENTIC_BLUE_900,
            background: Colors.WHITE,
            borderColor: Colors.AUTHENTIC_BLUE_200,

            hoverText: Colors.AUTHENTIC_BLUE_900,
            hoverBackground: Colors.AUTHENTIC_BLUE_50,
            hoverBorderColor: Colors.AUTHENTIC_BLUE_200,

            disabledText: Colors.AUTHENTIC_BLUE_200,
            disabledBackground: Colors.WHITE,
            disabledBorderColor: Colors.AUTHENTIC_BLUE_200,

            textInverted: Colors.WHITE,
            backgroundInverted: 'transparent',
            borderColorInverted: Colors.WHITE,

            hoverTextInverted: Colors.AUTHENTIC_BLUE_900,
            hoverBackgroundInverted: Colors.WHITE,
            hoverBorderColorInverted: Colors.WHITE,

            disabledTextInverted: Colors.AUTHENTIC_BLUE_550,
            disabledBackgroundInverted: 'transparent',
            disabledBorderColorInverted: Colors.AUTHENTIC_BLUE_550
        },
        danger: {
            text: Colors.WHITE,
            background: Colors.NEGATIVE_ORANGE_900,
            borderColor: Colors.NEGATIVE_ORANGE_900,

            hoverText: Colors.WHITE,
            hoverBackground: Colors.NEGATIVE_ORANGE_1000,
            hoverBorderColor: Colors.NEGATIVE_ORANGE_1000,

            disabledText: Colors.WHITE,
            disabledBackground: Colors.AUTHENTIC_BLUE_200,
            disabledBorderColor: Colors.AUTHENTIC_BLUE_200,

            textInverted: Colors.WHITE,
            backgroundInverted: Colors.NEGATIVE_ORANGE_900,
            borderColorInverted: Colors.NEGATIVE_ORANGE_900,

            hoverTextInverted: Colors.WHITE,
            hoverBackgroundInverted: Colors.NEGATIVE_ORANGE_1000,
            hoverBorderColorInverted: Colors.NEGATIVE_ORANGE_1000,

            disabledTextInverted: Colors.WHITE,
            disabledBackgroundInverted: Colors.AUTHENTIC_BLUE_200,
            disabledBorderColorInverted: Colors.AUTHENTIC_BLUE_200
        }
    },
    textButton: {
        primary: {
            text: Colors.ACTION_BLUE_900,
            hoverText: Colors.ACTION_BLUE_1000,
            disabledText: Colors.AUTHENTIC_BLUE_200,

            textInverted: Colors.WHITE,
            hoverTextInverted: Colors.AUTHENTIC_BLUE_350,
            disabledTextInverted: Colors.AUTHENTIC_BLUE_550
        },
        danger: {
            text: Colors.NEGATIVE_ORANGE_900,
            hoverText: Colors.NEGATIVE_ORANGE_1000,
            disabledText: Colors.AUTHENTIC_BLUE_200,

            textInverted: Colors.NEGATIVE_ORANGE_900,
            hoverTextInverted: Colors.NEGATIVE_ORANGE_1000,
            disabledTextInverted: Colors.AUTHENTIC_BLUE_550
        }
    }
};
