import React, { DetailedHTMLProps, ThHTMLAttributes, useContext } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../essentials';
import { theme } from '../../../essentials/theme';
import { get } from '../../../utils/themeGet';
import { TableContext } from '../context/TableContext';
import { TableProps } from './Table';

type TableHeaderCellProps = Pick<TableProps, 'rowSize' | 'columnSpace'> &
    DetailedHTMLProps<ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>;

const TableHeaderCellElement = styled.th.attrs({ theme })<TableHeaderCellProps>`
    height: ${p => p.rowSize};
    text-align: left;
    font-weight: ${get('fontWeights.bold')};
    border-bottom: 0.0625rem solid ${Colors.AUTHENTIC_BLUE_550} !important;
    padding: 0 calc(${p => p.columnSpace} / 2);
    vertical-align: middle;
    white-space: nowrap;

    &:first-child {
        padding-left: ${p => p.columnSpace};
    }

    &:last-child {
        padding-right: ${p => p.columnSpace};
    }
`;

const TableHeaderCell = props => {
    const { rowSize, columnSpace } = useContext(TableContext);

    return <TableHeaderCellElement rowSize={rowSize} columnSpace={columnSpace} {...props} />;
};

export { TableHeaderCell, TableHeaderCellProps };
