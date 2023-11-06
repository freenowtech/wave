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

interface InternalInputProps {
    hasValue: boolean;
    // we don't want to create a conflict with the `size` attribute of the input HTML element
    // the public interface keeps using the `size` prop which is internally mapped to `waveSize` to avoid TS conflicts
    waveSize: InputProps['size'];
    variant: InputProps['variant'];
}

export { InputProps, InternalInputProps };
