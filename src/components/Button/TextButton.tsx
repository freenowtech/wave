import styled from 'styled-components';
import { ResponsiveValue, variant } from 'styled-system';

import { BaseButton, BaseButtonProps } from './BaseButton';
import { ComponentSemanticTokens } from '../../essentials/Colors/types';

type Variant = 'default' | 'danger';

interface TextButtonProps extends BaseButtonProps {
    /**
     * adjust color for display on a dark background
     */
    inverted?: boolean;
    /**
     * Define base colors
     */
    variant?: ResponsiveValue<Variant>;
}

const variantStyles = variant<ComponentSemanticTokens, Variant>({
    variants: {
        default: {
            color: 'var(--wave-s-color-text-link)',
            fill: 'var(--wave-s-color-icon-action-default)',

            '&:hover': {
                color: 'var(--wave-s-color-text-linkHover)',
                fill: 'var(--wave-s-color-icon-action-emphasized)'
            },

            '&:disabled': {
                color: 'var(--wave-s-color-text-disabled)',
                fill: 'var(--wave-s-color-icon-disabled-default)'
            }
        },
        danger: {
            color: 'var(--wave-s-color-text-dangerInverted)',
            fill: 'var(--wave-s-color-icon-danger-default)',

            '&:hover': {
                color: 'var(--wave-s-color-text-danger)',
                fill: 'var(--wave-s-color-icon-danger-emphasized)'
            },

            '&:disabled': {
                color: 'var(--wave-s-color-text-disabled)',
                fill: 'var(--wave-s-color-icon-disabled-default)'
            }
        }
    }
});

const invertedVariantStyles = variant<ComponentSemanticTokens, Variant>({
    variants: {
        default: {
            color: 'var(--wave-s-color-text-linkInverted)',
            fill: 'var(--wave-s-color-icon-primary-inverted)',

            '&:hover': {
                color: 'var(--wave-s-color-text-tertiary)',
                fill: 'var(--wave-s-color-icon-tertiary-inverted)'
            },

            '&:disabled': {
                color: 'var(--wave-s-color-text-disabledInverted)',
                fill: 'var(--wave-s-color-icon-disabled-inverted)'
            }
        },
        danger: {
            color: 'var(--wave-s-color-text-dangerInverted)',
            fill: 'var(--wave-s-color-icon-danger-default)',

            '&:hover': {
                color: 'var(--wave-s-color-text-danger)',
                fill: 'var(--wave-s-color-icon-danger-emphasized)'
            },

            '&:disabled': {
                color: 'var(--wave-s-color-text-disabledInverted)',
                fill: 'var(--wave-s-color-icon-disabled-inverted)'
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
