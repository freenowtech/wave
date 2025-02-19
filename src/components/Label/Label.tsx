import { styled } from 'styled-components';
import { compose, margin, MarginProps, ResponsiveValue, variant } from 'styled-system';
import { ComponentPropsWithoutRef } from 'react';
import { Text } from '../Text/Text';
import { theme } from '../../essentials/theme';
import { get } from '../../utils/themeGet';
import { getSemanticValue } from '../../utils/cssVariables';

interface LabelProps extends ComponentPropsWithoutRef<'span'>, MarginProps {
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
            color: getSemanticValue('foreground-on-background-neutral'),
            borderColor: getSemanticValue('border-neutral-default'),
            backgroundColor: getSemanticValue('background-element-neutral-emphasized')
        },
        info: {
            color: getSemanticValue('foreground-info-default'),
            borderColor: getSemanticValue('border-info-faded'),
            backgroundColor: getSemanticValue('background-element-info-default')
        },
        success: {
            color: getSemanticValue('foreground-success-default'),
            borderColor: getSemanticValue('border-success-faded'),
            backgroundColor: getSemanticValue('background-element-success-default')
        },
        warning: {
            color: getSemanticValue('foreground-on-background-warning'),
            borderColor: getSemanticValue('border-warning-default'),
            backgroundColor: getSemanticValue('background-element-warning-default')
        },
        danger: {
            color: getSemanticValue('foreground-danger-emphasized'),
            borderColor: getSemanticValue('border-danger-faded'),
            backgroundColor: getSemanticValue('background-surface-danger-faded')
        }
    }
});

const filledVariantStyles = variant({
    variants: {
        default: {
            color: getSemanticValue('foreground-on-background-primary'),
            borderColor: getSemanticValue('transparent'),
            backgroundColor: getSemanticValue('background-surface-primary-emphasized')
        },
        info: {
            color: getSemanticValue('foreground-on-background-info'),
            borderColor: getSemanticValue('transparent'),
            backgroundColor: getSemanticValue('background-surface-info-emphasized')
        },
        success: {
            color: getSemanticValue('foreground-on-background-success'),
            borderColor: getSemanticValue('transparent'),
            backgroundColor: getSemanticValue('background-surface-success-emphasized')
        },
        warning: {
            color: getSemanticValue('foreground-on-background-warning'),
            borderColor: getSemanticValue('transparent'),
            backgroundColor: getSemanticValue('background-surface-warning-emphasized')
        },
        danger: {
            color: getSemanticValue('foreground-on-background-danger'),
            borderColor: getSemanticValue('transparent'),
            backgroundColor: getSemanticValue('background-surface-danger-emphasized')
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
