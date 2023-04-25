import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from '../index';

const meta: Meta<typeof DatePicker> = {
    title: 'Form Elements/Date/DatePicker',
    component: DatePicker,
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
        }
    },
    args: {
        label: 'Date'
    }
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
    args: {},
    render: ({ minDate, maxDate, onChange, ...args }) => {
        const [value, setValue] = useState<Date>();

        return (
            <DatePicker
                {...args}
                value={value}
                minDate={minDate && new Date(minDate)}
                maxDate={maxDate && new Date(maxDate)}
                onChange={val => {
                    onChange?.(val);
                    setValue(val);
                }}
            />
        );
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
