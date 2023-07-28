import styled from 'styled-components';
import { ButtonStyleProps, ResponsiveValue, variant } from 'styled-system';
import { theme } from '../../essentials/theme';

import { getSemanticValue } from '../../utils/cssVariables';
import { BaseButton, BaseButtonProps } from './BaseButton';
import { ComponentSemanticTokens } from '../../essentials/Colors/types';

type Variant = 'primary' | 'secondary' | 'danger';

interface ButtonProps extends BaseButtonProps, ButtonStyleProps {
    /**
     * Adjust colors for display on a dark background
     */
    inverted?: boolean;
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
                background: getSemanticValue('background-element-primary-emphasized')
            },

            '&:disabled': {
                background: getSemanticValue('background-element-disabled-default')
            }
        },
        secondary: {
            color: getSemanticValue('foreground-primary'),
            fill: getSemanticValue('foreground-primary'),
            background: getSemanticValue('background-element-neutral-default'),
            borderColor: getSemanticValue('border-neutral-default'),

            '&:hover': {
                background: getSemanticValue('background-element-neutral-emphasized')
            },

            '&:disabled': {
                color: getSemanticValue('foreground-disabled'),
                fill: getSemanticValue('foreground-disabled'),
                background: getSemanticValue('background-element-disabled-faded'),
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

const invertedVariantStyles = variant<ComponentSemanticTokens, Variant>({
    variants: {
        primary: {
            color: getSemanticValue('foreground-accent-default'),
            fill: getSemanticValue('foreground-accent-default'),
            background: getSemanticValue('background-element-neutral-default'),

            '&:hover': {
                color: getSemanticValue('foreground-on-background-accent'),
                fill: getSemanticValue('foreground-on-background-accent'),
                background: getSemanticValue('background-element-accent-emphasized'),
                borderColor: getSemanticValue('border-neutral-default')
            },
            '&:disabled': {
                color: getSemanticValue('foreground-disabled'),
                fill: getSemanticValue('foreground-disabled'),
                background: getSemanticValue('background-element-disabled-emphasized'),
                borderColor: getSemanticValue('border-disabled')
            }
        },
        secondary: {
            color: getSemanticValue('foreground-on-background-primary'),
            fill: getSemanticValue('foreground-on-background-primary'),
            background: getSemanticValue('transparent'),
            borderColor: getSemanticValue('border-neutral-faded'),

            '&:hover': {
                color: getSemanticValue('foreground-primary'),
                fill: getSemanticValue('foreground-primary'),
                background: getSemanticValue('background-element-neutral-default')
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
                color: getSemanticValue('foreground-disabled'),
                fill: getSemanticValue('foreground-disabled'),
                background: getSemanticValue('background-element-disabled-default'),
                borderColor: getSemanticValue('border-disabled')
            }
        }
    }
});

const Button = styled(BaseButton).attrs({ theme })<ButtonProps>`
    transition: background ease 200ms, border-color ease 200ms, color ease 200ms, fill ease 200ms;

    ${p => (p.inverted ? invertedVariantStyles : variantStyles)};
`;

Button.defaultProps = {
    size: 'medium',
    variant: 'primary'
};

export { Button, ButtonProps };
