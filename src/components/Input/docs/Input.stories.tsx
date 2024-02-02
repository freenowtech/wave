import { Meta, StoryObj } from '@storybook/react';
import { Input } from '../Input';

const meta: Meta<typeof Input> = {
    title: 'Form Elements/Input',
    component: Input,
    argTypes: {
        variant: {
            options: ['boxed', 'bottom-lined'],
            defaultValue: 'boxed',
            control: 'select'
        },
        size: {
            options: ['small', 'medium'],
            defaultValue: 'medium',
            control: 'select'
        }
    },
    args: {
        label: 'E-Mail Address',
        id: 'email'
    }
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const BottomLined: Story = {
    args: {
        variant: 'bottom-lined'
    }
};

export const WithLabelAndPlaceholder: Story = {
    args: {
        placeholder: 'user@free-now.com'
    }
};

export const Disabled: Story = {
    args: {
        disabled: true
    }
};

export const WithError: Story = {
    args: {
        label: 'Error',
        error: true
    }
};
