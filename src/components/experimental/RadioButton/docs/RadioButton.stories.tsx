import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { RadioGroup } from 'react-aria-components';
import { RadioButton } from '../RadioButton';

const meta: Meta = {
    title: 'Experimental/Components/RadioButton',
    component: RadioButton,
    args: {
        children: 'Label'
    },
    decorators: [
        story => (
            <RadioGroup aria-label="Test" defaultValue="test">
                {story}
            </RadioGroup>
        )
    ]
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {};

export const Disabled: Story = {
    args: {
        isDisabled: true
    }
};

export const Selected: Story = {
    args: {
        value: 'test'
    }
};
