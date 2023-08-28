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
import { deprecatedProperty } from '../../utils/deprecatedProperty';
import { getSemanticValue } from '../../utils/cssVariables';

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
    fontWeight?: ResponsiveValue<'normal' | 'semibold' | 'bold'>;
    /**
     * Adjust color for display on a dark background
     */
    inverted?: boolean;
    /**
     * Adjust color to indicate secondary information
     * @deprecated use `secondary` instead
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
    if (weak !== undefined) {
        deprecatedProperty('Text', weak, 'weak', 'secondary', 'Rename `weak` to `secondary` to remove the warning.');
    }

    if (disabled) {
        return getSemanticValue('foreground-disabled');
    }

    if (secondary || weak) {
        return getSemanticValue(inverted ? 'foreground-neutral-faded' : 'foreground-neutral-emphasized');
    }

    return getSemanticValue('foreground-primary');
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
