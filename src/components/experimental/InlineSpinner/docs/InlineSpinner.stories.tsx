import { Meta, StoryObj } from '@storybook/react';
import { InlineSpinner } from '../InlineSpinner';

const meta: Meta = {
    title: 'Experimental/Components/InlineSpinner',
    component: InlineSpinner,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        size: {
            control: 'radio',
            options: ['large', 'medium', 'small']
        }
    }
};

export default meta;

type Story = StoryObj<typeof InlineSpinner>;

export const Default: Story = {};
