import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Calendar, type Range, type SingleProps, type MultipleProps, type RangeProps } from '../Calendar';

const TODAY = new Date();

const meta = {
    title: 'Experimental/Components/Calendar',
    component: Calendar,
    parameters: { layout: 'centered' },
    args: { 'aria-label': 'Appointment date', defaultMonth: TODAY }
} satisfies Meta<typeof Calendar>;
export default meta;

type SingleStory = StoryObj<SingleProps>;
type MultipleStory = StoryObj<MultipleProps>;
type RangeStory = StoryObj<RangeProps>;

export const Default: SingleStory = {};

export const WithMinValue: SingleStory = {
    args: { disabled: [{ before: TODAY }] }
};

export const MultiMonth: SingleStory = {
    args: { visibleMonths: 2 }
};

export const SingleSelection: SingleStory = {
    args: { selectionType: 'single', defaultMonth: TODAY },
    render: (args: SingleProps) => {
        const [date, setDate] = React.useState<Date | undefined>();
        const handleSelect: SingleProps['onSelect'] = v => setDate(v);
        return <Calendar {...args} selectionType="single" selected={date} onSelect={handleSelect} />;
    }
};

export const MultipleSelection: MultipleStory = {
    args: { selectionType: 'multiple', defaultMonth: TODAY },
    render: (args: MultipleProps) => {
        const [dates, setDates] = React.useState<Date[]>([]);
        const handleSelect = (v?: Date[]) => setDates(v ?? []);
        return <Calendar {...args} selectionType="multiple" selected={dates} onSelect={handleSelect} />;
    }
};

export const RangeSelection: RangeStory = {
    args: { selectionType: 'range', defaultMonth: TODAY },
    render: (args: RangeProps) => {
        const [range, setRange] = React.useState<Range | undefined>();
        const handleSelect: RangeProps['onSelect'] = v => setRange(v);
        return <Calendar {...args} selectionType="range" selected={range} onSelect={handleSelect} />;
    }
};
