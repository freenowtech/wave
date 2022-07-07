import { FC } from 'react';
import * as React from 'react';
import { PropsTable } from '../../../docs/PropsTable';

export const ColumnPropsTable: FC = () => {
    const props = [
        {
            name: 'offset',
            type: '0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11',
            description: 'amount of vertical tracks that the column should be offset by',
            defaultValue: '0'
        },
        {
            name: 'span',
            type: '1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12',
            description: 'amount of vertical tracks that the column should span',
            defaultValue: '1'
        }
    ];
    return <PropsTable props={props} />;
};
