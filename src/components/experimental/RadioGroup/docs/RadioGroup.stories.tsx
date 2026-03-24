import React from 'react';
import { type Meta, type StoryObj } from '@storybook/react';
import { RadioGroup } from '../RadioGroup';
import { RadioButton } from '../../RadioButton/RadioButton';

const meta: Meta = {
    title: 'Experimental/Components/RadioGroup',
    component: RadioGroup,
    args: {
        children: [
            <RadioButton key="one" value="one">
                one
            </RadioButton>,
            <RadioButton key="two" value="two">
                two
            </RadioButton>,
            <RadioButton key="three" value="three">
                three
            </RadioButton>
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
