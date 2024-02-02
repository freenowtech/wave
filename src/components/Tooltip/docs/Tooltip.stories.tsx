import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from '../Tooltip';

const meta: Meta = {
    title: 'Components/Tooltip',
    component: Tooltip,
    argTypes: {
        children: {
            description: 'Tooltip target. What must be hovered over to show the tooltip.',
            control: false
        }
    },
    args: {
        children: <span>Hover over me</span>,
        content: 'This is a regular tooltip 🏓'
    },
    decorators: [
        Story => (
            <div style={{ height: '100px', display: 'flex', alignItems: 'center' }}>
                <Story />
            </div>
        )
    ]
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {};

export const AlwaysVisible: Story = {
    args: {
        alwaysVisible: true
    }
};

export const WithCustomPosition: Story = {
    args: {
        placement: 'bottom-center'
    }
};
