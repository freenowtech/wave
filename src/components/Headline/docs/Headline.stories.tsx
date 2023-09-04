import { Meta, StoryObj } from '@storybook/react';
import { DEFAULT_HEADLINE_SIZE, Headline } from '../Headline';

const meta: Meta = {
    title: 'Components/Headline',
    component: Headline,
    args: {
        children: "The dos and don'ts of eating sushi"
    },
    argTypes: {
        size: {
            table: {
                defaultValue: {
                    summary: 'depends on the heading level',
                    detail: Object.entries(DEFAULT_HEADLINE_SIZE)
                        .map(([tag, size]) => `${tag} → ${size}`)
                        .join('\n')
                }
            },
            control: 'select',
            options: ['xxl', 'xl', 'l', 'm', 's', 'xs']
        }
    }
};

export default meta;

type Story = StoryObj<typeof Headline>;

export const Default: Story = {};

export const WithAnotherLevel: Story = {
    args: {
        as: 'h3'
    }
};

export const WithAnotherSize: Story = {
    args: {
        size: 's'
    }
};

export const Responsive: Story = {
    args: {
        children: 'Change the viewport size',
        size: ['s', 'xl']
    }
};
