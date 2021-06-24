import * as React from 'react';
import styled from 'styled-components';
import { ResponsiveValue, variant } from 'styled-system';
import { get } from '../../utils/themeGet';

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

const variantStyles = variant({
    variants: {
        default: {
            color: get('semanticColors.textButton.primary.text'),
            fill: get('semanticColors.textButton.primary.text'),

            '&:hover': {
                color: get('semanticColors.textButton.primary.textHover'),
                fill: get('semanticColors.textButton.primary.textHover')
            },

            '&:disabled': {
                color: get('semanticColors.textButton.primary.textDisabled'),
                fill: get('semanticColors.textButton.primary.textDisabled')
            }
        },
        danger: {
            color: get('semanticColors.textButton.danger.text'),
            fill: get('semanticColors.textButton.danger.text'),

            '&:hover': {
                color: get('semanticColors.textButton.danger.textHover'),
                fill: get('semanticColors.textButton.danger.textHover')
            },

            '&:disabled': {
                color: get('semanticColors.textButton.danger.textDisabled'),
                fill: get('semanticColors.textButton.danger.textDisabled')
            }
        }
    }
});

const invertedVariantStyles = variant({
    variants: {
        default: {
            color: get('semanticColors.textButton.primary.textInverted'),
            fill: get('semanticColors.textButton.primary.textInverted'),

            '&:hover': {
                color: get('semanticColors.textButton.primary.textHoverInverted'),
                fill: get('semanticColors.textButton.primary.textHoverInverted')
            },

            '&:disabled': {
                color: get('semanticColors.textButton.primary.textDisabledInverted'),
                fill: get('semanticColors.textButton.primary.textDisabledInverted')
            }
        },
        danger: {
            color: get('semanticColors.textButton.danger.textInverted'),
            fill: get('semanticColors.textButton.danger.textInverted'),

            '&:hover': {
                color: get('semanticColors.textButton.danger.textHoverInverted'),
                fill: get('semanticColors.textButton.danger.textHoverInverted')
            },

            '&:disabled': {
                color: get('semanticColors.textButton.danger.textDisabledInverted'),
                fill: get('semanticColors.textButton.danger.textDisabledInverted')
            }
        }
    }
});

const TextButton: React.FC<TextButtonProps> = styled(BaseButton)<TextButtonProps>`
    transition: color 200ms, fill 200ms;

    ${p => (p.inverted ? invertedVariantStyles(p) : variantStyles(p))};
`;

TextButton.defaultProps = {
    size: 'medium',
    variant: 'default'
};

export { TextButton, TextButtonProps };
