import { FC } from 'react';
import * as React from 'react';
import { PropsTable } from '../../../docs/PropsTable';

export const SelectListPropsTable: FC = () => {
    const props = [
        {
            name: 'variant',
            type: '"boxed" | "bottom-lined"',
            description: 'Define style of the SelectList component',
            defaultValue: '"boxed"'
        },
        {
            name: 'size',
            type: '"medium" | "small"',
            description: 'Adjusts the size of the select list component',
            defaultValue: '"medium"'
        },
        {
            name: 'label',
            type: 'string',
            description: 'Sets a label for the input'
        },
        {
            name: 'error',
            type: 'boolean',
            description: 'Sets styles to indicate an error'
        },
        {
            name: 'inverted',
            type: 'boolean',
            description: 'Adjust colors for display on a dark background'
        },
        {
            name: 'inputId',
            type: 'string',
            description: 'Sets the id of the input field of the SelectList component'
        }
    ];
    return <PropsTable props={props} />;
};
