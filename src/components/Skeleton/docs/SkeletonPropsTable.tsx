import * as React from 'react';
import { PropsTable } from '../../../docs/PropsTable';

export const SkeletonPropsTable = () => {
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
