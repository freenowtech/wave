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
            fill: get('semanticColors.textButton.primary.icon'),

            '&:hover': {
                color: get('semanticColors.textButton.primary.textHover'),
                fill: get('semanticColors.textButton.primary.iconHover')
            },

            '&:disabled': {
                color: get('semanticColors.textButton.primary.textDisabled'),
                fill: get('semanticColors.textButton.primary.iconDisabled')
            }
        },
        danger: {
            color: get('semanticColors.textButton.danger.text'),
            fill: get('semanticColors.textButton.danger.icon'),

            '&:hover': {
                color: get('semanticColors.textButton.danger.textHover'),
                fill: get('semanticColors.textButton.danger.iconHover')
            },

            '&:disabled': {
                color: get('semanticColors.textButton.danger.textDisabled'),
                fill: get('semanticColors.textButton.danger.iconDisabled')
            }
        }
    }
});

const invertedVariantStyles = variant({
    variants: {
        default: {
            color: get('semanticColors.textButton.primary.textInverted'),
            fill: get('semanticColors.textButton.primary.iconInverted'),

            '&:hover': {
                color: get('semanticColors.textButton.primary.textHoverInverted'),
                fill: get('semanticColors.textButton.primary.iconHoverInverted')
            },

            '&:disabled': {
                color: get('semanticColors.textButton.primary.textDisabledInverted'),
                fill: get('semanticColors.textButton.primary.iconDisabledInverted')
            }
        },
        danger: {
            color: get('semanticColors.textButton.danger.textInverted'),
            fill: get('semanticColors.textButton.danger.iconInverted'),

            '&:hover': {
                color: get('semanticColors.textButton.danger.textHoverInverted'),
                fill: get('semanticColors.textButton.danger.iconHoverInverted')
            },

            '&:disabled': {
                color: get('semanticColors.textButton.danger.textDisabledInverted'),
                fill: get('semanticColors.textButton.danger.iconDisabledInverted')
            }
        }
    }
});

const TextButton = styled(BaseButton)<TextButtonProps>`
    transition: color 200ms, fill 200ms;

    ${props => (props.inverted ? invertedVariantStyles(props) : variantStyles(props))};
`;

TextButton.defaultProps = {
    size: 'medium',
    variant: 'default'
};

export { TextButton, TextButtonProps };
