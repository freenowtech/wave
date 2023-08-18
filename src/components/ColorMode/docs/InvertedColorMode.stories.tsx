import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../Button/Button';
import { InvertedColorMode } from '../InvertedColorMode';

const meta: Meta = {
    title: 'Components/ColorMode/InvertedColorMode',
    component: InvertedColorMode,
    args: {
        children: 'Anything'
    },
    argTypes: {
        children: {
            description: 'Button caption'
        }
    }
};

export default meta;

type Story = StoryObj<typeof InvertedColorMode>;

export const WithButton: Story = {
    args: {
        children: <Button>Test</Button>
    }
};
