import React from 'react';
import { action } from '@storybook/addon-actions';
import { StoryObj, Meta } from '@storybook/react';
import { TextField } from '../TextField';
import { ClockIcon, EyeIcon, PersonFilledIcon } from '../../../../icons';

const meta: Meta = {
    title: 'Experimental/Components/TextField',
    component: TextField,
    parameters: {
        layout: 'centered'
    },
    decorators: [
        Story => (
            <div style={{ width: '590px' }}>
                <Story />
            </div>
        )
    ],
    args: {
        label: 'Passenger name'
    },
    argTypes: {
        label: {
            description: 'The label of the text field'
        },
        maxLength: {
            description: 'The maximum length of the text field (optional)',
            control: 'number'
        },
        isDisabled: {
            control: 'boolean'
        },
        isInvalid: {
            control: 'boolean'
        },
        type: {
            control: 'select',
            options: ['text', 'password', 'search', 'tel']
        }
    }
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {};

export const WithPlaceholder: Story = {
    args: {
        placeholder: 'Placeholder'
    }
};

export const WithDefaultValue: Story = {
    args: {
        defaultValue: 'Value'
    }
};

export const WithDescription: Story = {
    args: {
        description: 'Helper text'
    }
};

export const WithMaxLength: Story = {
    args: {
        maxLength: 999
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
        isInvalid: true,
        errorMessage: 'Error text'
    }
};

export const WithLeadingIcon: Story = {
    args: {
        leadingIcon: <PersonFilledIcon />
    }
};

export const WithActionIcon: Story = {
    args: {
        label: 'Password',
        type: 'password',
        actionIcon: <EyeIcon onClick={action('Show password')} />
    }
};

export const WithoutActionIcon: Story = {
    args: {
        label: 'Time',
        leadingIcon: <ClockIcon />,
        // eslint-disable-next-line unicorn/no-null
        actionIcon: null
    }
};

export const AsTextArea: Story = {
    args: {
        multiline: true,
        label: 'Leave us a comment'
    }
};
