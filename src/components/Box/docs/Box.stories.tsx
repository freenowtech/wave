import { Meta, StoryObj } from '@storybook/react';
import { Box } from '../Box';

const meta: Meta = {
    title: 'Components/Box',
    component: Box
};

export default meta;

type Story = StoryObj<typeof Box>;

export const Default: Story = {
    args: {
        children: 'By default it is a block `div` element'
    }
};

export const Inline: Story = {
    args: {
        as: 'span',
        children: 'I can be inline when `as` prop is used'
    }
};

export const Responsive: Story = {
    args: {
        children: 'I can be responsive',
        bg: '#FF9CFC',
        width: [1, 1, 1 / 2]
    }
};
