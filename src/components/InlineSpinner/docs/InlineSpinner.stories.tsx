import { Meta, StoryObj } from '@storybook/react';
import { InlineSpinner } from '../InlineSpinner';

const meta: Meta = {
    title: 'Components/InlineSpinner',
    component: InlineSpinner,
    argTypes: {
        size: {
            control: 'radio',
            options: ['medium', 'small']
        }
    }
};

export default meta;

type Story = StoryObj<typeof InlineSpinner>;

export const Default: Story = {};

export const Small: Story = {
    args: {
        size: 'small'
    }
};
