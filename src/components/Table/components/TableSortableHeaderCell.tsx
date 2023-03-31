import React, { FC } from 'react';
import styled from 'styled-components';
import { Box } from '../../Box/Box';
import { SortingIndicator } from './SortingIndicator';
import { TableHeaderCell, TableHeaderCellProps } from './TableHeaderCell';
import type { SortingDirection } from '../types';

const TableHeaderCellWithPointer = styled(TableHeaderCell)`
    cursor: pointer;
    user-select: none;
`;

type TableSortableHeaderCellProps = TableHeaderCellProps & {
    active: boolean;
    field: string;
    direction: SortingDirection;
    onSortChange: (field: string, direction: string) => void;
};

const TableSortableHeaderCell: FC<TableSortableHeaderCellProps> = ({
    active,
    direction,
    children,
    field,
    onSortChange,
    ...rest
}: TableSortableHeaderCellProps) => (
    <TableHeaderCellWithPointer
        onClick={() => onSortChange(field, direction)}
        aria-sort={active ? (direction === 'ASC' ? 'ascending' : 'descending') : 'none'}
        {...rest}
    >
        <Box display="inline-flex" alignItems="center">
            {children}
            <Box mr="0.25rem" />
            <Box flexShrink="0" display="inline-flex" alignItems="center">
                <SortingIndicator direction={active ? direction : ''} />
            </Box>
        </Box>
    </TableHeaderCellWithPointer>
);

export { TableSortableHeaderCell, TableSortableHeaderCellProps };
