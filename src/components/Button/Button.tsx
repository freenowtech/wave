import styled from 'styled-components';
import { ButtonStyleProps, ResponsiveValue, variant } from 'styled-system';
import { theme } from '../../essentials/theme';

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
            color: 'var(--wave-s-color-text-primaryInverted)',
            fill: 'var(--wave-s-color-icon-primary-inverted)',
            background: 'var(--wave-s-color-background-primary-emphasized)',
            borderColor: 'var(--wave-s-color-border-primary-default)',

            '&:hover': {
                color: 'var(--wave-s-color-text-primaryInverted)',
                fill: 'var(--wave-s-color-icon-primary-inverted)',
                background: 'var(--wave-s-color-background-primary-hover)',
                borderColor: 'var(--wave-s-color-border-primary-emphasized)'
            },

            '&:disabled': {
                color: 'var(--wave-s-color-text-primaryInverted)',
                fill: 'var(--wave-s-color-icon-primary-inverted)',
                background: 'var(--wave-s-color-background-primary-disabled)',
                borderColor: 'var(--wave-s-color-border-disabled-default)'
            }
        },
        secondary: {
            color: 'var(--wave-s-color-text-primary)',
            fill: 'var(--wave-s-color-icon-primary-default)',
            background: 'var(--wave-s-color-background-primary-default)',
            borderColor: 'var(--wave-s-color-border-secondary-default)',

            '&:hover': {
                color: 'var(--wave-s-color-text-primary)',
                fill: 'var(--wave-s-color-icon-primary-default)',
                background: 'var(--wave-s-color-background-secondary-default)',
                borderColor: 'var(--wave-s-color-border-secondary-default)'
            },

            '&:disabled': {
                color: 'var(--wave-s-color-text-disabled)',
                fill: 'var(--wave-s-color-icon-disabled-default)',
                background: 'var(--wave-s-color-background-primary-default)',
                borderColor: 'var(--wave-s-color-border-disabled-default)'
            }
        },
        danger: {
            color: 'var(--wave-s-color-text-primaryInverted)',
            fill: 'var(--wave-s-color-icon-primary-inverted)',
            background: 'var(--wave-s-color-background-danger-emphasized)',
            borderColor: 'var(--wave-s-color-border-danger-default)',

            '&:hover': {
                color: 'var(--wave-s-color-text-primaryInverted)',
                fill: 'var(--wave-s-color-icon-primary-inverted)',
                background: 'var(--wave-s-color-background-danger-hover)',
                borderColor: 'var(--wave-s-color-border-danger-emphasized)'
            },

            '&:disabled': {
                color: 'var(--wave-s-color-text-primaryInverted)',
                fill: 'var(--wave-s-color-icon-primary-inverted)',
                background: 'var(--wave-s-color-background-primary-disabled)',
                borderColor: 'var(--wave-s-color-border-disabled-default)'
            }
        }
    }
});

const invertedVariantStyles = variant<ComponentSemanticTokens, Variant>({
    variants: {
        primary: {
            color: 'var(--wave-s-color-text-primary)',
            fill: 'var(--wave-s-color-icon-primary-default)',
            background: 'var(--wave-s-color-background-primary-default)',
            borderColor: 'var(--wave-s-color-border-primary-inverted)',

            '&:hover': {
                color: 'var(--wave-s-color-text-tertiaryInverted)',
                fill: 'var(--wave-s-color-icon-primary-inverted)',
                background: 'var(--wave-s-color-background-primary-emphasized)',
                borderColor: 'var(--wave-s-color-border-primary-default)'
            },
            '&:disabled': {
                color: 'var(--wave-s-color-text-tertiaryInverted)',
                fill: 'var(--wave-s-color-icon-tertiary-default)',
                background: 'var(--wave-s-color-background-secondary-emphasized)',
                borderColor: 'var(--wave-s-color-border-disabled-inverted)'
            }
        },
        secondary: {
            color: 'var(--wave-s-color-text-primaryInverted)',
            fill: 'var(--wave-s-color-icon-primary-inverted)',
            background: 'var(--wave-s-color-background-transparent)',
            borderColor: 'var(--wave-s-color-border-secondary-inverted)',

            '&:hover': {
                color: 'var(--wave-s-color-text-primary)',
                fill: 'var(--wave-s-color-icon-primary-default)',
                background: 'var(--wave-s-color-background-primary-default)',
                borderColor: 'var(--wave-s-color-border-secondary-inverted)'
            },
            '&:disabled': {
                color: 'var(--wave-s-color-text-disabledInverted)',
                fill: 'var(--wave-s-color-icon-disabled-inverted)',
                background: 'var(--wave-s-color-background-transparent)',
                borderColor: 'var(--wave-s-color-border-disabled-inverted)'
            }
        },
        danger: {
            color: 'var(--wave-s-color-text-primaryInverted)',
            fill: 'var(--wave-s-color-icon-primary-inverted)',
            background: 'var(--wave-s-color-background-danger-emphasized)',
            borderColor: 'var(--wave-s-color-border-danger-default)',

            '&:hover': {
                color: 'var(--wave-s-color-text-primaryInverted)',
                fill: 'var(--wave-s-color-icon-primary-inverted)',
                background: 'var(--wave-s-color-background-danger-hover)',
                borderColor: 'var(--wave-s-color-border-danger-emphasized)'
            },
            '&:disabled': {
                color: 'var(--wave-s-color-text-primaryInverted)',
                fill: 'var(--wave-s-color-icon-primary-inverted)',
                background: 'var(--wave-s-color-background-primary-disabled)',
                borderColor: 'var(--wave-s-color-border-disabled-default)'
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
