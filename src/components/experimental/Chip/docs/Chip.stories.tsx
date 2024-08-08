import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Chip } from '../Chip';
import PlusIcon from '../../../../icons/actions/PlusIcon';
import FilterIcon from '../../../../icons/actions/FilterIcon';

const meta: Meta = {
    title: 'Experimental/Components/Chip',
    component: Chip,
    argTypes: {
        icon: {
            description: 'Icon',
            control: 'select',
            options: ['filterIcon', 'plusIcon'],
            mapping: {
                filterIcon: FilterIcon,
                plusIcon: PlusIcon
            }
        }
    },
    args: {
        label: 'Add one item',
        icon: 'plusIcon'
    }
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const Default: Story = {};
