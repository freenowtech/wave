import { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { Button } from '../Button';
import TrashIcon from '../../../../icons/actions/TrashIcon';

const meta: Meta = {
    title: 'Experimental/Components/Button',
    component: Button,
    args: {
        children: 'Book now'
    },
    argTypes: {
        children: {
            description: 'Button caption'
        },
        variant: {
            control: 'radio',
            options: ['primary', 'secondary']
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
