import React, { FC } from 'react';
import { Skeleton } from '../../Skeleton/Skeleton';
import { TableCell } from './TableCell';
import { TableRow } from './TableRow';

export interface TableRowSkeletonProps {
    /**
     * Number of columns to simulate
     * @default 0
     */
    columns: number;
    /**
     * Play the Skeleton animation
     * @default false
     */
    animated?: boolean;
}

export const TableRowSkeleton: FC<TableRowSkeletonProps> = ({ columns, animated }: TableRowSkeletonProps) => (
    <TableRow hover={false}>
        {Array.from({ length: columns })
            .fill(0)
            .map((_, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <TableCell key={index}>
                    <Skeleton aria-label="table-row-skeleton" aria-hidden animated={animated} />
                </TableCell>
            ))}
    </TableRow>
);
