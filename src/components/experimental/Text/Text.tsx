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

interface TextProps
    extends ComponentPropsWithoutRef<'span'>,
        MarginProps,
        FontSizeProps,
        FontFamilyProps,
        TextAlignProps {
    variant?: ResponsiveValue<'display' | 'headline' | 'title1' | 'title2' | 'body1' | 'body2' | 'label1' | 'label2'>;
}

export const textStyles = {
    variants: {
        display: {
            fontFamily: theme.fonts.normal,
            fontSize: theme.fontSizes[4],
            fontWeight: theme.fontWeights.bold,
            lineHeight: theme.lineHeights[4],
            fontStretch: '50%'
        },
        headline: {
            fontFamily: theme.fonts.normal,
            fontSize: theme.fontSizes[3],
            fontWeight: theme.fontWeights.bold,
            lineHeight: theme.lineHeights[3],
            fontStretch: '50%'
        },
        title1: {
            fontFamily: theme.fonts.normal,
            fontSize: theme.fontSizes[2],
            fontWeight: theme.fontWeights.semibold,
            lineHeight: theme.lineHeights[2]
        },
        title2: {
            fontFamily: theme.fonts.normal,
            fontSize: theme.fontSizes[1],
            fontWeight: theme.fontWeights.medium,
            lineHeight: theme.lineHeights[1]
        },
        body1: {
            fontFamily: theme.fonts.normal,
            fontSize: theme.fontSizes[1],
            fontWeight: theme.fontWeights.normal,
            lineHeight: theme.lineHeights[1]
        },
        body2: {
            fontFamily: theme.fonts.normal,
            fontSize: theme.fontSizes[0],
            fontWeight: theme.fontWeights.normal,
            lineHeight: theme.lineHeights[0]
        },
        label1: {
            fontFamily: theme.fonts.normal,
            fontSize: theme.fontSizes[1],
            fontWeight: theme.fontWeights.medium,
            lineHeight: theme.lineHeights[1]
        },
        label2: {
            fontFamily: theme.fonts.normal,
            fontSize: theme.fontSizes[0],
            fontWeight: theme.fontWeights.normal,
            lineHeight: theme.lineHeights[0]
        }
    }
};

const variantStyles = variant(textStyles);

const Text = styled.span.attrs({ theme })<TextProps>`
    color: inherit;
    margin: 0;

    ${compose(margin, variantStyles, fontFamily, textAlign)}
`;

Text.defaultProps = {
    variant: 'body1'
};

export { Text, TextProps };
