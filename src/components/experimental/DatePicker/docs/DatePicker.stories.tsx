import React from 'react';
import type { DateRange as RdpRange } from 'react-day-picker';
import { getLocalTimeZone, today } from '@internationalized/date';
import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from '../DatePicker';
import type { DatePickerProps, SingleProps, MultipleProps, RangeProps, LegacyCompatProps } from '../DatePicker';

const meta = {
    title: 'Experimental/Components/DatePicker',
    component: DatePicker as unknown as React.ComponentType<DatePickerProps>,
    parameters: { layout: 'centered' },
    args: { label: 'Pickup date' }
} satisfies Meta<DatePickerProps>;

export default meta;

type SingleStory = StoryObj<SingleProps & LegacyCompatProps>;
type MultipleStory = StoryObj<MultipleProps & LegacyCompatProps>;
type RangeStory = StoryObj<RangeProps & LegacyCompatProps>;

const TZ = getLocalTimeZone();
const TODAY = today(TZ);

export const Default: SingleStory = { args: { mode: 'single' } };

export const WithDefaultValue: SingleStory = {
    args: { mode: 'single', defaultValue: TODAY }
};

export const WithDescription: SingleStory = {
    args: { mode: 'single', description: 'Enter current date' }
};

export const WithValidation: SingleStory = {
    args: { mode: 'single', label: 'Only from today' },
    render: args => <DatePicker {...args} minValue={TODAY} />
};

export const AutoFocus: SingleStory = {
    args: { mode: 'single', autoFocus: true, defaultValue: TODAY }
};

export const Disabled: SingleStory = {
    args: { mode: 'single', isDisabled: true }
};

export const Invalid: SingleStory = {
    args: { mode: 'single', isInvalid: true, errorMessage: 'Error' }
};

export const MultipleSelection: MultipleStory = {
    args: { mode: 'multiple', visibleMonths: 2 },
    render: args => {
        const [dates, setDates] = React.useState<Date[]>([]);
        return <DatePicker {...args} value={dates} onChange={setDates} />;
    }
};

export const RangeSelection: RangeStory = {
    args: { mode: 'range', visibleMonths: 2 },
    render: args => {
        const [range, setRange] = React.useState<RdpRange | undefined>();
        return <DatePicker {...args} value={range} onChange={setRange} />;
    }
};
