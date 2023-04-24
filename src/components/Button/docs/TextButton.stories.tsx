import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { TextButton } from '../TextButton';

const meta: Meta = {
    title: 'Components/Button/TextButton',
    component: TextButton,
    args: {
        children: 'TextButton title'
    },
    argTypes: {
        children: {
            description: 'Button caption'
        },
        variant: {
            control: 'radio',
            options: ['default', 'danger']
        },
        size: {
            control: 'radio',
            options: ['small', 'medium']
        },
        as: {
            description: 'html tag to use',
            table: {
                control: 'text',
                defaultValue: {
                    summary: 'button'
                }
            }
        },
        ref: {
            table: {
                disable: true
            }
        },
        theme: {
            table: {
                disable: true
            }
        },
        forwardedAs: {
            table: {
                disable: true
            }
        }
    }
};

export default meta;

type Story = StoryObj<typeof TextButton>;

export const Default: Story = {};

export const Danger: Story = {
    args: {
        variant: 'danger'
    }
};

export const Disabled: Story = {
    args: {
        disabled: true
    }
};

export const Small: Story = {
    args: {
        size: 'small'
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
