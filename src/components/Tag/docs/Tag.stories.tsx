import { Meta, StoryObj } from '@storybook/react';
import { Tag } from '../Tag';

const meta: Meta = {
    title: 'Components/Tag',
    component: Tag,
    argTypes: {
        children: {
            description: 'Content of the tag'
        }
    },
    args: {
        children: 'Taxi'
    }
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {};

export const NotDismissible: Story = {
    args: {
        dismissible: false
    }
};
