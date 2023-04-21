import { Meta, StoryObj } from '@storybook/react';
import { HelperText } from '../HelperText';

const meta: Meta = {
    title: 'Components/HelperText',
    component: HelperText,
    args: {
        children: 'This field is required'
    },
    argTypes: {
        variant: {
            control: 'radio',
            options: ['info', 'danger']
        }
    }
};

export default meta;

type Story = StoryObj<typeof HelperText>;

export const Default: Story = {};

export const Danger: Story = {
    args: {
        variant: 'danger'
    }
};

export const Inverted: Story = {
    args: {
        inverted: true
    },
    parameters: {
        backgrounds: {
            default: 'dark'
        }
    }
};
