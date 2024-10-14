import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { getLocalTimeZone, now, parseTime } from '@internationalized/date';
import { TimeField } from '../TimeField';
import ClockIcon from '../../../../icons/basic/ClockIcon';
import DropdownSelectIcon from '../../../../icons/arrows/DropdownSelectIcon';

const meta: Meta = {
    title: 'Experimental/Components/TimeField',
    component: TimeField,
    parameters: {
        layout: 'centered'
    },
    decorators: [
        Story => (
            <div style={{ width: '150px' }}>
                <Story />
            </div>
        )
    ],
    args: {
        label: 'Appointment time'
    }
};

export default meta;

type Story = StoryObj<typeof TimeField>;

export const Default: Story = {};

const NOW = now(getLocalTimeZone());

export const WithDefaultValue: Story = {
    args: {
        defaultValue: NOW
    }
};

export const WithPlaceholderValue: Story = {
    args: {
        description: 'I will start from 9:00',
        placeholderValue: parseTime('09:00')
    }
};

export const WithDescription: Story = {
    args: {
        description: 'Enter current time'
    }
};

export const WithValidation: Story = {
    args: {
        label: 'Only working hours'
    },
    render: args => <TimeField {...args} minValue={parseTime('09:00')} maxValue={parseTime('17:00')} />
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
        description: 'Enter current time',
        isInvalid: true,
        errorMessage: 'Not a current time'
    }
};

export const WithLeadingIcon: Story = {
    args: {
        leadingIcon: <ClockIcon />
    }
};

export const WithActionIcon: Story = {
    args: {
        actionIcon: <DropdownSelectIcon onClick={action('Show dropdown')} />
    }
};
