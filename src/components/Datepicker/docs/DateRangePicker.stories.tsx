import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { DateRangePicker } from '../index';

const meta: Meta = {
    title: 'Form Elements/Datepicker/DateRangePicker',
    component: DateRangePicker,
    argTypes: {
        firstDayOfWeek: {
            type: 'number',
            defaultValue: 1,
            control: {
                type: 'number',
                min: 1,
                max: 6
            }
        },
        displayFormat: {
            control: 'radio',
            options: ['dd/MM/yyyy', 'E, d MMM, y', 'do LLLL']
        },
        variant: {
            control: 'radio',
            options: ['normal', 'compact']
        }
    },
    args: {
        label: 'Rides between'
    }
};

export default meta;

type Story = StoryObj<typeof DateRangePicker>;

export const Default: Story = {
    render: ({ onChange, ...args }) => {
        const [range, setRange] = useState<{ startDate?: Date; endDate?: Date }>();

        return (
            <DateRangePicker
                {...args}
                value={range}
                onChange={newRange => {
                    onChange?.(newRange);
                    setRange(newRange);
                }}
            />
        );
    }
};

export const Compact: Story = {
    ...Default,
    args: {
        variant: 'compact'
    }
};

const TODAY = new Date();
const minDate = new Date();
minDate.setMonth(TODAY.getMonth() - 1);
const maxDate = new Date();
maxDate.setMonth(TODAY.getMonth() + 1);

export const WithRestrictedDays: Story = {
    ...Default,
    args: {
        minDate,
        maxDate
    }
};

export const WithDayAvailabilityFunction: Story = {
    ...Default,
    args: {
        isDateBlocked: date => date.getDate() % 2 === 0
    }
};

export const WithErrorHandler: Story = {
    ...Default,
    args: {
        errorHandler: 'The expected format is dd/MM/yyyy'
    }
};

export const Disabled: Story = {
    ...Default,
    args: {
        disabled: true
    }
};

export const WithManualPlacement: Story = {
    ...Default,
    args: {
        placement: 'center'
    }
};
