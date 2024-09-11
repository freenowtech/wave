import { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { Button } from '../Button';
import { TrashIcon } from '../../../../icons';

const meta: Meta = {
    title: 'Experimental/Components/Button',
    component: Button,
    parameters: {
        layout: 'centered'
    },
    args: {
        children: 'Book now'
    },
    argTypes: {
        children: {
            description: 'Button text'
        },
        emphasis: {
            control: 'radio',
            options: ['primary', 'secondary']
        },
        isDisabled: {
            control: 'boolean'
        },
        ref: {
            table: {
                disable: true
            }
        },
        theme: {
            table: {
                disable: true
            }
        },
        forwardedAs: {
            table: {
                disable: true
            }
        }
    }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Secondary: Story = {
    args: {
        emphasis: 'secondary'
    }
};

export const Disabled: Story = {
    args: {
        isDisabled: true
    }
};

export const WithIcon: Story = {
    args: {
        children: (
            <>
                <TrashIcon size={20} /> Remove
            </>
        )
    }
};
