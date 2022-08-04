import { FC } from 'react';
import * as React from 'react';
import { PropsTable } from '../../../docs/PropsTable';

export const LinkPropsTable: FC = () => {
    const props = [
        {
            name: 'inverted',
            type: 'boolean',
            description: 'Adjust color for display on a dark background',
            defaultValue: 'false'
        }
    ];
    return <PropsTable props={props} />;
};
