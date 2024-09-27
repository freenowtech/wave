import { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { Popover, PopoverTrigger } from '../Popover';
import { Chip } from '../../Chip/Chip';

const meta: Meta = {
    title: 'Experimental/Components/Popover',
    component: Popover,
    parameters: {
        layout: 'centered'
    },
    args: {
        label: 'Pickup date',
        locale: 'de-DE'
    }
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
    render: () => (
        <PopoverTrigger>
            <Chip>Click me</Chip>
            <Popover>Thank you!</Popover>
        </PopoverTrigger>
    )
};
