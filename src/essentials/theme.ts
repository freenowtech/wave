import { Colors, SemanticColors } from './Colors/Colors';
import { Spaces } from './Spaces/Spaces';
import { Breakpoints, MediaQueries } from './Breakpoints/Breakpoints';

const theme = {
    breakpoints: Breakpoints,
    colors: Colors,
    // todo: rename semanticColors to colors in the next major release
    semanticColors: SemanticColors,
    fontSizes: ['0.75rem', '0.875rem', '1rem', '1.25rem', '1.5rem', '2rem', '2.5rem', '3rem'],
    fontWeights: {
        normal: 400,
        semibold: 600,
        bold: 700
    },
    fonts: {
        normal: fontStack(['Open Sans', 'sans-serif']),
        monospace: fontStack(['Hack', 'monospace'])
    },
    mediaQueries: MediaQueries,
    space: Spaces,
    radii: ['0rem', '0.125rem', '0.25rem', '0.5rem'],
    iconSizes: {
        small: 12,
        medium: 24,
        large: 28
    },
    shadows: {
        small: '0 0.0625rem 0.25rem 0 rgba(0,0,0,0.1)',
        medium: '0 0 0.5rem 0.1875rem rgba(0,0,0,0.08)',
        large: '0 0 0.75rem 0.25rem rgba(0,0,0,0.12)'
    }
};

/**
 * Custom aliases declaration
 * https://styled-system.com/theme-specification/#scale-aliases
 */

// @ts-ignore
theme.fontSizes.small = theme.fontSizes[1];
// @ts-ignore
theme.fontSizes.medium = theme.fontSizes[2];
// TODO: the alias large should match with scale on theme "fontSizes" but it may require a breaking change
// @ts-ignore
theme.fontSizes.large = '1.125rem';

function fontStack(fonts) {
    return fonts.map(font => (font.includes(' ') ? `"${font}"` : font)).join(', ');
}

export { theme };
