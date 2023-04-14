import { ComponentPropsWithRef } from 'react';

interface InputProps extends Omit<ComponentPropsWithRef<'input'>, 'size' | 'width'> {
    /**
     * Sets the variant of the input element
     */
    variant?: 'boxed' | 'bottom-lined';
    /**
     * Sets the size of the input element
     */
    size?: 'small' | 'medium';
    /**
     * Enables the inverted variant
     */
    inverted?: boolean;
    /**
     * Enables the disabled variant
     */
    disabled?: boolean;
    /**
     * Enables the error state
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
