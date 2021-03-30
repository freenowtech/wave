import React from 'react';
import { Skeleton } from '../../Skeleton/Skeleton';
import { TableCell } from './TableCell';
import { TableRow } from './TableRow';

export interface TableRowSkeletonProps {
    columns: number;
    animated?: boolean;
}

export const TableRowSkeleton = ({ columns, animated }: TableRowSkeletonProps) => {
    return (
        <TableRow hover={false}>
            {Array(columns)
                .fill(0)
                .map((_, index) => (
                    <TableCell key={index}>
                        <Skeleton animated={animated} />
                    </TableCell>
                ))}
        </TableRow>
    );
};
