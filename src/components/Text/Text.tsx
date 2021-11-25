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

function determineTextColor(props: TextProps) {
    const { weak, secondary, inverted, disabled } = props;
    if (disabled) {
        return get(inverted ? 'semanticColors.text.disabledInverted' : 'semanticColors.text.disabled')(props);
    }

    if (secondary || weak) {
        return get(inverted ? 'semanticColors.text.secondaryInverted' : 'semanticColors.text.secondary')(props);
    }

    if (inverted) {
        return get('semanticColors.text.primaryInverted')(props);
    }

    return get('semanticColors.text.primary')(props);
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
