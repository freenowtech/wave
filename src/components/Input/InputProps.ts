import { ComponentPropsWithRef } from 'react';
import { ResponsiveValue } from 'styled-system';

interface InputProps extends Omit<ComponentPropsWithRef<'input'>, 'size' | 'width'> {
    /**
     * Sets the variant of the input
     * @default boxed
     */
    variant?: ResponsiveValue<'boxed' | 'bottom-lined'>;
    /**
     * Sets the size of the input
     * @default medium
     */
    size?: ResponsiveValue<'small' | 'medium'>;
    /**
     * Disable the input
     */
    disabled?: boolean;
    /**
     * Shows the error state
     */
    error?: boolean;
    /**
     * Sets the input label
     */
    label?: string;
    /**
     * Sets the input placeholder
     */
    placeholder?: string;
}

export { InputProps };
