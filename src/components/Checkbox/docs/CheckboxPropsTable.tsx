import * as React from 'react';
import { PropsTable } from '../../../docs/PropsTable';

export const CheckboxPropsTable = () => {
    const props = [
        {
            name: 'label',
            type: 'string | React element',
            description: 'Sets a label for the checkbox',
            defaultValue: ''
        },
        {
            name: 'error',
            type: 'boolean',
            description: 'Sets styles to indicate an error',
            defaultValue: ''
        },
        {
            name: 'disabled',
            type: 'boolean',
            description: 'Sets the state of the checkbox disabled',
            defaultValue: ''
        },
        {
            name: 'size',
            type: '"large" | "medium" | "small"',
            description: 'Adjusts the size of the checkbox label',
            defaultValue: '"medium"'
        },
        {
            name: 'textVerticalAlign',
            type: '"top" | "center"',
            description: 'Adjusts the vertical alignment of the checkbox',
            defaultValue: '"center"'
        },
        {
            name: 'indeterminate',
            type: 'boolean',
            description: 'Sets the checkbox in the indeterminate state',
            defaultValue: 'false'
        }
    ];
    return <PropsTable props={props} />;
};
