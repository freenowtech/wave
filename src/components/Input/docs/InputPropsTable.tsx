import React, { FC } from 'react';
import { PropsTable } from '../../../docs/PropsTable';

export const InputPropsTable: FC = () => {
    const props = [
        {
            name: 'variant',
            type: '"boxed" | "bottom-lined"',
            defaultValue: 'boxed'
        },
        {
            name: 'size',
            type: '"small" | "medium"',
            defaultValue: 'medium'
        },
        {
            name: 'inverted',
            type: 'boolean'
        },
        {
            name: 'label',
            type: 'string'
        },
        {
            name: 'placeholder',
            type: 'string'
        },
        {
            name: 'error',
            type: 'boolean'
        }
    ];

    return <PropsTable props={props} />;
};
