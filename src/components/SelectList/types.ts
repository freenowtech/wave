import { type Props } from 'react-select';
import { type MarginProps, type WidthProps } from 'styled-system';
import { type ClassNameProps } from '../../utils/extractProps';

export type Variant = 'boxed' | 'bottom-lined';
export type Size = 'medium' | 'small';

interface SelectListProps extends Props, ClassNameProps, WidthProps, MarginProps {
    /**
     * Define style of the SelectList component
     */
    variant?: Variant;
    /**
     * Size of the select list component
     */
    size?: Size;
    /**
     * Show error state
     */
    error?: boolean;
    /**
     * Sets a label for the select
     */
    label?: string;
    /**
     * Sets the id of the input field of the SelectList component
     */
    inputId?: string;
}

export type { SelectListProps };
