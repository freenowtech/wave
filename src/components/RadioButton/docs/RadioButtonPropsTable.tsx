import * as React from 'react';
import { PropsTable } from '../../../docs/PropsTable';

export const RadioButtonPropsTable = () => {
    const props = [
        {
            name: 'label',
            type: 'string | React element',
            description: 'Sets a label for the radio button',
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
            name: 'textVerticalAlign',
            type: '"top" | "center"',
            description: 'Adjusts the vertical alignment of the radio button',
            defaultValue: '"center"'
        }
    ];
    return <PropsTable props={props} />;
};
