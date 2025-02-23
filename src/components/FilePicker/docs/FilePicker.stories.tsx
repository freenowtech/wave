import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { FilePicker } from '../FilePicker';
import { Box } from '../../Box/Box';

const meta: Meta = {
    title: 'Form Elements/FilePicker',
    component: FilePicker,
    argTypes: {
        capture: {
            options: ['user', 'environment'],
            control: 'select'
        }
    },
    args: {
        name: 'avatar',
        label: 'Picture of you',
        buttonText: 'Browse'
    }
};

export default meta;

type Story = StoryObj<typeof FilePicker>;

export const Default: Story = {};

export const WithBrowserButtonAlwaysVisible: Story = {
    args: {
        alwaysShowActionButton: true
    }
};

export const WithMultilineLabel: Story = {
    args: {
        label: 'A very long label which can stretch to more than one line without any issues'
    },
    decorators: [
        (Story: React.FC): JSX.Element => (
            <Box width="20rem">
                <Story />
            </Box>
        )
    ]
};

export const AcceptingOnlyImages: Story = {
    args: {
        accept: 'image/*'
    }
};
