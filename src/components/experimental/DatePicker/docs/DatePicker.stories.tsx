import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { getLocalTimeZone, today } from '@internationalized/date';
import { DatePicker } from '../DatePicker';

const meta: Meta = {
    title: 'Experimental/Components/DatePicker',
    component: DatePicker,
    parameters: {
        layout: 'centered'
    },
    args: {
        label: 'Pickup date'
    }
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

const TZ = getLocalTimeZone();
const TODAY = today(TZ);

export const Default: Story = {};

export const WithDefaultValue: Story = {
    args: {
        defaultValue: TODAY
    }
};

export const WithDescription: Story = {
    args: {
        description: 'Enter current date'
    }
};

export const WithValidation: Story = {
    args: {
        label: 'Only from today'
    },
    render: args => <DatePicker {...args} minValue={TODAY} />
};

export const Disabled: Story = {
    args: {
        isDisabled: true
    }
};

export const Invalid: Story = {
    args: {
        isInvalid: true,
        errorMessage: 'Error'
    }
};
