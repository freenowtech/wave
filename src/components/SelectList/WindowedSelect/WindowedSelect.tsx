/*!
 * Vendored from react-windowed-select (https://github.com/jacobworrel/react-windowed-select)
 * via the wave-react-windowed-select fork. Copyright (c) 2019 Jacob Worrel. MIT License.
 */
import React, { forwardRef, useMemo } from 'react';
import Select, { type Props, type SelectInstance } from 'react-select';
import { calcOptionsLength } from './utils';
import { WindowedMenuList } from './WindowedMenuList';

interface WindowedSelectProps extends Props {
    /**
     * Number of options from which the menu list only renders the visible options
     * @default 100
     */
    windowThreshold?: number;
}

const WindowedSelect = forwardRef<SelectInstance, WindowedSelectProps>(
    ({ windowThreshold = 100, ...passedProps }, ref) => {
        const optionsLength = useMemo(() => calcOptionsLength(passedProps.options), [passedProps.options]);
        const isWindowed = optionsLength >= windowThreshold;

        return (
            <Select
                {...passedProps}
                components={{
                    ...passedProps.components,
                    ...(isWindowed ? { MenuList: WindowedMenuList } : {})
                }}
                ref={ref}
            />
        );
    }
);

export { WindowedSelect, type WindowedSelectProps };
