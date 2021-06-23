import * as React from 'react';
import styled from 'styled-components';
import { ButtonStyleProps, ResponsiveValue, variant } from 'styled-system';
import { theme } from '../../essentials/theme';
import { get } from '../../utils/themeGet';

import { BaseButton, BaseButtonProps } from './BaseButton';

interface ButtonProps extends BaseButtonProps, ButtonStyleProps {
    /**
     * Adjust colors for display on a dark background
     */
    inverted?: boolean;
    /**
     * Define style of the button component, defaults to primary
     */
    variant?: ResponsiveValue<'primary' | 'secondary' | 'danger'>;
}

const variantStyles = variant({
    variants: {
        primary: {
            color: get('semanticColors.button.primary.text'),
            fill: get('semanticColors.button.primary.text'),
            background: get('semanticColors.button.primary.background'),
            borderColor: get('semanticColors.button.primary.borderColor'),

            '&:hover': {
                color: get('semanticColors.button.primary.hoverText'),
                fill: get('semanticColors.button.primary.hoverText'),
                background: get('semanticColors.button.primary.hoverBackground'),
                borderColor: get('semanticColors.button.primary.hoverBorderColor')
            },

            '&:disabled': {
                color: get('semanticColors.button.primary.disabledText'),
                fill: get('semanticColors.button.primary.disabledText'),
                background: get('semanticColors.button.primary.disabledBackground'),
                borderColor: get('semanticColors.button.primary.disabledBorderColor')
            }
        },
        secondary: {
            color: get('semanticColors.button.secondary.text'),
            fill: get('semanticColors.button.secondary.text'),
            background: get('semanticColors.button.secondary.background'),
            borderColor: get('semanticColors.button.secondary.borderColor'),
            '&:hover': {
                color: get('semanticColors.button.secondary.hoverText'),
                fill: get('semanticColors.button.secondary.hoverText'),
                background: get('semanticColors.button.secondary.hoverBackground'),
                borderColor: get('semanticColors.button.secondary.hoverBorderColor')
            },
            '&:disabled': {
                color: get('semanticColors.button.secondary.disabledText'),
                fill: get('semanticColors.button.secondary.disabledText'),
                background: get('semanticColors.button.secondary.disabledBackground'),
                borderColor: get('semanticColors.button.secondary.disabledBorderColor')
            }
        },
        danger: {
            color: get('semanticColors.button.danger.text'),
            fill: get('semanticColors.button.danger.text'),
            background: get('semanticColors.button.danger.background'),
            borderColor: get('semanticColors.button.danger.borderColor'),

            '&:hover': {
                color: get('semanticColors.button.danger.hoverText'),
                fill: get('semanticColors.button.danger.hoverText'),
                background: get('semanticColors.button.danger.hoverBackground'),
                borderColor: get('semanticColors.button.danger.hoverBorderColor')
            },

            '&:disabled': {
                color: get('semanticColors.button.danger.disabledText'),
                fill: get('semanticColors.button.danger.disabledText'),
                background: get('semanticColors.button.danger.disabledBackground'),
                borderColor: get('semanticColors.button.danger.disabledBorderColor')
            }
        }
    }
});

const invertedVariantStyles = variant({
    variants: {
        primary: {
            color: get('semanticColors.button.primary.textInverted'),
            fill: get('semanticColors.button.primary.textInverted'),
            background: get('semanticColors.button.primary.backgroundInverted'),
            borderColor: get('semanticColors.button.primary.borderColorInverted'),

            '&:hover': {
                color: get('semanticColors.button.primary.hoverTextInverted'),
                fill: get('semanticColors.button.primary.hoverTextInverted'),
                background: get('semanticColors.button.primary.hoverBackgroundInverted'),
                borderColor: get('semanticColors.button.primary.hoverBorderColorInverted')
            },
            '&:disabled': {
                color: get('semanticColors.button.primary.disabledTextInverted'),
                fill: get('semanticColors.button.primary.disabledTextInverted'),
                background: get('semanticColors.button.primary.disabledBackgroundInverted'),
                borderColor: get('semanticColors.button.primary.disabledBorderColorInverted')
            }
        },
        secondary: {
            color: get('semanticColors.button.secondary.textInverted'),
            fill: get('semanticColors.button.secondary.textInverted'),
            background: get('semanticColors.button.secondary.backgroundInverted'),
            borderColor: get('semanticColors.button.secondary.borderColorInverted'),

            '&:hover': {
                color: get('semanticColors.button.secondary.hoverTextInverted'),
                fill: get('semanticColors.button.secondary.hoverTextInverted'),
                background: get('semanticColors.button.secondary.hoverBackgroundInverted'),
                borderColor: get('semanticColors.button.secondary.hoverBorderColorInverted')
            },
            '&:disabled': {
                color: get('semanticColors.button.secondary.disabledTextInverted'),
                fill: get('semanticColors.button.secondary.disabledTextInverted'),
                background: get('semanticColors.button.secondary.disabledBackgroundInverted'),
                borderColor: get('semanticColors.button.secondary.disabledBorderColorInverted')
            }
        },
        danger: {
            color: get('semanticColors.button.danger.textInverted'),
            fill: get('semanticColors.button.danger.textInverted'),
            background: get('semanticColors.button.danger.backgroundInverted'),
            borderColor: get('semanticColors.button.danger.borderColorInverted'),

            '&:hover': {
                color: get('semanticColors.button.danger.hoverTextInverted'),
                fill: get('semanticColors.button.danger.hoverTextInverted'),
                background: get('semanticColors.button.danger.hoverBackgroundInverted'),
                borderColor: get('semanticColors.button.danger.hoverBorderColorInverted')
            },
            '&:disabled': {
                color: get('semanticColors.button.danger.disabledTextInverted'),
                fill: get('semanticColors.button.danger.disabledTextInverted'),
                background: get('semanticColors.button.danger.disabledBackgroundInverted'),
                borderColor: get('semanticColors.button.danger.disabledBorderColorInverted')
            }
        }
    }
});

const Button: React.FC<ButtonProps> = styled(BaseButton).attrs({ theme })<ButtonProps>`
    transition: background ease 200ms, border-color ease 200ms, color ease 200ms, fill ease 200ms;

    ${p => (p.inverted ? invertedVariantStyles : variantStyles)};
`;

Button.defaultProps = {
    size: 'medium',
    variant: 'primary'
};

export { Button, ButtonProps };
