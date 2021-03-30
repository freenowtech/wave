import React from 'react';
import { PropsTable } from '../../../docs/PropsTable';

export const SearchPropsTable = () => {
    const props = [
        {
            name: 'value',
            type: 'string',
            defaultValue: ''
        },
        {
            name: 'size',
            type: '"small" | "medium"',
            defaultValue: 'medium'
        },
        {
            name: 'disabled',
            type: 'boolean',
            defaultValue: 'false'
        },
        {
            name: 'inverted',
            type: 'boolean',
            defaultValue: 'false'
        },
        {
            name: 'placeholder',
            type: 'string'
        }
    ];

    return <PropsTable props={props} />;
};
