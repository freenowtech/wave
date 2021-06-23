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
                color: get('semanticColors.textButton.primary.hoverText'),
                fill: get('semanticColors.textButton.primary.hoverText')
            },

            '&:disabled': {
                color: get('semanticColors.textButton.primary.disabledText'),
                fill: get('semanticColors.textButton.primary.disabledText')
            }
        },
        danger: {
            color: get('semanticColors.textButton.danger.text'),
            fill: get('semanticColors.textButton.danger.text'),

            '&:hover': {
                color: get('semanticColors.textButton.danger.hoverText'),
                fill: get('semanticColors.textButton.danger.hoverText')
            },

            '&:disabled': {
                color: get('semanticColors.textButton.danger.disabledText'),
                fill: get('semanticColors.textButton.danger.disabledText')
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
                color: get('semanticColors.textButton.primary.hoverTextInverted'),
                fill: get('semanticColors.textButton.primary.hoverTextInverted')
            },

            '&:disabled': {
                color: get('semanticColors.textButton.primary.disabledTextInverted'),
                fill: get('semanticColors.textButton.primary.disabledTextInverted')
            }
        },
        danger: {
            color: get('semanticColors.textButton.danger.textInverted'),
            fill: get('semanticColors.textButton.danger.textInverted'),

            '&:hover': {
                color: get('semanticColors.textButton.danger.hoverTextInverted'),
                fill: get('semanticColors.textButton.danger.hoverTextInverted')
            },

            '&:disabled': {
                color: get('semanticColors.textButton.danger.disabledTextInverted'),
                fill: get('semanticColors.textButton.danger.disabledTextInverted')
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
