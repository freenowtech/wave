import React, { FC, useCallback } from 'react';
import { orderBy } from 'lodash';
import { Table, TableCell, TableSortableHeaderCell, TableRow } from '..';
import { Text } from '../..';
import { useSortBy } from '../hooks/useSortBy';

const data = [
    {
        id: 1,
        name: 'Zaha',
        emailAddress: 'zaha@example.com',
        role: 'Admin',
        costCenter: 'Design System'
    },
    {
        id: 2,
        name: 'Alex',
        emailAddress: 'alex@example.com',
        role: 'Booker',
        costCenter: 'Product'
    },
    {
        id: 3,
        name: 'Britta',
        emailAddress: 'britta@example.com',
        role: 'Passenger',
        costCenter: 'Customer'
    },
    {
        id: 4,
        name: 'Caio',
        emailAddress: 'caio@example.com',
        role: 'Admin',
        costCenter: 'Design System'
    }
];

export const SortableTableDefault: FC = () => {
    const { sortBy, setSortBy } = useSortBy('id');
    const handleSortingChange = useCallback(
        field => {
            setSortBy(field);
        },
        [setSortBy]
    );

    const direction = sortBy.direction?.toLowerCase() || 'asc';
    // @ts-expect-error Argument of type 'string' is not assignable to parameter of type 'Many<boolean | "asc" | "desc"> | undefined'.ts(2769)
    const sortedData = orderBy(data, sortBy.field, direction);

    return (
        <Table rowStyle="zebra" rowSize="small">
            <thead>
                <TableRow>
                    <TableSortableHeaderCell
                        field="id"
                        active={sortBy.field === 'id'}
                        direction={sortBy.direction}
                        onSortChange={handleSortingChange}
                    >
                        ID
                    </TableSortableHeaderCell>
                    <TableSortableHeaderCell
                        field="name"
                        active={sortBy.field === 'name'}
                        direction={sortBy.direction}
                        onSortChange={handleSortingChange}
                    >
                        Name
                    </TableSortableHeaderCell>
                    <TableSortableHeaderCell
                        field="emailAddress"
                        active={sortBy.field === 'emailAddress'}
                        direction={sortBy.direction}
                        onSortChange={handleSortingChange}
                    >
                        E-Mail
                    </TableSortableHeaderCell>
                    <TableSortableHeaderCell
                        field="role"
                        active={sortBy.field === 'role'}
                        direction={sortBy.direction}
                        onSortChange={handleSortingChange}
                    >
                        Role
                    </TableSortableHeaderCell>
                    <TableSortableHeaderCell
                        field="costCenter"
                        active={sortBy.field === 'costCenter'}
                        direction={sortBy.direction}
                        onSortChange={handleSortingChange}
                    >
                        Cost Center
                    </TableSortableHeaderCell>
                </TableRow>
            </thead>
            <tbody>
                {sortedData.map(entry => (
                    <TableRow key={entry.id}>
                        <TableCell>{entry.id}</TableCell>
                        <TableCell>
                            <Text fontWeight="semibold" fontSize={1}>
                                {entry.name}
                            </Text>
                        </TableCell>
                        <TableCell>{entry.emailAddress}</TableCell>
                        <TableCell>{entry.role}</TableCell>
                        <TableCell>{entry.costCenter}</TableCell>
                    </TableRow>
                ))}
            </tbody>
        </Table>
    );
};
