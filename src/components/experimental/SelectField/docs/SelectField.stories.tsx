import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { SelectField } from '../SelectField';
import { CalendarIcon } from '../../../../icons';

const meta: Meta = {
    title: 'Experimental/Components/SelectField',
    component: SelectField,
    parameters: {
        layout: 'centered'
    },
    args: {
        label: 'Label'
    }
};

export default meta;

type Story = StoryObj<typeof SelectField>;

export const Default: Story = {
    render: args => {
        const [isOpen, setIsOpen] = React.useState(false);

        return <SelectField {...args} isOpen={isOpen} onToggle={() => setIsOpen(v => !v)} />;
    }
};

export const WithIcon: Story = {
    args: {
        label: 'Date',
        leadingIcon: <CalendarIcon />
    }
};
