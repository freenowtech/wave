import * as React from 'react';
import styled from 'styled-components';
import { ButtonStyleProps, ResponsiveValue, variant } from 'styled-system';
import { theme } from '../../essentials/theme';

import { BaseButton, BaseButtonProps } from './BaseButton';
import { Colors } from '../../essentials';
import { ComponentSemanticTokens, ReadCssVariable } from '../../essentials/Colors/types';

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

const ButtonSemanticTokens: ComponentSemanticTokens = {
    primary: {
        text: 'var(--text-primaryInverted)',
        icon: 'var(--icon-primaryInverted)',
        background: 'var(--background-primaryEmphasized)',
        border: 'var(--background-primaryEmphasized)', // no matching border token!

        textHover: 'var(--text-primaryInverted)',
        iconHover: 'var(--icon-primaryInverted)',
        backgroundHover: Colors.AUTHENTIC_BLUE_1100, // ??
        borderHover: Colors.AUTHENTIC_BLUE_1100,

        textDisabled: 'var(--text-primaryInverted)',
        iconDisabled: 'var(--icon-primaryInverted)',
        backgroundDisabled: Colors.AUTHENTIC_BLUE_200,
        borderDisabled: Colors.AUTHENTIC_BLUE_200,

        textInverted: Colors.ACTION_BLUE_900,
        iconInverted: Colors.ACTION_BLUE_900,
        backgroundInverted: Colors.WHITE,
        borderInverted: Colors.WHITE,

        textHoverInverted: 'var(--text-primaryInverted)',
        iconHoverInverted: 'var(--icon-primaryInverted)',
        backgroundHoverInverted: Colors.ACTION_BLUE_900,
        borderHoverInverted: Colors.ACTION_BLUE_900,

        textDisabledInverted: Colors.AUTHENTIC_BLUE_350,
        iconDisabledInverted: Colors.AUTHENTIC_BLUE_350,
        backgroundDisabledInverted: Colors.AUTHENTIC_BLUE_550,
        borderDisabledInverted: Colors.AUTHENTIC_BLUE_550
    },
    secondary: {
        text: Colors.AUTHENTIC_BLUE_900,
        icon: Colors.AUTHENTIC_BLUE_900,
        background: Colors.WHITE,
        border: Colors.AUTHENTIC_BLUE_200,

        textHover: Colors.AUTHENTIC_BLUE_900,
        iconHover: Colors.AUTHENTIC_BLUE_900,
        backgroundHover: Colors.AUTHENTIC_BLUE_50,
        borderHover: Colors.AUTHENTIC_BLUE_200,

        textDisabled: Colors.AUTHENTIC_BLUE_200,
        iconDisabled: Colors.AUTHENTIC_BLUE_200,
        backgroundDisabled: Colors.WHITE,
        borderDisabled: Colors.AUTHENTIC_BLUE_200,

        textInverted: Colors.WHITE,
        iconInverted: Colors.WHITE,
        backgroundInverted: 'transparent',
        borderInverted: Colors.WHITE,

        textHoverInverted: Colors.AUTHENTIC_BLUE_900,
        iconHoverInverted: Colors.AUTHENTIC_BLUE_900,
        backgroundHoverInverted: Colors.WHITE,
        borderHoverInverted: Colors.WHITE,

        textDisabledInverted: Colors.AUTHENTIC_BLUE_550,
        iconDisabledInverted: Colors.AUTHENTIC_BLUE_550,
        backgroundDisabledInverted: 'transparent',
        borderDisabledInverted: Colors.AUTHENTIC_BLUE_550
    },
    danger: {
        text: Colors.WHITE,
        icon: Colors.WHITE,
        background: Colors.NEGATIVE_ORANGE_900,
        border: Colors.NEGATIVE_ORANGE_900,

        textHover: Colors.WHITE,
        iconHover: Colors.WHITE,
        backgroundHover: Colors.NEGATIVE_ORANGE_1000,
        borderHover: Colors.NEGATIVE_ORANGE_1000,

        textDisabled: Colors.WHITE,
        iconDisabled: Colors.WHITE,
        backgroundDisabled: Colors.AUTHENTIC_BLUE_200,
        borderDisabled: Colors.AUTHENTIC_BLUE_200,

        textInverted: Colors.WHITE,
        iconInverted: Colors.WHITE,
        backgroundInverted: Colors.NEGATIVE_ORANGE_900,
        borderInverted: Colors.NEGATIVE_ORANGE_900,

        textHoverInverted: Colors.WHITE,
        iconHoverInverted: Colors.WHITE,
        backgroundHoverInverted: Colors.NEGATIVE_ORANGE_1000,
        borderHoverInverted: Colors.NEGATIVE_ORANGE_1000,

        textDisabledInverted: Colors.WHITE,
        iconDisabledInverted: Colors.WHITE,
        backgroundDisabledInverted: Colors.AUTHENTIC_BLUE_200,
        borderDisabledInverted: Colors.AUTHENTIC_BLUE_200
    }
};

const variantStyles = variant({
    variants: {
        primary: {
            color: 'var(--button-primary-text)',
            fill: 'var(--button-primary-icon)',
            background: 'var(--button-primary-background)',
            borderColor: 'var(--button-primary-border)',

            '&:hover': {
                color: 'var(--button-primary-textHover)',
                fill: 'var(--button-primary-iconHover)',
                background: 'var(--button-primary-backgroundHover)',
                borderColor: 'var(--button-primary-borderHover)'
            },

            '&:disabled': {
                color: 'var(--button-primary-textDisabled)',
                fill: 'var(--button-primary-iconDisabled)',
                background: 'var(--button-primary-backgroundDisabled)',
                borderColor: 'var(--button-primary-borderDisabled)'
            }
        },
        secondary: {
            color: 'var(--button-secondary-text)',
            fill: 'var(--button-secondary-icon)',

            background: 'var(--button-secondary-background)',
            borderColor: 'var(--button-secondary-border)',

            '&:hover': {
                color: 'var(--button-secondary-textHover)',
                fill: 'var(--button-secondary-iconHover)',
                background: 'var(--button-secondary-backgroundHover)',
                borderColor: 'var(--button-secondary-borderHover)'
            },

            '&:disabled': {
                color: 'var(--button-secondary-textDisabled)',
                fill: 'var(--button-secondary-iconDisabled)',
                background: 'var(--button-secondary-backgroundDisabled)',
                borderColor: 'var(--button-secondary-borderDisabled)'
            }
        },
        danger: {
            color: 'var(--button-danger-text)',
            fill: 'var(--button-danger-icon)',
            background: 'var(--button-danger-background)',
            borderColor: 'var(--button-danger-border)',

            '&:hover': {
                color: 'var(--button-danger-textHover)',
                fill: 'var(--button-danger-iconHover)',
                background: 'var(--button-danger-backgroundHover)',
                borderColor: 'var(--button-danger-borderHover)'
            },

            '&:disabled': {
                color: 'var(--button-danger-textDisabled)',
                fill: 'var(--button-danger-iconDisabled)',
                background: 'var(--button-danger-backgroundDisabled)',
                borderColor: 'var(--button-danger-borderDisabled)'
            }
        }
    }
});

const invertedVariantStyles = variant({
    variants: {
        primary: {
            color: 'var(--button-primary-textInverted)',
            fill: 'var(--button-primary-iconInverted)',
            background: 'var(--button-primary-backgroundInverted)',
            borderColor: 'var(--button-primary-borderInverted)',

            '&:hover': {
                color: 'var(--button-primary-textHoverInverted)',
                fill: 'var(--button-primary-iconHoverInverted)',
                background: 'var(--button-primary-backgroundHoverInverted)',
                borderColor: 'var(--button-primary-borderHoverInverted)'
            },
            '&:disabled': {
                color: 'var(--button-primary-textDisabledInverted)',
                fill: 'var(--button-primary-iconDisabledInverted)',
                background: 'var(--button-primary-backgroundDisabledInverted)',
                borderColor: 'var(--button-primary-borderDisabledInverted)'
            }
        },
        secondary: {
            color: 'var(--button-secondary-textInverted)',
            fill: 'var(--button-secondary-iconInverted)',
            background: 'var(--button-secondary-backgroundInverted)',
            borderColor: 'var(--button-secondary-borderInverted)',

            '&:hover': {
                color: 'var(--button-secondary-textHoverInverted)',
                fill: 'var(--button-secondary-iconHoverInverted)',
                background: 'var(--button-secondary-backgroundHoverInverted)',
                borderColor: 'var(--button-secondary-borderHoverInverted)'
            },
            '&:disabled': {
                color: 'var(--button-secondary-textDisabledInverted)',
                fill: 'var(--button-secondary-iconDisabledInverted)',
                background: 'var(--button-secondary-backgroundDisabledInverted)',
                borderColor: 'var(--button-secondary-borderDisabledInverted)'
            }
        },
        danger: {
            color: 'var(--button-danger-textInverted)',
            fill: 'var(--button-danger-iconInverted)',
            background: 'var(--button-danger-backgroundInverted)',
            borderColor: 'var(--button-danger-borderInverted)',

            '&:hover': {
                color: 'var(--button-danger-textHoverInverted)',
                fill: 'var(--button-danger-iconHoverInverted)',
                background: 'var(--button-danger-backgroundHoverInverted)',
                borderColor: 'var(--button-danger-borderHoverInverted)'
            },
            '&:disabled': {
                color: 'var(--button-danger-textDisabledInverted)',
                fill: 'var(--button-danger-iconDisabledInverted)',
                background: 'var(--button-danger-backgroundDisabledInverted)',
                borderColor: 'var(--button-danger-borderDisabledInverted)'
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
