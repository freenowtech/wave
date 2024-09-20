import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Chip } from '../Chip';
import { PlusIcon, XCrossCircleIcon } from '../../../../icons';
import { getSemanticValue } from '../../../../essentials/experimental/cssVariables';

const meta: Meta = {
    title: 'Experimental/Components/Chip',
    component: Chip,
    parameters: {
        layout: 'centered'
    },
    argTypes: {},
    args: {
        children: 'Label'
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

export const WithIcons: Story = {
    args: {
        children: (
            <>
                <PlusIcon size={20} />
                Add one item
                <XCrossCircleIcon
                    size={20}
                    color={getSemanticValue('on-surface-variant')}
                    onClick={action('Remove chip')}
                />
            </>
        )
    }
};
