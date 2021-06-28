import { FC } from 'react';
import styled from 'styled-components';
import { compose, margin, MarginProps, ResponsiveValue, variant } from 'styled-system';
import { Text } from '../Text/Text';
import { Colors } from '../../essentials';
import { theme } from '../../essentials/theme';
import { get } from '../../utils/themeGet';

interface LabelProps extends MarginProps {
    /**
     * Set the appropriate colors for the component with 'default' as a default
     */
    variant?: ResponsiveValue<'default' | 'info' | 'success' | 'warning' | 'danger'>;

    /**
     * Use the alternative version of the label for critical status and extra emphasis
     */
    filled?: boolean;
}

const normalVariantStyles = variant({
    variants: {
        default: {
            color: Colors.AUTHENTIC_BLUE_900,
            borderColor: Colors.AUTHENTIC_BLUE_200,
            backgroundColor: Colors.AUTHENTIC_BLUE_50
        },
        info: {
            color: Colors.ACTION_BLUE_900,
            borderColor: Colors.ACTION_BLUE_350,
            backgroundColor: Colors.ACTION_BLUE_50
        },
        success: {
            color: Colors.POSITIVE_GREEN_1000,
            borderColor: Colors.POSITIVE_GREEN_350,
            backgroundColor: Colors.POSITIVE_GREEN_50
        },
        warning: {
            color: Colors.AUTHENTIC_BLUE_900,
            borderColor: Colors.ATTENTION_YELLOW_350,
            backgroundColor: Colors.ATTENTION_YELLOW_50
        },
        danger: {
            color: Colors.NEGATIVE_ORANGE_1000,
            borderColor: Colors.NEGATIVE_ORANGE_350,
            backgroundColor: Colors.NEGATIVE_ORANGE_50
        }
    }
});

const filledVariantStyles = variant({
    variants: {
        default: {
            color: Colors.WHITE,
            borderColor: Colors.AUTHENTIC_BLUE_350,
            backgroundColor: Colors.AUTHENTIC_BLUE_350
        },
        info: {
            color: Colors.WHITE,
            borderColor: Colors.ACTION_BLUE_900,
            backgroundColor: Colors.ACTION_BLUE_900
        },
        success: {
            color: Colors.WHITE,
            borderColor: Colors.POSITIVE_GREEN_900,
            backgroundColor: Colors.POSITIVE_GREEN_900
        },
        warning: {
            color: Colors.AUTHENTIC_BLUE_900,
            borderColor: Colors.ATTENTION_YELLOW_900,
            backgroundColor: Colors.ATTENTION_YELLOW_900
        },
        danger: {
            color: Colors.WHITE,
            borderColor: Colors.NEGATIVE_ORANGE_900,
            backgroundColor: Colors.NEGATIVE_ORANGE_900
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

    border-width: 0.0625rem;
    border-style: solid;

    ${props => compose(props.filled ? filledVariantStyles : normalVariantStyles, margin)(props)}
`;

Label.defaultProps = {
    variant: 'default'
};

export { Label, LabelProps };
