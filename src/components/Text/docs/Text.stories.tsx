import { Meta, StoryObj } from '@storybook/react';
import { Text } from '../Text';
import { onDarkBackground } from '../../../docs/parameters';

const meta: Meta = {
    title: 'Components/Text',
    component: Text,
    argTypes: {
        children: {
            description: 'Content'
        },
        fontSize: {
            options: [0, 1, 2, 3, 4],
            defaultValue: 2,
            control: 'select',
            description: 'Font size of the text',
            table: {
                defaultValue: {
                    summary: 2
                }
            }
        },
        fontWeight: {
            control: 'radio',
            options: ['normal', 'semibold', 'bold']
        },
        as: {
            name: 'as',
            description: 'HTML tag to use',
            defaultValue: 'span',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'span' }
            },
            control: {
                type: 'text',
                value: 'span'
            }
        },
        forwardedAs: {
            table: {
                disable: true
            }
        },
        theme: {
            table: {
                disable: true
            }
        },
        ref: {
            table: {
                disable: true
            }
        },
    },
    args: {
        children: 'Sign up to FREENOW'
    }
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {};

export const Secondary: Story = {
    args: {
        secondary: true
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

export const Disabled: Story = {
    args: {
        disabled: true
    }
};

export const WithCustomHTMLTag: Story = {
    args: {
        children: 'Use paragraph tag',
        as: 'p'
    }
};

export const WithCustomFontStyles: Story = {
    args: {
        fontSize: 'small',
        fontWeight: 'semibold'
    }
};

export const ResponsiveFontSize: Story = {
    args: {
        children: 'Change the viewport',
        fontSize: [0, 'medium', 'large']
    }
};
