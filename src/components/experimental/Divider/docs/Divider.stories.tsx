import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { Divider } from '../Divider';
import { Text } from '../../Text/Text';

const meta: Meta = {
    title: 'Experimental/Components/Divider',
    component: Divider,
    parameters: {
        layout: 'centered'
    }
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {
    decorators: [
        Story => (
            <div style={{ height: '2rem' }}>
                <Text>One</Text>
                <Story />
                <Text>Two</Text>
            </div>
        )
    ],
    args: {
        vertical: false
    }
};

export const VerticalDivider: Story = {
    args: {
        vertical: true
    },
    decorators: [
        Story => (
            <div
                style={{
                    display: 'flex',
                    height: '32px',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'space-between'
                }}
            >
                <Text>One</Text>
                <Story />
                <Text>Two</Text>
            </div>
        )
    ]
};
