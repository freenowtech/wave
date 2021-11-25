import { FC } from 'react';
import * as React from 'react';
import { PropsTable } from '../../../docs/PropsTable';

export const SelectPropsTable: FC = () => {
    const props = [
        {
            name: 'variant',
            type: '"boxed" | "bottom-lined"',
            description: 'Define the display variant with boxed as the default',
            defaultValue: '"boxed"'
        },
        {
            name: 'size',
            type: '"medium" | "small"',
            description: 'Adjusts the size of the select list',
            defaultValue: '"medium"'
        },
        {
            name: 'inverted',
            type: 'boolean',
            description: 'Adjust colors for display on a dark background'
        },
        {
            name: 'error',
            type: 'boolean',
            description: 'Indicate that the input contains an error'
        },
        {
            name: 'label',
            type: 'string',
            description: 'Indicate that the input contains an error'
        },
        {
            name: 'placeholder',
            type: 'string',
            description: 'Set a placeholder for the select component, allowing users to remove their selection'
        }
    ];
    return <PropsTable props={props} />;
};
