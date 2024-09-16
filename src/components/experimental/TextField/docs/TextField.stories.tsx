import { StoryObj, Meta } from '@storybook/react';
import { TextField } from '../TextField';

const meta: Meta = {
    title: 'Experimental/Components/TextField',
    component: TextField,
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
