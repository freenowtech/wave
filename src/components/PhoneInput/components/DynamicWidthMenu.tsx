import React from 'react';
import { components, type MenuProps } from 'react-select';

interface DynamicWidthMenuProps extends MenuProps {
    width?: number;
}

// We avoid wrapping components.Menu with styled() because styled-components v6 strips
// the `theme` prop, which react-select needs internally for its style functions.
const DynamicWidthMenu: React.FC<DynamicWidthMenuProps> = ({ width, ...props }) => (
    <components.Menu
        {...props}
        innerProps={{
            ...props.innerProps,
            style: {
                ...props.innerProps?.style,
                ...(width === undefined ? {} : { width: `${width}px` })
            }
        }}
    />
);

export { DynamicWidthMenu };
