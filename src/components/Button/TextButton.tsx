import * as React from 'react';
import styled from 'styled-components';
import { ResponsiveValue, variant } from 'styled-system';
import { Colors } from '../../essentials';

import { BaseButton, BaseButtonProps } from './BaseButton';

interface TextButtonProps extends BaseButtonProps {
    /**
     * adjust color for display on a dark background
     */
    inverted?: boolean;
    /**
     * Define base colors
     */
    variant?: ResponsiveValue<'default' | 'danger'>;
}

const dangerStyles = {
    color: Colors.NEGATIVE_ORANGE_900,
    fill: Colors.NEGATIVE_ORANGE_900,
    '&:hover': {
        color: Colors.NEGATIVE_ORANGE_1000,
        fill: Colors.NEGATIVE_ORANGE_1000
    }
};

const variantStyles = variant({
    variants: {
        default: {
            color: Colors.ACTION_BLUE_900,
            fill: Colors.ACTION_BLUE_900,
            '&:hover': {
                color: Colors.ACTION_BLUE_1000,
                fill: Colors.ACTION_BLUE_1000
            }
        },
        danger: dangerStyles
    }
});

const invertedVariantStyles = variant({
    variants: {
        default: {
            color: Colors.WHITE,
            fill: Colors.WHITE,
            '&:hover': {
                color: Colors.AUTHENTIC_BLUE_350,
                fill: Colors.AUTHENTIC_BLUE_350
            }
        },
        danger: dangerStyles
    }
});

const TextButton: React.FC<TextButtonProps> = styled(BaseButton)<TextButtonProps>`
    transition: color 200ms;

    ${p => (p.inverted ? invertedVariantStyles(p) : variantStyles(p))};

    &:disabled {
        color: ${p => (p.inverted ? Colors.AUTHENTIC_BLUE_550 : Colors.AUTHENTIC_BLUE_200)};
        fill: ${p => (p.inverted ? Colors.AUTHENTIC_BLUE_550 : Colors.AUTHENTIC_BLUE_200)};
    }
`;

TextButton.defaultProps = {
    size: 'medium',
    variant: 'default'
};

export { TextButton, TextButtonProps };
