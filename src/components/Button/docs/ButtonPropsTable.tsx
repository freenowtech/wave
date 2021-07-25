import React, { FC } from 'react';
import { PropsTable } from '../../../docs/PropsTable';

export const ButtonPropsTable: FC = () => {
    const props = [
        {
            name: 'variant',
            type: '"primary" | "secondary" | "danger"',
            description: 'Define style of the button component, defaults to primary',
            defaultValue: '"primary"'
        },
        {
            name: 'size',
            type: '"medium" | "small"',
            description: 'Adjusts the size of the button',
            defaultValue: '"medium"'
        },
        {
            name: 'block',
            type: 'boolean',
            description: 'Sets the button width to 100% of the parent',
            defaultValue: '-',
            deprecated: true
        },
        {
            name: 'inverted',
            type: 'boolean',
            description: 'Adjust colors for display on a dark background',
            defaultValue: '-'
        }
    ];
    return <PropsTable props={props} />;
};
