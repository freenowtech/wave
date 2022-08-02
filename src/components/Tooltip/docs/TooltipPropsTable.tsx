import React, { FC } from 'react';

import { PropsTable } from '../../../docs/PropsTable';

export const TooltipPropsTable: FC = () => {
    const props = [
        {
            name: 'content',
            type: 'React.ReactNode',
            description: 'The content that will be shown inside of the tooltip body.'
        },
        {
            name: 'placement',
            type: 'TooltipPlacement (see the Placement section below for values)',
            description: 'Set the position of where the tooltip is attached to the target.',
            defaultValue: 'top-center'
        },
        {
            name: 'inverted',
            type: 'boolean',
            description: 'Adjust the component for display on dark backgrounds.'
        },
        {
            name: 'alwaysVisible',
            type: 'boolean',
            description: 'Force the tooltip to always be visible, regardless of user interaction.'
        }
    ];
    return <PropsTable props={props} />;
};
