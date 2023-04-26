import { Meta, StoryObj } from '@storybook/react';

import { Textarea } from '../Textarea';
import { onDarkBackground } from '../../../docs/parameters';

const meta: Meta = {
    title: 'Components/Textarea',
    component: Textarea,
    argTypes: {
        variant: {
            table: {
                disable: true
            }
        },
        size: {
            table: {
                disable: true
            }
        }
    },
    args: {
        label: 'E-Mail Address'
    }
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
    args: {
        label: undefined
    }
};

export const WithLabel: Story = {};

export const WithPlaceholder: Story = {
    args: {
        placeholder: 'user@free-now.com'
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
