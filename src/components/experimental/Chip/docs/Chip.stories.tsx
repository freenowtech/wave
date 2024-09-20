import type { Meta, StoryObj } from '@storybook/react';

import { Chip } from '../Chip';
import PlusIcon from '../../../../icons/actions/PlusIcon';
import FilterIcon from '../../../../icons/actions/FilterIcon';

const meta: Meta = {
    title: 'Experimental/Components/Chip',
    component: Chip,
    parameters: {
        layout: 'centered'
    },
    argTypes: {},
    args: {
        children: 'Add one item'
    }
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const Default: Story = {};

export const Active: Story = {
    args: {
        isActive: true
    }
};

export const Disabled: Story = {
    args: {
        isDisabled: true
    }
};
