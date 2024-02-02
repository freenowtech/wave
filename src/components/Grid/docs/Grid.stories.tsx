import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { getSemanticValue } from '../../../utils/cssVariables';
import { Box } from '../../Box/Box';
import { Row, Column, RowProps } from '../Grid';

const meta: Meta = {
    title: 'Components/Grid System',
    component: Row
};

export default meta;

const Grid = ({ numberOfColumns = 12, ...props }: RowProps & { numberOfColumns: number }) => (
    <Row {...props}>
        {Array.from({ length: numberOfColumns }).map((_, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Column key={index}>
                <Box bg={getSemanticValue('background-surface-neutral-faded')} textAlign="center">
                    {1 + index}
                </Box>
            </Column>
        ))}
    </Row>
);

type Story = StoryObj<typeof Grid>;

export const Default: Story = {
    args: {
        numberOfColumns: 12
    },
    argTypes: {
        numberOfColumns: {
            type: { name: 'number' },
            description: 'Number of columns to render (demo only)',
            control: {
                type: 'number'
            }
        }
    },
    render: args => <Grid {...args} />
};
