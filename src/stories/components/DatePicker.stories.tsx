import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DatePicker } from '../..';

export default {
    title: 'Components/Datepicker',
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
        }
    }
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = args => <DatePicker {...args} />;

export const SingleDatePicker = Template.bind({});
SingleDatePicker.args = {
    placeholder: 'Date'
};
