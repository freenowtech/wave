import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Input } from '../../Input/Input';
import { HelperText } from '../HelperText';
import { Box } from '../../Box/Box';

const meta: Meta = {
    title: 'Components/HelperText',
    component: HelperText,
    args: {
        children: 'This field is required'
    },
    argTypes: {
        variant: {
            control: 'radio',
            options: ['info', 'danger']
        }
    }
};

export default meta;

type Story = StoryObj<typeof HelperText>;

export const Default: Story = {};

export const Danger: Story = {
    args: {
        variant: 'danger'
    }
};

export const AsInputClarification: Story = {
    render: () => (
        <Box p={2}>
            <Input placeholder="Enter something" />
            <HelperText mt="1">127 Characters left</HelperText>
        </Box>
    )
};

export const AsErrorDescription: Story = {
    render: () => (
        <Box p={2}>
            <Input label="Email" placeholder="who@free-now.com" error />
            <HelperText mt="1" variant="danger">
                Email is required
            </HelperText>
        </Box>
    )
};
