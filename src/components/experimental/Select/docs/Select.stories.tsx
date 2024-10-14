import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { Select } from '../Select';
import { ListBoxItem } from '../../ListBox/ListBox';
import DogIcon from '../../../../icons/basic/DogIcon';

const meta: Meta = {
    title: 'Experimental/Components/Select',
    component: Select,
    parameters: {
        layout: 'centered'
    },
    decorators: [
        Story => (
            <div style={{ width: '291px' }}>
                <Story />
            </div>
        )
    ],
    args: {
        label: 'Animal',
        items: [
            { id: 1, name: 'Aardvark' },
            { id: 2, name: 'Cat' },
            { id: 3, name: 'Dog' },
            { id: 4, name: 'Kangaroo' },
            { id: 5, name: 'Koala' },
            { id: 6, name: 'Penguin' },
            { id: 7, name: 'Snake' },
            { id: 8, name: 'Turtle' },
            { id: 9, name: 'Wombat' }
        ],
        children: item => <ListBoxItem>{item.name}</ListBoxItem>
    }
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {};

export const WithIcon: Story = {
    args: {
        leadingIcon: <DogIcon />
    }
};

export const WithPlaceholder: Story = {
    args: {
        placeholder: 'Placeholder'
    }
};

export const WithDescription: Story = {
    args: {
        description: 'Select your favourite animal'
    }
};

export const Disabled: Story = {
    args: {
        isDisabled: true
    }
};

export const Invalid: Story = {
    args: {
        isInvalid: true,
        errorMessage: 'Error'
    }
};
