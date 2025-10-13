import React from 'react';
import type { DateRange as RdpRange } from 'react-day-picker';
import { getLocalTimeZone, today } from '@internationalized/date';
import { Meta, StoryObj } from '@storybook/react';
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

export const MultipleSelection: Story = {
    render: args => {
        const [dates, setDates] = React.useState<Date[]>([]);
        return <DatePicker {...args} mode="multiple" visibleMonths={2} value={dates} onChange={setDates} />;
    }
};

export const RangeSelection: Story = {
    render: args => {
        const [range, setRange] = React.useState<RdpRange | undefined>(undefined);
        return <DatePicker {...args} mode="range" visibleMonths={2} value={range} onChange={setRange} />;
    }
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
