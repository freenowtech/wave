import { Meta, StoryObj } from '@storybook/react';
import { Logo } from '../Logo';

const meta: Meta<typeof Logo> = {
    title: 'Components/Logo',
    component: Logo,
    argTypes: {
        variant: {
            control: 'radio',
            options: ['default', 'business'],
            defaultValue: 'default'
        }
    }
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {};

export const Business: Story = {
    args: {
        variant: 'business'
    }
};

export const Monochrome: Story = {
    args: {
        monochrome: true
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
