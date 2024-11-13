import { Text as BaseText, TextProps as BaseTextProps } from 'react-aria-components';
import styled from 'styled-components';
import { compose, ResponsiveValue, variant } from 'styled-system';
import { theme } from '../../../essentials/experimental';

interface TextProps extends BaseTextProps {
    variant?: ResponsiveValue<'display' | 'headline' | 'title1' | 'title2' | 'body1' | 'body2' | 'label1' | 'label2'>;
}

export const textStyles = {
    variants: {
        display: {
            fontFamily: 'inherit',
            fontSize: theme.fontSizes[4],
            fontWeight: theme.fontWeights.bold,
            lineHeight: theme.lineHeights[4],
            fontStretch: '50%'
        },
        headline: {
            fontFamily: 'inherit',
            fontSize: theme.fontSizes[3],
            fontWeight: theme.fontWeights.bold,
            lineHeight: theme.lineHeights[3],
            fontStretch: '50%'
        },
        title1: {
            fontFamily: 'inherit',
            fontSize: theme.fontSizes[2],
            fontWeight: theme.fontWeights.semibold,
            lineHeight: theme.lineHeights[2]
        },
        title2: {
            fontFamily: 'inherit',
            fontSize: theme.fontSizes[1],
            fontWeight: theme.fontWeights.medium,
            lineHeight: theme.lineHeights[1]
        },
        body1: {
            fontFamily: 'inherit',
            fontSize: theme.fontSizes[1],
            fontWeight: theme.fontWeights.normal,
            lineHeight: theme.lineHeights[1]
        },
        body2: {
            fontFamily: 'inherit',
            fontSize: theme.fontSizes[0],
            fontWeight: theme.fontWeights.normal,
            lineHeight: theme.lineHeights[0]
        },
        label1: {
            fontFamily: 'inherit',
            fontSize: theme.fontSizes[1],
            fontWeight: theme.fontWeights.medium,
            lineHeight: theme.lineHeights[1]
        },
        label2: {
            fontFamily: 'inherit',
            fontSize: theme.fontSizes[0],
            fontWeight: theme.fontWeights.normal,
            lineHeight: theme.lineHeights[0]
        }
    }
};

const Text = styled(BaseText)<TextProps>`
    color: inherit;
    margin: 0;

    ${compose(variant(textStyles))}
`;

Text.defaultProps = {
    variant: 'body1'
};

export { Text, TextProps };
