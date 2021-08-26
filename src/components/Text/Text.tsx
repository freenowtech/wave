import * as React from 'react';
import styled from 'styled-components';
import {
    compose,
    fontFamily,
    FontFamilyProps,
    fontSize,
    FontSizeProps,
    fontWeight,
    margin,
    MarginProps,
    ResponsiveValue,
    textAlign,
    TextAlignProps
} from 'styled-system';
import { Colors } from '../../essentials';
import { theme } from '../../essentials/theme';
import { get } from '../../utils/themeGet';

interface TextProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
        MarginProps,
        FontSizeProps,
        FontFamilyProps,
        TextAlignProps {
    /**
     * The font-weight property specifies the weight (or boldness) of the font.
     */
    fontWeight?: ResponsiveValue<'normal' | 'semibold' | 'bold'>;
    /**
     * Adjust color for display on a dark background
     */
    inverted?: boolean;
    /**
     * Adjust color to indicate secondary information
     * @deprecated
     */
    weak?: boolean;
    /**
     * Adjust color to indicate secondary information
     */
    secondary?: boolean;
    /**
     * Adjust color to display a disabled text element
     */
    disabled?: boolean;
}

function determineTextColor({ weak, secondary, inverted, disabled }: TextProps) {
    if (disabled) {
        return inverted ? Colors.AUTHENTIC_BLUE_550 : Colors.AUTHENTIC_BLUE_350;
    }

    if (secondary || weak) {
        return inverted ? Colors.AUTHENTIC_BLUE_350 : Colors.AUTHENTIC_BLUE_550;
    }

    if (inverted) {
        return Colors.WHITE;
    }

    return Colors.AUTHENTIC_BLUE_900;
}

const Text = styled.span.attrs({ theme })<TextProps>`
    color: ${determineTextColor};
    font-size: ${get('fontSizes.2')};
    font-family: ${get('fonts.normal')};
    line-height: 1.4;
    margin: 0;

    ${compose(margin, fontSize, fontWeight, fontFamily, textAlign)}
`;

export { Text, TextProps };
