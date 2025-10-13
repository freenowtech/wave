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
    render: args => {
        const [date, setDate] = React.useState<Date | undefined>();
        return <Calendar {...args} selected={date} onSelect={(v?: Date) => setDate(v)} />;
    }
};

export const MultipleSelection: MultipleStory = {
    args: { selectionType: 'multiple', defaultMonth: TODAY },
    render: args => {
        const [dates, setDates] = React.useState<Date[]>([]);
        return <Calendar {...args} selected={dates} onSelect={(v?: Date[]) => setDates(v ?? [])} />;
    }
};

export const RangeSelection: RangeStory = {
    args: { selectionType: 'range', defaultMonth: TODAY },
    render: args => {
        const [range, setRange] = React.useState<Range | undefined>();
        return <Calendar {...args} selected={range} onSelect={(v?: Range) => setRange(v)} />;
    }
};

export const MultipleSelection: Story = {
    args: {
        selectionType: 'multiple',
        defaultMonth: TODAY
    }
};
