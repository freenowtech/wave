import { I18nProvider } from 'react-aria-components';
import { getLocalTimeZone, today } from '@internationalized/date';
import { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { Calendar } from '../Calendar';

const meta: Meta = {
    title: 'Experimental/Components/Calendar',
    component: Calendar,
    parameters: {
        layout: 'centered'
    },
    decorators: [
        Story => (
            <I18nProvider locale="de-DE">
                <Story />
            </I18nProvider>
        )
    ],
    args: {
        'aria-label': 'Appointment date',
        defaultValue: today(getLocalTimeZone())
    }
};

export default meta;

type Story = StoryObj<typeof Calendar>;

export const Default: Story = {};

export const WithMinValue: Story = {
    args: {
        minValue: today(getLocalTimeZone())
    }
};
