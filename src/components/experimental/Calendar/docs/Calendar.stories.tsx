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
        defaultMonth: TODAY
    }
};

export default meta;

type Story = StoryObj<typeof Calendar>;

export const Default: Story = {};

export const WithMinValue: Story = {
    args: {
        disabled: [{ before: TODAY }]
    }
};

export const MultiMonth: Story = {
    args: {
        visibleMonths: 2
    }
};

export const RangeSelection: Story = {
    args: {
        selectionType: 'range',
        defaultMonth: TODAY
    }
};
