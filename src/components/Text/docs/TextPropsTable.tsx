import * as React from 'react';
import { PropsTable } from '../../../docs/PropsTable';

export const TextPropsTable = () => {
    const props = [
        {
            name: 'fontWeight',
            type: '"normal" | "semibold" | "bold"',
            description: 'The font-weight property specifies the weight (or boldness) of the font',
            defaultValue: '"normal"'
        },
        {
            name: 'inverted',
            type: 'boolean',
            description: 'Adjust color for display on a dark background',
            defaultValue: 'false'
        },
        {
            name: 'secondary',
            type: 'boolean',
            description: 'Adjust color to indicate secondary information',
            defaultValue: 'false'
        },
        {
            name: 'disabled',
            type: 'boolean',
            description: 'Adjust color to display a disabled text element',
            defaultValue: 'false'
        }
    ];
    return <PropsTable props={props} />;
};
