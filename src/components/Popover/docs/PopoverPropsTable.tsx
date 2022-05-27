import React, { FC } from 'react';
import { PropsTable } from '../../../docs/PropsTable';

export const PopoverPropsTable = (): FC => {
    const props = [
        {
            name: 'children',
            type: 'React.ReactNode',
            description: 'Popover Trigger (Only use Text, Link, Button or Icon component from @wave as a trigger)',
            defaultValue: ''
        },
        {
            name: 'content',
            type: 'React.ReactNode',
            description: 'Popover content (can be any valid React Element or component containing React Elements)',
            defaultValue: ''
        },
        {
            name: 'placement',
            type: [
                'auto',
                'auto-start',
                'auto-end',
                'top',
                'top-start',
                'top-end',
                'bottom',
                'bottom-start',
                'bottom-end',
                'left',
                'left-start',
                'left-end',
                'right',
                'right-start',
                'right-end'
            ],
            description:
                'Optional: Specify the Popover content placement (placement changes automatically, if Popover content cannot fit inside viewport with selected placement)',
            defaultValue: 'bottom-start'
        },
        {
            name: 'offset',
            type: 'number',
            description: 'Optional: Specify the Popover content offset (margin between Popover trigger and content)',
            defaultValue: 5
        },
        {
            name: 'isOpen',
            type: 'boolean',
            description: 'Optional: Keep popover content open by default',
            defaultValue: false
        },
        {
            name: 'onOpen',
            type: '() => void',
            description: 'Optional: Define a callback for when Popover content is opened',
            defaultValue: undefined
        },
        {
            name: 'onClose',
            type: '() => void',
            description: 'Optional: Define a callback for when Popover content is closed',
            defaultValue: undefined
        }
    ];
    return <PropsTable props={props} />;
};
