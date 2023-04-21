import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../Checkbox';

const meta: Meta = {
    title: 'Form Elements/Checkbox',
    component: Checkbox,
    argTypes: {
        size: {
            control: 'radio',
            options: ['small', 'medium', 'large']
        },
        textVerticalAlign: {
            control: 'radio',
            options: ['center', 'top']
        }
    },
    args: {
        label: 'Accept T&C'
    }
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};

export const Selected: Story = {
    args: {
        defaultChecked: true
    }
};

export const Error: Story = {
    args: {
        label: 'With Error',
        error: true
    }
};

export const Disabled: Story = {
    args: {
        disabled: true
    }
};

export const Indeterminate: Story = {
    args: {
        indeterminate: true
    }
};

export const Size: Story = {
    args: {
        size: 'large'
    }
};
