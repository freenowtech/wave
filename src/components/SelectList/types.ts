import { GroupBase } from 'react-select';
import { MarginProps, WidthProps } from 'styled-system';
import { ClassNameProps } from '../../utils/extractProps';
import type {} from 'react-select/base';
// This import is necessary for module augmentation.
// It allows us to extend the 'Props' interface in the 'react-select/base' module
// and add our custom properties to it. https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation

export type Variant = 'boxed' | 'bottom-lined';
export type Size = 'medium' | 'small';

declare module 'react-select/base' {
    export interface Props<Option, IsMulti extends boolean, Group extends GroupBase<Option>>
        extends ClassNameProps,
            WidthProps,
            MarginProps {
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
}

export { Props as SelectListProps } from 'react-select';
