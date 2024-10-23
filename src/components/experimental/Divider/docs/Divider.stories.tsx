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
            <div style={{ width: '6rem', height: '6rem' }}>
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

export const Inset: Story = {
    decorators: [
        Story => (
            <div style={{ width: '6rem', height: '6rem' }}>
                <Text>One</Text>
                <Story />
                <Text>Two</Text>
            </div>
        )
    ],
    args: {
        vertical: false,
        variant: 'inset'
    }
};

export const MiddleInset: Story = {
    decorators: [
        Story => (
            <div style={{ width: '6rem', height: '6rem' }}>
                <Text>One</Text>
                <Story />
                <Text>Two</Text>
            </div>
        )
    ],
    args: {
        vertical: false,
        variant: 'middle-inset'
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
                    height: '6rem',
                    width: '6rem',
                    alignItems: 'center'
                }}
            >
                <Text>One</Text>
                <Story />
                <Text>Two</Text>
            </div>
        )
    ]
};

export const VerticalInset: Story = {
    decorators: [
        Story => (
            <div
                style={{
                    display: 'flex',
                    height: '6rem',
                    width: '6rem',
                    alignItems: 'center'
                }}
            >
                <Text>One</Text>
                <Story />
                <Text>Two</Text>
            </div>
        )
    ],
    args: {
        vertical: true,
        variant: 'inset'
    }
};

export const VerticalMiddleInset: Story = {
    decorators: [
        Story => (
            <div
                style={{
                    display: 'flex',
                    height: '6rem',
                    width: '6rem',
                    alignItems: 'center'
                }}
            >
                <Text>One</Text>
                <Story />
                <Text>Two</Text>
            </div>
        )
    ],
    args: {
        vertical: true,
        variant: 'middle-inset'
    }
};
