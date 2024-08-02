import { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';
import {
    compose,
    fontFamily,
    FontFamilyProps,
    FontSizeProps,
    margin,
    MarginProps,
    ResponsiveValue,
    textAlign,
    TextAlignProps,
    variant
} from 'styled-system';
import { theme } from '../../../essentials/experimental/theme';
import { get } from '../../../utils/experimental/themeGet';
// import { getSemanticValue } from '../../../utils';

interface TextProps
    extends ComponentPropsWithoutRef<'span'>,
        MarginProps,
        FontSizeProps,
        FontFamilyProps,
        TextAlignProps {
    /**
     * The font-weight property specifies the weight (or boldness) of the font.
     * @default normal
     */
    // fontWeight?: ResponsiveValue<'normal' | 'semibold' | 'bold'>;
    /**
     * Enforce primary color
     */
    // primary?: boolean;
    /**
     * Adjust color to indicate secondary information
     */
    // secondary?: boolean;
    /**
     * Adjust color to display a disabled text element
     */
    // disabled?: boolean;

    variant?: ResponsiveValue<'display' | 'headline' | 'title1' | 'title2' | 'body1' | 'body2' | 'label1' | 'label2'>;
}

const variantStyles = variant({
    variants: {
        label2: {
            fontSize: theme.fontSizes[0],
            fontWeight: theme.fontWeights.normal,
            lineHeight: theme.lineHeights[0]
        },
        label1: {
            fontSize: theme.fontSizes[1],
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
});

// function determineTextColor(props: TextProps) {
//     const { primary, secondary, disabled } = props;
//
//     if (disabled) {
//         return getSemanticValue('foreground-disabled');
//     }
//
//     if (secondary) {
//         return getSemanticValue('foreground-neutral-emphasized');
//     }
//
//     if (primary) {
//         return getSemanticValue('foreground-primary');
//     }
//
//     return 'inherit';
// }

const Text = styled.span.attrs({ theme })<TextProps>`
    color: inherit;
    font-family: ${get('fonts.normal')};
    margin: 0;

    ${compose(margin, variantStyles, fontFamily, textAlign)}
`;

Text.defaultProps = {
    variant: 'body1'
};

export { Text, TextProps };
