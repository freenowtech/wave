import { StoryObj, Meta } from '@storybook/react';
import { getLocalTimeZone, today } from '@internationalized/date';
import { DateValue } from 'react-aria-components';
import React, { useState } from 'react';
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

export const Default: Story = {
    render: ({ minValue, maxValue, ...args }) => {
        const [value, setValue] = useState<DateValue>(TODAY);

        return <DatePicker {...args} minValue={minValue} maxValue={maxValue} value={value} onChange={setValue} />;
    }
};
