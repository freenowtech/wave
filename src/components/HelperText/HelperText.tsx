import React from 'react';
import styled from 'styled-components';
import { compose, margin, ResponsiveValue, variant } from 'styled-system';
import { Colors } from '../../essentials';
import { theme } from '../../essentials/theme';
import { get } from '../../utils/themeGet';
import { Text, TextProps } from '../Text/Text';

interface HelperTextProps extends TextProps {
    /**
     * Set the appropriate colors for component with 'info' as default
     * @default info
     */
    variant?: ResponsiveValue<'info' | 'danger'>;
    /**
     * Adjust component for display on a dark background
     */
    inverted?: boolean;
}

const getVariants = (inverted?: boolean) =>
    variant({
        variants: {
            info: {
                color: inverted ? Colors.AUTHENTIC_BLUE_350 : Colors.AUTHENTIC_BLUE_550
            },
            danger: {
                color: inverted ? Colors.NEGATIVE_ORANGE_900 : Colors.NEGATIVE_ORANGE_1000
            }
        }
    });

const HelperText: React.FC<HelperTextProps> = styled(Text).attrs({ theme })`
    display: block;
    font-size: ${get('fontSizes.0')};
    text-align: left;
    ${props => compose(getVariants(props.inverted), margin)};
`;

HelperText.defaultProps = {
    inverted: false,
    variant: 'info'
};

export { HelperText, HelperTextProps };
