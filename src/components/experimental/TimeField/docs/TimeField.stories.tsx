import { StoryObj, Meta } from '@storybook/react';
import { TimeField } from '../TimeField';

const meta: Meta = {
    title: 'Experimental/Components/TimeField',
    component: TimeField,
    args: {
        label: 'Appointment time'
    }
};

export default meta;

type Story = StoryObj<typeof TimeField>;

export const Default: Story = {};
