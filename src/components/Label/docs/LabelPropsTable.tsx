import { FC } from 'react';
import * as React from 'react';
import { PropsTable } from '../../../docs/PropsTable';

export const LabelPropsTable: FC = () => {
    const props = [
        {
            name: 'variant',
            type: '"default" | "info" | "success" | "warning" | "danger"',
            description: 'Set the appropriate colors for the component',
            defaultValue: '"default"'
        },
        {
            name: 'filled',
            type: 'boolean',
            description: 'Adds additional emphasis or highlight critical status'
        }
    ];
    return <PropsTable props={props} />;
};
