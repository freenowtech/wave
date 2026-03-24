import React, { type ComponentPropsWithoutRef, type FC, useContext } from 'react';
import styled from 'styled-components';
import { compose, type LayoutProps, textAlign, type TextAlignProps, layout } from 'styled-system';
import { TableContext } from '../context/TableContext';
import { type TableProps } from './Table';

type TableCellProps = Pick<TableProps, 'rowSize' | 'columnSpace'> &
    ComponentPropsWithoutRef<'td'> &
    TextAlignProps &
    LayoutProps;

const TableCellElement = styled.td<TableCellProps>`
    height: ${p => p.rowSize};
    padding: 0 calc(${p => p.columnSpace} / 2);
    vertical-align: middle;
    white-space: nowrap;

    &:first-child {
        padding-left: ${p => p.columnSpace};
    }

    &:last-child {
        padding-right: ${p => p.columnSpace};
    }

    ${compose(textAlign, layout)}
`;

const TableCell: FC<TableCellProps> = (props: TableCellProps) => {
    const { rowSize, columnSpace } = useContext(TableContext);

    return <TableCellElement rowSize={rowSize} columnSpace={columnSpace} {...props} />;
};

export { TableCell, type TableCellProps };
