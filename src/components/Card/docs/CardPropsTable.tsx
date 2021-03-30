import * as React from 'react';
import { PropsTable } from '../../../docs/PropsTable';

export const CardPropsTable = () => {
    const props = [
        {
            name: 'level',
            type: '0 | 100 | 200 | 300',
            description: 'Set the visual depth of the card by adding a shadow',
            defaultValue: '0'
        }
    ];
    return <PropsTable props={props} />;
};
