import { FC } from 'react';
import * as React from 'react';
import { PropsTable } from '../../../docs/PropsTable';

export const DismissableTagPropsTable: FC = () => {
    const props = [
        {
            name: 'dismissible',
            type: 'boolean',
            description: 'Determins whether the dismiss functionality is enabled',
            defaultValue: ''
        },
        {
            name: 'onDismiss',
            type: '() => void',
            description: 'The function to handle when the dismiss icon is clicked',
            defaultValue: '-'
        }
    ];
    return <PropsTable props={props} />;
};
