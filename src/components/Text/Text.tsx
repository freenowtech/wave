import { ComponentPropsWithoutRef } from 'react';
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
import { theme } from '../../essentials/theme';
import { get } from '../../utils/themeGet';
import { SemanticColors } from '../../essentials/Colors/Colors';

interface TextProps
    extends ComponentPropsWithoutRef<'span'>,
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
        return inverted ? SemanticColors.text.disabledInverted : SemanticColors.text.disabled;
    }

    if (secondary || weak) {
        return inverted ? SemanticColors.text.secondaryInverted : SemanticColors.text.secondary;
    }

    if (inverted) {
        return SemanticColors.text.primaryInverted;
    }

    return SemanticColors.text.primary;
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
