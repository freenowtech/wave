import { FC } from 'react';
import * as React from 'react';
import { PropsTable } from '../../../docs/PropsTable';

export const InlineSpinnerPropsTable: FC = () => {
    const props = [
        {
            name: 'size',
            type: '"small" | "medium"',
            description: 'Set the size of the component',
            defaultValue: '"medium"'
        },
        {
            name: 'color',
            type: 'Color | string',
            description: 'Override the color of the spinning circle',
            defaultValue: '-'
        }
    ];
    return <PropsTable props={props} />;
};
