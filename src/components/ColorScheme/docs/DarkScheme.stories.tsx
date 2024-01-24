import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { DarkScheme, LightScheme } from '../EnforcedColorScheme';
import { Text } from '../../Text/Text';
import { Button } from '../../Button/Button';
import { InvertedColorScheme } from '../InvertedColorScheme';

const meta: Meta = {
    title: 'Essentials/Color Scheme',
    component: DarkScheme,
    subcomponents: { InvertedColorScheme, LightScheme },
    args: {
        children: 'Anything'
    },
    argTypes: {
        children: {
            control: false
        }
    }
};

export default meta;

type Story = StoryObj<typeof DarkScheme>;

export const DarkSchemeWithButton: Story = {
    args: {
        children: <Button>Always dark!</Button>,
        py: 2
    },
    render: ({ children, ...props }) => (
        <DarkScheme {...props} textAlign="center">
            {children}
        </DarkScheme>
    )
};

export const LightSchemeWithButton: Story = {
    args: {
        children: <Button>Always Light!</Button>,
        py: 2
    },
    render: ({ children, ...props }) => (
        <LightScheme {...props} textAlign="center">
            {children}
        </LightScheme>
    )
};

export const InvertedColorSchemeWithButton: Story = {
    args: {
        children: <Text>The opposite scheme block</Text>,
        py: 2
    },
    render: ({ children, ...props }) => (
        <InvertedColorScheme {...props} textAlign="center">
            {children}
        </InvertedColorScheme>
    )
};
