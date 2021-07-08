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
            borderColor: get('semanticColors.button.primary.border'),

            '&:hover': {
                color: get('semanticColors.button.primary.textHover'),
                fill: get('semanticColors.button.primary.textHover'),
                background: get('semanticColors.button.primary.backgroundHover'),
                borderColor: get('semanticColors.button.primary.borderHover')
            },

            '&:disabled': {
                color: get('semanticColors.button.primary.textDisabled'),
                fill: get('semanticColors.button.primary.textDisabled'),
                background: get('semanticColors.button.primary.backgroundDisabled'),
                borderColor: get('semanticColors.button.primary.borderDisabled')
            }
        },
        secondary: {
            color: get('semanticColors.button.secondary.text'),
            fill: get('semanticColors.button.secondary.text'),
            background: get('semanticColors.button.secondary.background'),
            borderColor: get('semanticColors.button.secondary.border'),
            '&:hover': {
                color: get('semanticColors.button.secondary.textHover'),
                fill: get('semanticColors.button.secondary.textHover'),
                background: get('semanticColors.button.secondary.backgroundHover'),
                borderColor: get('semanticColors.button.secondary.borderHover')
            },
            '&:disabled': {
                color: get('semanticColors.button.secondary.textDisabled'),
                fill: get('semanticColors.button.secondary.textDisabled'),
                background: get('semanticColors.button.secondary.backgroundDisabled'),
                borderColor: get('semanticColors.button.secondary.borderDisabled')
            }
        },
        danger: {
            color: get('semanticColors.button.danger.text'),
            fill: get('semanticColors.button.danger.text'),
            background: get('semanticColors.button.danger.background'),
            borderColor: get('semanticColors.button.danger.border'),

            '&:hover': {
                color: get('semanticColors.button.danger.textHover'),
                fill: get('semanticColors.button.danger.textHover'),
                background: get('semanticColors.button.danger.backgroundHover'),
                borderColor: get('semanticColors.button.danger.borderHover')
            },

            '&:disabled': {
                color: get('semanticColors.button.danger.textDisabled'),
                fill: get('semanticColors.button.danger.textDisabled'),
                background: get('semanticColors.button.danger.backgroundDisabled'),
                borderColor: get('semanticColors.button.danger.borderDisabled')
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
            borderColor: get('semanticColors.button.primary.borderInverted'),

            '&:hover': {
                color: get('semanticColors.button.primary.textHoverInverted'),
                fill: get('semanticColors.button.primary.textHoverInverted'),
                background: get('semanticColors.button.primary.backgroundHoverInverted'),
                borderColor: get('semanticColors.button.primary.borderHoverInverted')
            },
            '&:disabled': {
                color: get('semanticColors.button.primary.textDisabledInverted'),
                fill: get('semanticColors.button.primary.textDisabledInverted'),
                background: get('semanticColors.button.primary.backgroundDisabledInverted'),
                borderColor: get('semanticColors.button.primary.borderDisabledInverted')
            }
        },
        secondary: {
            color: get('semanticColors.button.secondary.textInverted'),
            fill: get('semanticColors.button.secondary.textInverted'),
            background: get('semanticColors.button.secondary.backgroundInverted'),
            borderColor: get('semanticColors.button.secondary.borderInverted'),

            '&:hover': {
                color: get('semanticColors.button.secondary.textHoverInverted'),
                fill: get('semanticColors.button.secondary.textHoverInverted'),
                background: get('semanticColors.button.secondary.backgroundHoverInverted'),
                borderColor: get('semanticColors.button.secondary.borderHoverInverted')
            },
            '&:disabled': {
                color: get('semanticColors.button.secondary.textDisabledInverted'),
                fill: get('semanticColors.button.secondary.textDisabledInverted'),
                background: get('semanticColors.button.secondary.backgroundDisabledInverted'),
                borderColor: get('semanticColors.button.secondary.borderDisabledInverted')
            }
        },
        danger: {
            color: get('semanticColors.button.danger.textInverted'),
            fill: get('semanticColors.button.danger.textInverted'),
            background: get('semanticColors.button.danger.backgroundInverted'),
            borderColor: get('semanticColors.button.danger.borderInverted'),

            '&:hover': {
                color: get('semanticColors.button.danger.textHoverInverted'),
                fill: get('semanticColors.button.danger.textHoverInverted'),
                background: get('semanticColors.button.danger.backgroundHoverInverted'),
                borderColor: get('semanticColors.button.danger.borderHoverInverted')
            },
            '&:disabled': {
                color: get('semanticColors.button.danger.textDisabledInverted'),
                fill: get('semanticColors.button.danger.textDisabledInverted'),
                background: get('semanticColors.button.danger.backgroundDisabledInverted'),
                borderColor: get('semanticColors.button.danger.borderDisabledInverted')
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
