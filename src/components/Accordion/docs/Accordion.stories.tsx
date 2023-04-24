import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { Accordion } from '../Accordion';

const meta: Meta<typeof Accordion> = {
    title: 'Components/Accordion',
    component: Accordion,
    args: {
        heading: 'Driver Comments',
        children: 'This is a very long text we need to hide',
        description: 'Comments about the driver left by passengers'
    },
    argTypes: {
        children: {
            description: 'Accordion content'
        },
        variant: {
            options: ['default', 'compact'],
            control: { type: 'radio' }
        }
    }
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
    args: {
        info: '99+ comments',
        buttonLabel: 'Expand/Collapse'
    }
};

export const Compact: Story = {
    args: {
        variant: 'compact'
    }
};
