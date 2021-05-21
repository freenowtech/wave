import React from 'react';
import { PropsTable } from '../../../docs/PropsTable';

export const PasswordPropsTable = () => {
    const props = [
        {
            name: 'purpose',
            type: '"login" | "new-password"',
            defaultValue: 'login'
        },
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
        },
        {
            name: 'aria',
            type: `Aria labels object (see Accessibility section below)`
        }
    ];

    return <PropsTable props={props} />;
};
