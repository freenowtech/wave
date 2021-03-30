import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { ResponsiveValue } from 'styled-system';

interface InputProps
    extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'size' | 'width'> {
    variant?: ResponsiveValue<'boxed' | 'bottom-lined'>;
    size?: ResponsiveValue<'small' | 'medium'>;
    inverted?: boolean;
    label?: string;
    placeholder?: string;
    error?: boolean;
}

export { InputProps };
