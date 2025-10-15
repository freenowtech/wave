import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { getLocalTimeZone, today } from '@internationalized/date';
import { DateField } from '../DateField';
import type { DateFieldProps } from '../DateField';
import CalendarTodayOutlineIcon from '../../../../icons/experimental/CalendarTodayOutlineIcon';
import DropdownSelectIcon from '../../../../icons/arrows/DropdownSelectIcon';

const meta: Meta<DateFieldProps> = {
    title: 'Experimental/Components/DateField',
    component: DateField as React.ComponentType<DateFieldProps>,
    parameters: { layout: 'centered' },
    decorators: [
        (Story: React.FC): JSX.Element => (
            <div style={{ width: '168px' }}>
                <Story />
            </div>
        )
    ],
    args: {
        label: 'Appointment date',
        variant: 'segments'
    }
};

export default meta;

type Story = StoryObj<DateFieldProps>;

const TODAY = today(getLocalTimeZone());

export const Default: Story = {};

export const WithDefaultValue: Story = {
    args: {
        defaultValue: TODAY
    }
};

export const WithDescription: Story = {
    args: {
        description: 'Enter current date'
    }
};

export const WithValidation: Story = {
    args: {
        label: 'Only from today',
        minValue: TODAY
    }
};

export const Disabled: Story = {
    args: {
        isDisabled: true
    }
};

export const Invalid: Story = {
    args: {
        isInvalid: true
    }
};

export const InvalidWithMessage: Story = {
    args: {
        description: 'Enter current date',
        isInvalid: true,
        errorMessage: 'Not a current date'
    }
};

export const WithLeadingIcon: Story = {
    args: {
        leadingIcon: <CalendarTodayOutlineIcon />
    }
};

export const WithActionIcon: Story = {
    args: {
        actionIcon: <DropdownSelectIcon onClick={action('Show dropdown')} />
    }
};

export const TextVariant: Story = {
    args: {
        variant: 'text',
        placeholder: 'dd / mm / yyyy',
        description: 'Free-typed date string'
    },
    render: (args: Extract<DateFieldProps, { variant: 'text' }>) => {
        const [val, setVal] = React.useState('');
        return <DateField {...args} value={val} onChange={setVal} actionIcon={<DropdownSelectIcon />} />;
    }
};

export const TextVariantAutoFocus: Story = {
    args: {
        variant: 'text',
        label: 'Auto-focused text date',
        placeholder: 'dd / mm / yyyy',
        description: 'This text field should receive focus on mount.',
        autoFocus: true
    },
    render: (args: Extract<DateFieldProps, { variant: 'text' }>) => {
        const [val, setVal] = React.useState('');
        return <DateField {...args} value={val} onChange={setVal} actionIcon={<DropdownSelectIcon />} />;
    }
};

export const SegmentsAutoFocus: Story = {
    args: {
        variant: 'segments',
        label: 'Auto-focused segmented date',
        defaultValue: TODAY,
        autoFocus: true
    }
};
