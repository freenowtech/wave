import { FC } from 'react';
import * as React from 'react';
import { PropsTable } from '../../../docs/PropsTable';

export const HelperTextPropsTable: FC = () => {
    const props = [
        {
            name: 'variant',
            type: '"info"| "danger"',
            description: 'Set the appropriate colors for component',
            defaultValue: '"info"'
        },
        {
            name: 'inverted',
            type: 'boolean',
            description: 'Adjust component for display on a dark background',
            defaultValue: 'false'
        }
    ];
    return <PropsTable props={props} />;
};
