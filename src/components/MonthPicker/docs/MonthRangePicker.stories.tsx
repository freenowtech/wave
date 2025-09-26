import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { MonthRangePicker } from '../index';

export default {
    title: 'Form Elements/MonthPicker/MonthRangePicker',
    component: MonthRangePicker,
    argTypes: {
        label: { control: 'text' },
        placeholder: { control: 'text' },
        disabled: { control: 'boolean' },
        minMonth: { control: 'date' },
        maxMonth: { control: 'date' }
    },
    parameters: {
        layout: 'centered'
    }
} as Meta;

type Story = StoryObj<typeof MonthRangePicker>;

export const Default: Story = {
    render: ({ onRangeSelect, ...args }) => {
        const [range, setRange] = useState<{ start: Date | null; end: Date | null }>();

        return (
            <MonthRangePicker
                label="Select Month Range"
                {...args}
                value={range}
                onRangeSelect={(start, end) => {
                    onRangeSelect?.(start, end);
                    setRange({ start, end });
                }}
            />
        );
    }
};

export const MonthRangePickerWithMinMax: Story = {
    ...Default,
    args: {
        label: 'Select Month Range (Mar-Nov 2025)',
        minMonth: new Date('2025-03-01'),
        maxMonth: new Date('2025-11-01')
    }
};

export const Disabled: Story = {
    ...Default,
    args: {
        disabled: true
    }
};

const TODAY = new Date();
const minDate = new Date();
minDate.setMonth(TODAY.getMonth() - 1);
const maxDate = new Date();
maxDate.setMonth(TODAY.getMonth() + 1);
