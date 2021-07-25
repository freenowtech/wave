import { FC } from 'react';
import * as React from 'react';
import { PropsTable } from '../../../docs/PropsTable';

export const SkeletonPropsTable: FC = () => {
    const props = [
        {
            name: 'animated',
            type: 'boolean',
            description: 'Add shimmer animation to component',
            defaultValue: 'false'
        }
    ];
    return <PropsTable props={props} />;
};
