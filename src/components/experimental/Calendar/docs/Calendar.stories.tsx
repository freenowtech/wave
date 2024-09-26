import { StoryObj, Meta } from '@storybook/react';
import { Calendar } from '../Calendar';

const TODAY = new Date();

const meta: Meta = {
    title: 'Experimental/Components/Calendar',
    component: Calendar,
    parameters: {
        layout: 'centered'
    },
    args: {
        'aria-label': 'Appointment date',
        defaultValue: TODAY,
        locale: 'en-GB'
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
