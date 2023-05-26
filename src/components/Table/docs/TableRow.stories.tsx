import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TableRow } from '../components/TableRow';
import { TableCell } from '../components/TableCell';
import { Checkbox } from '../../Checkbox/Checkbox';

const meta: Meta<typeof TableRow> = {
    title: 'Components/Table/TableRow',
    component: TableRow
};

export default meta;

type TableRowStory = StoryObj<typeof TableRow>;

export const Default: TableRowStory = {
    render: args => (
        <TableRow {...args}>
            <TableCell>
                <Checkbox />
            </TableCell>
            <TableCell>Alex Ponomarenko</TableCell>
            <TableCell>a.ponomarenko@mytaxi.com</TableCell>
            <TableCell>Booker</TableCell>
            <TableCell>Product</TableCell>
        </TableRow>
    )
};
