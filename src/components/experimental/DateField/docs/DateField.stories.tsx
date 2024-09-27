import { StoryObj, Meta } from '@storybook/react';
import { DateField } from '../DateField';

const meta: Meta = {
    title: 'Experimental/Components/DateField',
    component: DateField,
    args: {
        label: 'Appointment date'
    }
};

export default meta;

type Story = StoryObj<typeof DateField>;

export const Default: Story = {};
