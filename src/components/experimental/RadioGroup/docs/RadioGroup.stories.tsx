import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { RadioGroup } from '../RadioGroup';
import { RadioButton } from '../../RadioButton/RadioButton';

const meta: Meta = {
    title: 'Experimental/Components/RadioGroup',
    component: RadioGroup,
    args: {
        children: [
            <RadioButton value="one">one</RadioButton>,
            <RadioButton value="two">two</RadioButton>,
            <RadioButton value="three">three</RadioButton>
        ],
        label: 'Example',
        defaultValue: 'one'
    }
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {};

export const Horizontal: Story = {
    args: {
        orientation: 'horizontal'
    }
};

export const Invalid: Story = {
    args: {
        isInvalid: true
    }
};
