import { ComponentPropsWithRef } from 'react';

interface InputProps extends Omit<ComponentPropsWithRef<'input'>, 'size' | 'width'> {
    /**
     * Sets the variant of the input
     */
    variant?: 'boxed' | 'bottom-lined';
    /**
     * Sets the size of the input
     */
    size?: 'small' | 'medium';
    /**
     * Inverts the colors of the input
     */
    inverted?: boolean;
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
