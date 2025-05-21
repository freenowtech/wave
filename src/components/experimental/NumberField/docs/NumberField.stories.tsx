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
    ],
    args: {
        label: 'Group size'
    }
};

export default meta;

type Story = StoryObj<typeof NumberField>;

export const Default: Story = {};

export const WithDefaultValue: Story = {
    args: {
        defaultValue: 5
    }
};

export const WithDescription: Story = {
    args: {
        description: 'Number of passengers'
    }
};

export const WithValidation: Story = {
    args: {
        label: 'Only positive'
    },
    render: args => <NumberField {...args} minValue={0} />
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
