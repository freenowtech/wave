import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { MarginProps } from 'styled-system';
import { ClassNameProps } from '../../utils/extractProps';

interface RadioButtonProps extends ComponentPropsWithoutRef<'input'>, ClassNameProps, MarginProps {
    /**
     * Set radio button to render in checked state
     */
    checked?: boolean;
    /**
     * Disables the radio button
     */
    disabled?: boolean;
    /**
     * Provide a label for the input which will be shown next to the radio button
     */
    label?: ReactNode;
    /**
     * Add styles to show the radio button has errors
     */
    error?: boolean;
    /**
     * Align the label text relatively to the radio button
     * @default center
     */
    textVerticalAlign?: 'top' | 'center';
}

export { RadioButtonProps };
