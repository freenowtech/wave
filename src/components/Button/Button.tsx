import styled from 'styled-components';
import { ButtonStyleProps, ResponsiveValue, variant } from 'styled-system';
import { theme } from '../../essentials/theme';

import { getSemanticValue } from '../../utils/cssVariables';
import { BaseButton, BaseButtonProps } from './BaseButton';
import { ComponentSemanticTokens } from '../../essentials/Colors/types';

type Variant = 'primary' | 'secondary' | 'danger';

interface ButtonProps extends BaseButtonProps, ButtonStyleProps {
    /**
     * Define style of the button component, defaults to primary
     */
    variant?: ResponsiveValue<Variant>;
}

const variantStyles = variant<ComponentSemanticTokens, Variant>({
    variants: {
        primary: {
            color: getSemanticValue('foreground-on-background-primary'),
            fill: getSemanticValue('foreground-on-background-primary'),
            background: getSemanticValue('background-element-primary-default'),

            '&:hover': {
                color: getSemanticValue('foreground-on-background-accent'),
                background: getSemanticValue('background-element-primary-emphasized')
            },

            '&:disabled': {
                color: getSemanticValue('foreground-on-background-disabled'),
                background: getSemanticValue('background-element-disabled-default')
            }
        },
        secondary: {
            color: getSemanticValue('foreground-primary'),
            fill: getSemanticValue('foreground-primary'),
            background: getSemanticValue('background-page-default'),
            borderColor: getSemanticValue('border-neutral-default'),

            '&:hover': {
                color: getSemanticValue('foreground-on-background-neutral'),
                background: getSemanticValue('background-element-neutral-emphasized')
            },

            '&:disabled': {
                color: getSemanticValue('foreground-disabled'),
                fill: getSemanticValue('foreground-disabled'),
                background: getSemanticValue('transparent'),
                borderColor: getSemanticValue('border-disabled')
            }
        },
        danger: {
            color: getSemanticValue('foreground-on-background-danger'),
            fill: getSemanticValue('foreground-on-background-danger'),
            background: getSemanticValue('background-element-danger-default'),

            '&:hover': {
                background: getSemanticValue('background-element-danger-emphasized')
            },

            '&:disabled': {
                background: getSemanticValue('background-element-disabled-default'),
                borderColor: getSemanticValue('border-disabled')
            }
        }
    }
});

const Button = styled(BaseButton).attrs({ theme })<ButtonProps>`
    transition: background ease 200ms, border-color ease 200ms, color ease 200ms, fill ease 200ms;

    ${variantStyles};
`;

Button.defaultProps = {
    size: 'medium',
    variant: 'primary'
};

export { Button, ButtonProps };
