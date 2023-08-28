import { Meta, StoryObj } from '@storybook/react';
import { SelectList } from '../SelectList';

const meta: Meta = {
    title: 'Form Elements/SelectList',
    component: SelectList,
    argTypes: {
        variant: {
            options: ['boxed', 'bottom-lined'],
            defaultValue: 'boxed',
            control: 'radio'
        },
        size: {
            options: ['small', 'medium'],
            defaultValue: 'medium',
            control: 'radio'
        },
        menuPortalTarget: {
            description: 'The element to append the menu to',
            control: false
        },
        options: {
            description: 'Options to display in the select list'
        }
    },
    args: {
        id: 'select-list',
        menuPortalTarget: document.body,
        options: [
            {
                label: 'Barcelona',
                value: 'bcn'
            },
            {
                label: 'Hamburg',
                value: 'ham'
            },
            {
                label: 'Paris',
                value: 'par',
                isDisabled: true
            }
        ]
    }
};

export default meta;

type Story = StoryObj<typeof SelectList>;

export const Default: Story = {};

export const WithLabel: Story = {
    args: {
        label: 'City'
    }
};

export const MultiSelect: Story = {
    args: {
        isMulti: true
    }
};

export const BottomLined: Story = {
    args: {
        variant: 'bottom-lined'
    }
};

export const WithError: Story = {
    args: {
        error: true
    }
};
