import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ColorMode, Inverted } from '../ColorMode';
import { Button } from '../../Button/Button';

const meta: Meta = {
    title: 'Components/ColorMode/ColorMode',
    component: ColorMode,
    args: {
        children: 'Anything'
    },
    argTypes: {
        children: {
            description: 'Button caption'
        },
        dark: {
            control: 'radio',
            options: [true, false]
        }
    }
};

export default meta;

type Story = StoryObj<typeof ColorMode>;

export const DarkModeWithButton: Story = {
    args: {
        children: <Button>Test</Button>,
        dark: true
    }
};

export const LightModeWithButton: Story = {
    args: {
        children: <Button>Test</Button>,
        dark: false
    }
};
