import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Card } from '../Card';
import { Button } from '../../Button/Button';

const meta: Meta = {
    title: 'Components/Card',
    component: Card,
    argTypes: {
        ref: { table: { disable: true } },
        forwardedAs: { table: { disable: true } },
        theme: { table: { disable: true } },
        as: { table: { disable: true } },
        children: { description: 'Defines the inner content of the card' },
        level: {
            options: [0, 100, 200, 300],
            control: 'radio'
        }
    },
    args: {
        children: 'Card Contents'
    }
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {};

export const WithLevel: Story = {
    args: {
        level: 300
    }
};

export const WithReactComponent = {
    args: {
        children: <Button>A button inside the `Card`</Button>
    }
};
