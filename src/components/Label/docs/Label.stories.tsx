import { StoryObj, Meta } from '@storybook/react';
import { Label } from '../Label';

const meta: Meta = {
    title: 'Components/Label',
    component: Label,
    argTypes: {
        children: {
            description: 'Content of the label',
            table: {
                type: {
                    summary: 'string'
                }
            }
        },
        variant: {
            options: ['default', 'info', 'success', 'warning', 'danger'],
            defaultValue: 'default',
            control: 'select'
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
        as: {
            table: {
                disable: true
            }
        },
        forwardedAs: {
            table: {
                disable: true
            }
        },
        secondary: {
            table: {
                disable: true
            }
        },
        disabled: {
            table: {
                disable: true
            }
        },
        fontWeight: {
            table: {
                disable: true
            }
        },
        weak: {
            table: {
                disable: true
            }
        }
    },
    args: {
        children: 'music'
    }
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {};

export const Info: Story = {
    args: {
        variant: 'info',
        children: 'Info'
    }
};

export const Success: Story = {
    args: {
        variant: 'success',
        children: 'Passed'
    }
};

export const Warning: Story = {
    args: {
        variant: 'warning',
        children: 'Cautious'
    }
};

export const Danger: Story = {
    args: {
        variant: 'danger',
        children: 'Blocked'
    }
};

export const FilledColor: Story = {
    args: {
        filled: true
    }
};
