import { DefaultTheme } from 'styled-components';
import { Spaces, Breakpoints, MediaQueries } from '../index';
import { getSemanticValue } from '../../utils';

const ExperimentalSpaces = [
    '0', // 0
    '0.25', // 1 - 4px new smallest value
    '0.5', // 2
    '0.75', // 3
    '1', // 4
    '1.25', // 5
    '1.5', // 6
    '1.75', // 7
    '2', // 8
    '2.25', // 9
    '2.5', // 10
    '2.75', // 11
    '3' // 12
];

interface ExperimentalFontWeights {
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
}

export interface ExperimentalTheme extends DefaultTheme {
    lineHeights: string[];
    fontWeights: ExperimentalFontWeights;
    chips: any;
}

const theme: ExperimentalTheme = {
    breakpoints: Breakpoints,
    fontSizes: [
        '0.875rem', // 0 – 14px
        '1rem', // 1 - 16px
        '1.25rem', // 2 - 20px
        '1.75rem', // 3 - 28px
        '3rem' // 4 - 48px
    ],
    fontWeights: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700
    },
    fonts: {
        normal: fontStack(['Roboto Flex', 'sans-serif']),
        monospace: fontStack(['Hack', 'monospace'])
    },
    mediaQueries: MediaQueries,
    space: ExperimentalSpaces,
    radii: [
        '0rem',
        '0.125rem',
        '0.25rem',
        '0.75rem', // new value 12px
        '0.5rem'
    ],
    iconSizes: {
        small: 12,
        medium: 24,
        large: 28
    },
    shadows: {
        small: '0 0.0625rem 0.25rem 0 rgba(0,0,0,0.1)',
        medium: '0 0 0.5rem 0.1875rem rgba(0,0,0,0.08)',
        large: '0 0 0.75rem 0.25rem rgba(0,0,0,0.12)'
    },
    lineHeights: [
        `1.25rem`, // 0 - 20px
        `1.5rem`, // 1 - 24px
        `1.75rem`, // 2 - 28px
        `2.25rem`, // 3 - 36px,
        `3.625rem` // 4 - 58px,
    ],
    chips: {
        default: {
            color: 'hsla(0, 6%, 11%, 1)', // --sys-color-on-surface
            backgroundColor: 'hsla(0, 6%, 94%, 1)' // --sys-color-surface-container,
        }
    }
};

const componentProperties = {
    text: {
        label2: {
            fontSize: theme.fontSizes[0],
            fontWeight: theme.fontWeights.normal,
            lineHeight: theme.lineHeights[0]
        },
        label1: {
            fontSize: theme.fontSizes[2],
            fontWeight: theme.fontWeights.medium,
            lineHeight: theme.lineHeights[1]
        },
        body2: {
            fontSize: theme.fontSizes[0],
            fontWeight: theme.fontWeights.normal,
            lineHeight: theme.lineHeights[0]
        },
        body1: {
            fontSize: theme.fontSizes[1],
            fontWeight: theme.fontWeights.normal,
            lineHeight: theme.lineHeights[1]
        },
        title1: {
            fontSize: theme.fontSizes[2],
            fontWeight: theme.fontWeights.semibold,
            lineHeight: theme.lineHeights[2]
        },
        title2: {
            fontSize: theme.fontSizes[1],
            fontWeight: theme.fontWeights.medium,
            lineHeight: theme.lineHeights[1]
        },
        display: {
            fontSize: theme.fontSizes[4],
            fontWeight: theme.fontWeights.bold,
            lineHeight: theme.lineHeights[4]
        },
        headline: {
            fontSize: theme.fontSizes[3],
            fontWeight: theme.fontWeights.bold,
            lineHeight: theme.lineHeights[3]
        }
    }
};

/**
 * Custom aliases declaration
 * https://styled-system.com/theme-specification/#scale-aliases
 */

/* eslint-disable prefer-destructuring */

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
theme.fontSizes.small = theme.fontSizes[1];

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
theme.fontSizes.medium = theme.fontSizes[2];

// TODO: the alias large should match with scale on theme "fontSizes" but it may require a breaking change
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
theme.fontSizes.large = '1.125rem';

/* eslint-enable prefer-destructuring */

function fontStack(fonts: string[]): string {
    return fonts.map(font => (font.includes(' ') ? `"${font}"` : font)).join(', ');
}

export { theme, componentProperties };
