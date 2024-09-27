import { StoryObj, Meta } from '@storybook/react';
import { getLocalTimeZone, today } from '@internationalized/date';
import { Calendar } from '../Calendar';

const TODAY = today(getLocalTimeZone());

const meta: Meta = {
    title: 'Experimental/Components/Calendar',
    component: Calendar,
    parameters: {
        layout: 'centered'
    },
    args: {
        'aria-label': 'Appointment date',
        defaultValue: TODAY
    }
};

export default meta;

type Story = StoryObj<typeof Calendar>;

export const Default: Story = {};

export const WithMinValue: Story = {
    args: {
        minValue: TODAY
    }
};
