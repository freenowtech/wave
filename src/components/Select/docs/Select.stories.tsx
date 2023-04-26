import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { Select } from '../Select';
import { onDarkBackground } from '../../../docs/parameters';

const meta: Meta = {
    title: 'Form Elements/Select',
    component: Select,
    argTypes: {
        children: {
            description: 'The options to be displayed in the select',
            control: false
        },
        size: {
            options: ['medium', 'small'],
            control: 'radio'
        },
        variant: {
            options: ['boxed', 'bottom-lined'],
            control: 'radio'
        }
    },
    args: {
        children: (
            <>
                <option>Scooter</option>
                <option>Ride (PHV)</option>
                <option>Taxi</option>
            </>
        )
    }
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {};

export const WithLabel: Story = {
    args: {
        label: 'Transportation'
    }
};

export const WithPlaceholder: Story = {
    args: {
        placeholder: 'Select a transportation',
        label: 'Transportation'
    }
};

export const BottomLined: Story = {
    args: {
        variant: 'bottom-lined'
    }
};

export const WithError: Story = {
    args: {
        error: true
    }
};

export const Small: Story = {
    args: {
        size: 'small'
    }
};

export const Inverted: Story = {
    args: {
        inverted: true
    },
    parameters: {
        ...onDarkBackground
    }
};
