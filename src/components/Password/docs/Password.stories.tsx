import { Meta, StoryObj } from '@storybook/react';

import { Password } from '../Password';
import { onDarkBackground } from '../../../docs/parameters';

const meta: Meta = {
    title: 'Form Elements/Password',
    component: Password,
    argTypes: {
        variant: {
            options: ['boxed', 'bottom-lined'],
            defaultValue: 'boxed',
            control: 'radio'
        },
        size: {
            options: ['small', 'medium'],
            defaultValue: 'medium',
            control: 'radio'
        }
    },
    args: {
        label: 'Password'
    }
};

export default meta;

type Story = StoryObj<typeof Password>;

export const Default: Story = {
    args: {
        label: undefined
    }
};

export const WithLabel: Story = {};

export const WithPlaceholder: Story = {
    args: {
        placeholder: 'hello!'
    }
};

export const BottomLined: Story = {
    args: {
        variant: 'bottom-lined'
    }
};

export const Small: Story = {
    args: {
        size: 'small'
    }
};

export const WithError: Story = {
    args: {
        error: true
    }
};

export const Disabled: Story = {
    args: {
        disabled: true
    }
};

export const Inverted: Story = {
    args: {
        inverted: true
    },
    parameters: {
        ...onDarkBackground
    }
};

export const WithNewPasswordPurpose: Story = {
    args: {
        purpose: 'new-password'
    }
};
