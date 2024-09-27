import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { getLocalTimeZone, today } from '@internationalized/date';
import { DateField } from '../DateField';
import CalendarTodayOutlineIcon from '../../../../icons/experimental/CalendarTodayOutlineIcon';
import DropdownSelectIcon from '../../../../icons/arrows/DropdownSelectIcon';

const meta: Meta = {
    title: 'Experimental/Components/DateField',
    component: DateField,
    args: {
        label: 'Appointment date'
    }
};

export default meta;

type Story = StoryObj<typeof DateField>;

export const Default: Story = {};

const TODAY = today(getLocalTimeZone());

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
    render: args => <DateField {...args} minValue={TODAY} />
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
        description: 'Enter current date',
        isInvalid: true,
        errorMessage: 'Not a current date'
    }
};

export const WithLeadingIcon: Story = {
    args: {
        leadingIcon: <CalendarTodayOutlineIcon />
    }
};

export const WithActionIcon: Story = {
    args: {
        actionIcon: <DropdownSelectIcon onClick={action('Show dropdown')} />
    }
};
