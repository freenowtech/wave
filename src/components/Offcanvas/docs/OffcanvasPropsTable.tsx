import { FC } from 'react';
import * as React from 'react';
import { PropsTable } from '../../../docs/PropsTable';

export const OffcanvasPropsTable: FC = () => {
    const props = [
        {
            name: 'side',
            type: '"left" | "right"',
            description: 'Show the Offcanvas on the side of the page: left or right.',
            defaultValue: '-'
        },
        {
            name: 'dismissible',
            type: 'boolean',
            description: 'Makes the Offcanvas dismissible by the user.',
            defaultValue: 'true'
        },
        {
            name: 'onClose',
            type: '() => void',
            description:
                'A function that will be called after the user has dismissed the Offcanvas and the Offcanvas has disappeared.',
            defaultValue: '-'
        }
    ];
    return <PropsTable props={props} />;
};
