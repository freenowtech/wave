import { DefaultTheme } from 'styled-components';
import { Breakpoints, MediaQueries } from '../index';

const ExperimentalSpaces = [
    '0', // 0
    '0.25rem', // 1 - 4px new smallest value
    '0.5rem', // 2
    '0.75rem', // 3
    '1rem', // 4
    '1.25rem', // 5
    '1.5rem', // 6
    '1.75rem', // 7
    '2rem', // 8
    '2.25rem', // 9
    '2.5rem', // 10
    '2.75rem', // 11
    '3rem' // 12
];

interface ExperimentalFontWeights {
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
}

interface ExperimentalTheme extends DefaultTheme {
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
        '0.5rem',
        '0.75rem' // new value 12px
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

export { theme, ExperimentalTheme };
