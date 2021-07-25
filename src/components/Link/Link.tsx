import { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';
import { compose, fontSize, FontSizeProps, margin, MarginProps, textAlign, TextAlignProps } from 'styled-system';
import { Colors } from '../../essentials';
import { theme } from '../../essentials/theme';
import { get } from '../../utils/themeGet';

interface LinkProps
    extends ComponentPropsWithoutRef<'a'>,
        MarginProps,
        FontSizeProps,
        TextAlignProps {
    /**
     * Adjust color for display on a dark background
     */
    inverted?: boolean;
}

const Link = styled.a.attrs({ theme })<LinkProps>`
    display: inline-block;
    color: ${p => (p.inverted ? Colors.WHITE : Colors.ACTION_BLUE_900)};
    cursor: pointer;
    line-height: 1.4;
    font-family: ${get('fonts.normal')};
    font-size: ${get('fontSizes.2')};
    font-weight: ${get('fontWeights.semibold')};
    text-decoration: none;

    &:link,
    &:visited {
        color: ${p => (p.inverted ? Colors.WHITE : Colors.ACTION_BLUE_900)};
    }

    &:hover,
    &:active {
        color: ${p => (p.inverted ? Colors.AUTHENTIC_BLUE_350 : Colors.ACTION_BLUE_1000)};
        text-decoration: underline;
    }

    ${compose(margin, fontSize, textAlign)}
`;

export { Link, LinkProps };
