import { styled } from 'styled-components';
import { type ResponsiveValue, variant } from 'styled-system';

import { BaseButton, type BaseButtonProps } from './BaseButton';
import { type ComponentSemanticTokens } from '../../essentials/Colors/types';
import { getSemanticValue } from '../../utils/cssVariables';

type Variant = 'default' | 'danger';

interface TextButtonProps extends BaseButtonProps {
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

const TextButton = styled(BaseButton).attrs<TextButtonProps>({ size: 'medium', variant: 'default' })<TextButtonProps>`
    transition:
        color 200ms,
        fill 200ms;

    ${variantStyles};
`;

export { TextButton, type TextButtonProps };
