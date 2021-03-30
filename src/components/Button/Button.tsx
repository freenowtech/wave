import * as React from 'react';
import styled, { css } from 'styled-components';
import { ButtonStyleProps, ResponsiveValue, variant } from 'styled-system';
import { Colors } from '../../essentials';

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
            background: Colors.AUTHENTIC_BLUE_900,
            borderColor: Colors.AUTHENTIC_BLUE_900,
            color: Colors.WHITE,
            fill: Colors.WHITE,
            '&:hover': {
                background: Colors.AUTHENTIC_BLUE_1100,
                borderColor: Colors.AUTHENTIC_BLUE_1100
            },
            '&:disabled': {
                color: Colors.WHITE,
                fill: Colors.WHITE,
                background: Colors.AUTHENTIC_BLUE_200,
                borderColor: Colors.AUTHENTIC_BLUE_200
            }
        },
        secondary: {
            background: Colors.WHITE,
            borderColor: Colors.AUTHENTIC_BLUE_200,
            color: Colors.AUTHENTIC_BLUE_900,
            fill: Colors.AUTHENTIC_BLUE_900,
            '&:hover': {
                background: Colors.AUTHENTIC_BLUE_50
            },
            '&:disabled': {
                color: Colors.AUTHENTIC_BLUE_200,
                fill: Colors.AUTHENTIC_BLUE_200,
                background: Colors.WHITE,
                borderColor: Colors.AUTHENTIC_BLUE_200
            }
        },
        danger: {
            background: Colors.NEGATIVE_ORANGE_900,
            borderColor: Colors.NEGATIVE_ORANGE_900,
            color: Colors.WHITE,
            fill: Colors.WHITE,
            '&:hover': {
                background: Colors.NEGATIVE_ORANGE_1000,
                borderColor: Colors.NEGATIVE_ORANGE_1000
            },
            '&:disabled': {
                color: Colors.WHITE,
                fill: Colors.WHITE,
                background: Colors.AUTHENTIC_BLUE_200,
                borderColor: Colors.AUTHENTIC_BLUE_200
            }
        }
    }
});

const invertedVariantStyles = variant({
    variants: {
        primary: {
            background: Colors.WHITE,
            borderColor: Colors.WHITE,
            color: Colors.ACTION_BLUE_900,
            fill: Colors.ACTION_BLUE_900,
            '&:hover': {
                background: Colors.ACTION_BLUE_900,
                borderColor: Colors.ACTION_BLUE_900,
                color: Colors.WHITE,
                fill: Colors.WHITE
            },
            '&:disabled': {
                background: Colors.AUTHENTIC_BLUE_550,
                borderColor: Colors.AUTHENTIC_BLUE_550,
                color: Colors.AUTHENTIC_BLUE_350,
                fill: Colors.AUTHENTIC_BLUE_350
            }
        },
        secondary: {
            background: 'transparent',
            borderColor: Colors.WHITE,
            color: Colors.WHITE,
            fill: Colors.WHITE,
            '&:hover': {
                background: Colors.WHITE,
                color: Colors.AUTHENTIC_BLUE_900,
                fill: Colors.AUTHENTIC_BLUE_900
            },
            '&:disabled': {
                background: 'transparent',
                borderColor: Colors.AUTHENTIC_BLUE_550,
                color: Colors.AUTHENTIC_BLUE_550,
                fill: Colors.AUTHENTIC_BLUE_550
            }
        },
        danger: {
            background: Colors.NEGATIVE_ORANGE_900,
            borderColor: Colors.NEGATIVE_ORANGE_900,
            color: Colors.WHITE,
            fill: Colors.WHITE,
            '&:hover': {
                background: Colors.NEGATIVE_ORANGE_1000,
                borderColor: Colors.NEGATIVE_ORANGE_1000
            },
            '&:disabled': {
                background: Colors.AUTHENTIC_BLUE_550,
                borderColor: Colors.AUTHENTIC_BLUE_550,
                color: Colors.AUTHENTIC_BLUE_350,
                fill: Colors.AUTHENTIC_BLUE_350
            }
        }
    }
});

const Button: React.FC<ButtonProps> = styled(BaseButton)<ButtonProps>`
    transition: background ease 216ms, border-color ease 216ms;

    ${p => (p.inverted ? invertedVariantStyles : variantStyles)};
`;

Button.defaultProps = {
    size: 'medium',
    variant: 'primary'
};

export { Button, ButtonProps };
