import styled from 'styled-components';
import { ResponsiveValue, variant } from 'styled-system';

import { BaseButton, BaseButtonProps } from './BaseButton';
import { ComponentSemanticTokens } from '../../essentials/Colors/types';
import { getSemanticValue } from '../../utils/cssVariables';

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
            color: getSemanticValue('foreground-accent-default'),
            fill: getSemanticValue('foreground-accent-default'),

            '&:hover': {
                color: getSemanticValue('foreground-accent-emphasized'),
                fill: getSemanticValue('foreground-accent-emphasized')
            },

            '&:disabled': {
                color: getSemanticValue('foreground-disabled'),
                fill: getSemanticValue('foreground-disabled')
            }
        },
        danger: {
            color: getSemanticValue('foreground-danger-default'),
            fill: getSemanticValue('foreground-danger-default'),

            '&:hover': {
                color: getSemanticValue('foreground-danger-emphasized'),
                fill: getSemanticValue('foreground-danger-emphasized')
            },

            '&:disabled': {
                color: getSemanticValue('foreground-disabled'),
                fill: getSemanticValue('foreground-disabled')
            }
        }
    }
});

const invertedVariantStyles = variant<ComponentSemanticTokens, Variant>({
    variants: {
        default: {
            color: getSemanticValue('foreground-on-background-primary'),
            fill: getSemanticValue('foreground-on-background-primary'),

            '&:hover': {
                color: getSemanticValue('foreground-neutral-default'),
                fill: getSemanticValue('foreground-neutral-default')
            },

            '&:disabled': {
                color: getSemanticValue('foreground-disabled'),
                fill: getSemanticValue('foreground-disabled')
            }
        },
        danger: {
            color: getSemanticValue('foreground-danger-default'),
            fill: getSemanticValue('foreground-danger-default'),

            '&:hover': {
                color: getSemanticValue('foreground-danger-emphasized'),
                fill: getSemanticValue('foreground-danger-emphasized')
            },

            '&:disabled': {
                color: getSemanticValue('foreground-disabled'),
                fill: getSemanticValue('foreground-disabled')
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
