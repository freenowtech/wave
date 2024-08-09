import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { Text } from '../Text';
import { Box } from '../../../Box/Box';

const meta: Meta = {
    title: 'Experimental/Components/Text',
    component: Text,
    args: {
        children: 'When zombies arrive, quickly fax Judge Pat',
        variant: 'display'
    },
    argTypes: {
        children: {
            description: 'Text'
        },
        variant: {
            options: ['display', 'headline', 'title1', 'title2', 'body1', 'body2', 'label1', 'lable2'],
            control: 'select'
        }
    }
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {};

export const KitchenSink: Story = {
    render: () => (
        <Box display="flex" flexDirection="column" style={{ gap: '2rem' }}>
            <Box>
                <Text variant="label2" as="p">
                    display
                </Text>
                <Text variant="display" as="p">
                    When zombies arrive, quickly fax Judge Pat
                </Text>
            </Box>
            <Box>
                <Text variant="label2" as="p">
                    headline
                </Text>
                <Text variant="headline" as="p">
                    When zombies arrive, quickly fax Judge Pat
                </Text>
            </Box>
            <Box>
                <Text variant="label2" as="p">
                    title1
                </Text>
                <Text variant="title1" as="p">
                    When zombies arrive, quickly fax Judge Pat
                </Text>
            </Box>
            <Box>
                <Text variant="label2" as="p">
                    title2
                </Text>
                <Text variant="title2" as="p">
                    When zombies arrive, quickly fax Judge Pat
                </Text>
            </Box>
            <Box>
                <Text variant="label2" as="p">
                    body1
                </Text>
                <Text variant="body1" as="p">
                    When zombies arrive, quickly fax Judge Pat
                </Text>
            </Box>
            <Box>
                <Text variant="label2" as="p">
                    body2
                </Text>
                <Text variant="body2" as="p">
                    When zombies arrive, quickly fax Judge Pat
                </Text>
            </Box>
            <Box>
                <Text variant="label2" as="p">
                    label1
                </Text>
                <Text variant="label1" as="p">
                    When zombies arrive, quickly fax Judge Pat
                </Text>
            </Box>
            <Box>
                <Text variant="label2" as="p">
                    label2
                </Text>
                <Text variant="label2" as="p">
                    When zombies arrive, quickly fax Judge Pat
                </Text>
            </Box>
        </Box>
    )
};
