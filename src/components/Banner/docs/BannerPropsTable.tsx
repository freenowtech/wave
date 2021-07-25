import { FC } from 'react';
import * as React from 'react';
import { PropsTable } from '../../../docs/PropsTable';

export const BannerPropsTable: FC = () => {
    const props = [
        {
            name: 'position',
            type: '"top" | "bottom"',
            description: 'Overrides the banner position.',
            defaultValue: '-'
        },
        {
            name: 'variant',
            type: '"info" | "success" | "danger"',
            description: 'Set the appropriate background color, screen position, and animation.',
            defaultValue: '-'
        },
        {
            name: 'onClose',
            type: '() => void',
            description:
                'A function that will be called after the user has dismissed the banner and the banner has disappeared.',
            defaultValue: '-'
        }
    ];
    return <PropsTable props={props} />;
};
