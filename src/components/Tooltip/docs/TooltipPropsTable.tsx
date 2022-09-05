import React, { ReactElement } from 'react';
import { PropsTable } from '../../../docs/PropsTable';

export const TooltipPropsTable = (): ReactElement => {
    const props = [
        {
            name: 'content',
            type: 'React.ReactNode | string',
            description: 'The content that will be shown inside of the tooltip body',
            defaultValue: '-'
        },
        {
            name: 'placement',
            type:
                '"top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end" | "top" | "bottom" | "right" | "left" | "auto" | "auto-start" | "auto-end"',
            description: 'Set the position of where the tooltip is attached to the target',
            defaultValue: 'top'
        },
        {
            name: 'inverted',
            type: 'boolean',
            description: 'Adjust color for display on a dark background',
            defaultValue: 'false'
        },
        {
            name: 'alwaysVisible',
            type: 'boolean',
            description: 'Force the tooltip to always be visible, regardless of user interaction',
            defaultValue: 'false'
        }
    ];
    return <PropsTable props={props} />;
};
