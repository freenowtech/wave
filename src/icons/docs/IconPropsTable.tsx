import * as React from 'react';
import { PropsTable } from '../../docs/PropsTable';

export const IconPropsTable = () => {
    const props = [
        {
            name: 'color',
            type: 'string',
            description: 'Override the default color of the icon'
        },
        {
            name: 'size',
            type: '"medium" | "small" | number',
            description: 'Adjusts the size of the icon with defaults or the size in pixels',
            defaultValue: '"medium"'
        }
    ];

    return <PropsTable props={props} />;
};
