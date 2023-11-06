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
        children: <Button>Click me!</Button>,
        py: 2
    }
};

export const LightSchemeWithButton: Story = {
    args: {
        children: <Button>Click me!</Button>,
        py: 2
    },
    render: ({ children, ...props }) => <LightScheme {...props}>{children}</LightScheme>
};

export const InvertedColorSchemeWithButton: Story = {
    args: {
        children: <Text>The opposite scheme block</Text>,
        py: 2
    },
    render: ({ children, ...props }) => <InvertedColorScheme {...props}>{children}</InvertedColorScheme>
};
