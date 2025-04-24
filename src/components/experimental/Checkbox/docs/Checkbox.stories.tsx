import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../Checkbox';

const meta: Meta = {
    title: 'Experimental/Components/Checkbox',
    component: Checkbox,
    argTypes: {
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

export const Default: Story = {
    args: {
        label: undefined
    }
};

export const Selected: Story = {
    args: {
        defaultSelected: true
    }
};

export const Error: Story = {
    args: {
        label: 'With Error',
        isInvalid: true
    }
};

export const Disabled: Story = {
    args: {
        isDisabled: true
    }
};

export const DisabledChecked: Story = {
    args: {
        isDisabled: true,
        defaultSelected: true
    }
};

export const DisabledIndeterminate: Story = {
    args: {
        isDisabled: true,
        isIndeterminate: true,
        defaultSelected: true,
        label: 'Disabled indeterminate checkbox'
    }
};

export const Indeterminate: Story = {
    args: {
        isIndeterminate: true
    }
};

export const InvalidSelected: Story = {
    args: {
        isInvalid: true,
        defaultSelected: true,
        label: 'Invalid selected checkbox'
    }
};
