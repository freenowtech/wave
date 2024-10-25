import { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { IconButton } from '../IconButton';
import { TrashIcon } from '../../../../icons';

const meta: Meta = {
    title: 'Experimental/Components/IconButton',
    component: IconButton,
    parameters: {
        layout: 'centered'
    },
    args: {
        Icon: TrashIcon,
        onClick: () => alert('Clicked!')
    }
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {};

export const Disabled: Story = {
    args: {
        disabled: true
    }
};

export const Tonal: Story = {
    args: {
        variant: 'tonal'
    }
};
