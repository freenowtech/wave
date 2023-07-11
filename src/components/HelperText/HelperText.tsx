import React from 'react';
import styled from 'styled-components';
import { compose, margin, ResponsiveValue, variant } from 'styled-system';
import { getSemanticValue } from '../../utils/cssVariables';
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
                color: getSemanticValue(inverted ? 'text-secondaryInverted' : 'text-secondary')
            },
            danger: {
                color: getSemanticValue(inverted ? 'text-dangerInverted' : 'text-danger')
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
