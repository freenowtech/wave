import React from 'react';
import { type StoryObj, type Meta } from '@storybook/react-vite';
import { action } from 'storybook/actions';

import { Input } from '../Input';
import { EyeIcon } from '../../../../icons';
import { SearchIcon } from '../../../../icons/experimental';

const meta: Meta = {
    title: 'Experimental/Components/Input',
    component: Input,
    parameters: {
        layout: 'centered'
    },
    args: {
        placeholder: 'Placeholder'
    }
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const Disabled: Story = {
    args: {
        disabled: true
    }
};

export const WithLeadingIcon: Story = {
    args: {
        type: 'search',
        leadingIcon: <SearchIcon />
    }
};

export const WithActionIcon: Story = {
    args: {
        type: 'password',
        actionIcon: <EyeIcon onClick={action('Show password')} />
    }
};
