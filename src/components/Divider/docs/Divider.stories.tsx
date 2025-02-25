import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Divider } from '../Divider';
import { Box } from '../../Box/Box';
import { Text } from '../../Text/Text';

const meta: Meta = {
    title: 'Components/Divider',
    component: Divider,
    argTypes: {
        offset: {
            description: 'Set margins from surrounding content in css units or Space scale',
            control: {
                type: 'text'
            }
        }
    },
    decorators: [
        (Story: React.FC, context: { args: { vertical?: boolean } }): JSX.Element => (
            <Box display={context.args.vertical ? 'flex' : undefined}>
                <Text>One</Text>
                <Story />
                <Text>Two</Text>
            </Box>
        )
    ]
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {};

export const Vertical: Story = {
    args: { vertical: true }
};

export const WithoutOffset: Story = {
    args: { offset: 0 }
};
