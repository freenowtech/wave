import { FC } from 'react';
import styled from 'styled-components';
import { compose, margin, MarginProps, ResponsiveValue, variant } from 'styled-system';
import { Text } from '../Text/Text';
import { Colors } from '../../essentials';
import { theme } from '../../essentials/theme';
import { get } from '../../utils/themeGet';

interface LabelProps extends MarginProps {
    /**
     * Set the appropriate colors for the component with 'info' as a default
     */
    variant?: ResponsiveValue<'info' | 'success' | 'danger'>;
}

const variantStyles = variant({
    variants: {
        info: {
            color: Colors.AUTHENTIC_BLUE_900,
            borderColor: Colors.AUTHENTIC_BLUE_200,
            backgroundColor: Colors.AUTHENTIC_BLUE_50
        },
        success: {
            color: Colors.POSITIVE_GREEN_1000,
            borderColor: Colors.POSITIVE_GREEN_350,
            backgroundColor: Colors.POSITIVE_GREEN_50
        },
        danger: {
            color: Colors.NEGATIVE_ORANGE_1000,
            borderColor: Colors.NEGATIVE_ORANGE_350,
            backgroundColor: Colors.NEGATIVE_ORANGE_50
        }
    }
});

const Label: FC<LabelProps> = styled(Text).attrs({ theme })<LabelProps>`
    display: inline-block;
    box-sizing: border-box;
    font-size: 0.625rem;
    border-radius: ${get('radii.1')};
    font-weight: ${get('fontWeights.semibold')};
    padding: 0.1875rem 0.5rem;

    color: ${Colors.AUTHENTIC_BLUE_900};
    border: 0.0625rem solid ${Colors.AUTHENTIC_BLUE_200};
    background-color: ${Colors.AUTHENTIC_BLUE_50};

    ${compose(variantStyles, margin)}
`;

export { Label, LabelProps };
