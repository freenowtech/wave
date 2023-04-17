import React, { ChangeEvent, FC, useState } from 'react';
import { Table, TableCell, TableHeaderCell, TableRow, TableRowProps } from '..';
import { Box, Checkbox, Input, Text } from '../..';

const data = [
    {
        id: 1,
        name: 'Alex Ponomarenko',
        emailAddress: 'a.ponomarenko@mytaxi.com',
        role: 'Booker',
        costCenter: 'Product',
        customValue: 'E00193'
    },
    {
        id: 2,
        name: 'Britta Rothenhäuser',
        emailAddress: 'b.rothenhaeuser@mytaxi.com',
        role: 'Passenger',
        costCenter: '-',
        customValue: 'E19283'
    },
    {
        id: 3,
        name: 'Luka Hartwig',
        emailAddress: 'luka.hartwig@free-now.com',
        role: 'Admin',
        costCenter: 'Design System',
        customValue: 'Wave'
    },
    {
        id: 4,
        name: 'Jonah Möller ',
        emailAddress: 'j.moeller@mytaxi.com',
        role: 'Admin',
        costCenter: 'Design System',
        customValue: ''
    }
];

export const ActiveRowTable: FC = () => {
    const [selectedRows, setSelectedRows] = useState<number[]>([2]);

    const updateSelectedRows = id => (event: ChangeEvent<HTMLInputElement>) => {
        const { checked } = event.target;

        if (checked) {
            setSelectedRows(current => [...current, id]);
        } else {
            setSelectedRows(selectedRows.filter(it => it !== id));
        }
    };

    const allChecked = selectedRows.length === data.length;

    const handleCheckAll = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            setSelectedRows(data.map(it => it.id));
        } else {
            setSelectedRows([]);
        }
    };

    return (
        <Table rowStyle="lines" rowSize="small">
            <thead>
                <TableRow>
                    <TableHeaderCell>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <Checkbox onChange={handleCheckAll} checked={allChecked} />
                        </Box>
                    </TableHeaderCell>
                    <TableHeaderCell>Name</TableHeaderCell>
                    <TableHeaderCell>E-Mail</TableHeaderCell>
                    <TableHeaderCell>Role</TableHeaderCell>
                    <TableHeaderCell>Cost Center</TableHeaderCell>
                    <TableHeaderCell>Custom Value</TableHeaderCell>
                </TableRow>
            </thead>
            <tbody>
                {data.map(entry => (
                    <TableRow active={selectedRows.includes(entry.id)} key={entry.id}>
                        <TableCell>
                            <Box display="flex" alignItems="center" justifyContent="center">
                                <Checkbox
                                    onChange={updateSelectedRows(entry.id)}
                                    checked={selectedRows.includes(entry.id)}
                                />
                            </Box>
                        </TableCell>
                        <TableCell>
                            <Text fontWeight="semibold" fontSize={1}>
                                {entry.name}
                            </Text>
                        </TableCell>
                        <TableCell>{entry.emailAddress}</TableCell>
                        <TableCell>{entry.role}</TableCell>
                        <TableCell>{entry.costCenter}</TableCell>
                        <TableCell>
                            <Input placeholder="Enter value.." value={entry.customValue} size="small" />
                        </TableCell>
                    </TableRow>
                ))}
            </tbody>
        </Table>
    );
};
