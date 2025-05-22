import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { NumberField } from '../NumberField';

const meta: Meta = {
    title: 'Experimental/Components/NumberField',
    component: NumberField,
    parameters: {
        layout: 'centered'
    },
    decorators: [
        (Story: React.FC): JSX.Element => (
            <div style={{ width: '148px' }}>
                <Story />
            </div>
        )
    ]
};

export default meta;

type Story = StoryObj<typeof NumberField>;

export const Default: Story = {};

export const WithDefaultValue: Story = {
    args: {
        label: 'Group size',
        defaultValue: 5
    }
};

export const WithDescription: Story = {
    args: {
        label: 'Group size',
        description: 'Number of passengers'
    }
};

export const WithLimits: Story = {
    args: {
        label: 'Only positive'
    },
    render: args => <NumberField {...args} defaultValue={0} minValue={0} />
};

export const Disabled: Story = {
    args: {
        isDisabled: true
    }
};

export const Invalid: Story = {
    args: {
        isInvalid: true
    }
};

export const InvalidWithMessage: Story = {
    args: {
        description: 'Only positive',
        isInvalid: true,
        value: -1,
        errorMessage: 'Not positive'
    }
};
