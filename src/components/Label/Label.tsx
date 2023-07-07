import styled from 'styled-components';
import { compose, margin, MarginProps, ResponsiveValue, variant } from 'styled-system';
import { Text } from '../Text/Text';
import { theme } from '../../essentials/theme';
import { get } from '../../utils/themeGet';
import { getSemanticValue } from '../../utils/cssVariables';

interface LabelProps extends MarginProps {
    /**
     * Set the appropriate colors for the component with 'default' as a default
     */
    variant?: ResponsiveValue<'default' | 'info' | 'success' | 'warning' | 'danger'>;

    /**
     * Use the alternative version of the label for critical status and extra emphasis
     * @default false
     */
    filled?: boolean;
}

const normalVariantStyles = variant({
    variants: {
        default: {
            color: getSemanticValue('text-primary'),
            borderColor: getSemanticValue('border-primary-default'),
            backgroundColor: getSemanticValue('background-secondary-default')
        },
        info: {
            color: getSemanticValue('overrides-label-text-link'),
            borderColor: getSemanticValue('border-info-default'),
            backgroundColor: getSemanticValue('background-info-default')
        },
        success: {
            color: getSemanticValue('text-success'),
            borderColor: getSemanticValue('border-success-default'),
            backgroundColor: getSemanticValue('background-success-default')
        },
        warning: {
            color: getSemanticValue('text-primary'),
            borderColor: getSemanticValue('border-warning-emphasized'),
            backgroundColor: getSemanticValue('background-warning-default')
        },
        danger: {
            color: getSemanticValue('text-danger'),
            borderColor: getSemanticValue('border-danger-default'),
            backgroundColor: getSemanticValue('background-danger-default')
        }
    }
});

const filledVariantStyles = variant({
    variants: {
        default: {
            color: getSemanticValue('text-primaryInverted'),
            borderColor: getSemanticValue('border-transparent'),
            backgroundColor: getSemanticValue('overrides-label-background-secondary-emphasized')
        },
        info: {
            color: getSemanticValue('text-primaryInverted'),
            borderColor: getSemanticValue('border-transparent'),
            backgroundColor: getSemanticValue('overrides-label-background-info-emphasized')
        },
        success: {
            color: getSemanticValue('text-primaryInverted'),
            borderColor: getSemanticValue('border-transparent'),
            backgroundColor: getSemanticValue('background-success-emphasized')
        },
        warning: {
            color: getSemanticValue('text-primary'),
            borderColor: getSemanticValue('border-transparent'),
            backgroundColor: getSemanticValue('background-warning-emphasized')
        },
        danger: {
            color: getSemanticValue('text-primaryInverted'),
            borderColor: getSemanticValue('border-transparent'),
            backgroundColor: getSemanticValue('background-danger-emphasized')
        }
    }
});

const Label = styled(Text).attrs({ theme })<LabelProps>`
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
