import { Props } from 'react-select';
import { MarginProps, WidthProps } from 'styled-system';
import { ClassNameProps } from '../../utils/extractProps';

export type Variant = 'boxed' | 'bottom-lined';
export type Size = 'medium' | 'small';

interface SelectListProps extends Props, ClassNameProps, WidthProps, MarginProps {
    variant?: Variant;
    size?: Size;
    inverted?: boolean;
    error?: boolean;
    label?: string;
    inputId?: string;
}

export { SelectListProps };
