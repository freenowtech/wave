import { StoryObj, Meta } from '@storybook/react';
import { IconButton } from '../IconButton';
import { TrashIcon } from '../../../../icons';

const meta: Meta = {
    title: 'Experimental/Components/IconButton',
    component: IconButton,
    parameters: {
        layout: 'centered'
    },
    args: {
        Icon: TrashIcon,
        onPress: () => alert('Clicked!'),
        isDisabled: false,
        isLoading: false
    }
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {};

export const Disabled: Story = {
    args: {
        isDisabled: true
    }
};

export const Loading: Story = {
    args: {
        isLoading: true
    }
};

export const Active: Story = {
    args: {
        isActive: true
    }
};

export const Tonal: Story = {
    args: {
        variant: 'tonal'
    }
};

export const TonalActive: Story = {
    args: {
        variant: 'tonal',
        isActive: true
    }
};
