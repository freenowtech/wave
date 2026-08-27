import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { getLocalTimeZone, now, parseTime } from '@internationalized/date';
import { TimeField, TimeFieldProps } from '../TimeField';
import ClockIcon from '../../../../icons/basic/ClockIcon';
import DropdownSelectIcon from '../../../../icons/arrows/DropdownSelectIcon';

const meta: Meta = {
    title: 'Experimental/Components/TimeField',
    component: TimeField,
    parameters: {
        layout: 'centered'
    },
    decorators: [
        (Story: React.FC): JSX.Element => (
            <div style={{ width: '150px' }}>
                <Story />
            </div>
        )
    ]
};

export default meta;

type Story = StoryObj<typeof TimeField>;

export const Default: Story = {};

const NOW = now(getLocalTimeZone());

export const WithDefaultValue: Story = {
    args: {
        label: 'Appointment time',
        defaultValue: NOW
    }
};

export const WithPlaceholderValue: Story = {
    args: {
        label: 'Appointment time',
        description: 'I will start from 9:00',
        placeholderValue: parseTime('09:00')
    }
};

export const WithDescription: Story = {
    args: {
        description: 'Enter current time'
    }
};

export const WithValidation: Story = {
    args: {
        label: 'Only working hours'
    },
    render: args => <TimeField {...args} minValue={parseTime('09:00')} maxValue={parseTime('17:00')} />
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
        description: 'Enter current time',
        isInvalid: true,
        errorMessage: 'Not a current time'
    }
};

export const WithLeadingIcon: Story = {
    args: {
        leadingIcon: <ClockIcon />
    }
};

export const WithActionIcon: Story = {
    args: {
        actionIcon: <DropdownSelectIcon onClick={action('Show dropdown')} />
    }
};

const resetThresholdArgType = {
    name: 'resetThresholdMinutes',
    description: 'On blur, if the edited time is within this many minutes of "now" the field resets to its empty state',
    control: { type: 'number', min: 0, max: 60 }
} as const;

const getValueOnBlurArgType = {
    table: { disable: true }
} as const;

const renderWithResetThreshold = (args: TimeFieldProps & { resetThresholdMinutes?: number }): JSX.Element => {
    const { resetThresholdMinutes = 1, ...rest } = args;
    return (
        <TimeField
            {...rest}
            getValueOnBlur={value => {
                action('getValueOnBlur')(value.toString());
                const current = now(getLocalTimeZone());
                const minutesApart = Math.abs(value.hour * 60 + value.minute - (current.hour * 60 + current.minute));
                return minutesApart <= resetThresholdMinutes ? null : value;
            }}
        />
    );
};

export const WithEmptyStateDefaultingToNow = {
    args: {
        label: 'Appointment time',
        emptyStateLabel: 'Now',
        resetThresholdMinutes: 1
    },
    argTypes: {
        resetThresholdMinutes: resetThresholdArgType,
        getValueOnBlur: getValueOnBlurArgType
    },
    render: renderWithResetThreshold
};

export const WithEmptyStateAndLeadingIcon = {
    args: {
        label: 'Appointment time',
        emptyStateLabel: 'Now',
        leadingIcon: <ClockIcon />,
        resetThresholdMinutes: 1
    },
    argTypes: {
        resetThresholdMinutes: resetThresholdArgType,
        getValueOnBlur: getValueOnBlurArgType
    },
    render: renderWithResetThreshold
};
