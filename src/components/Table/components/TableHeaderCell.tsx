import React, { ComponentPropsWithoutRef, FC, useContext } from 'react';
import styled from 'styled-components';
import { compose, LayoutProps, textAlign, TextAlignProps, layout } from 'styled-system';
import { Colors } from '../../../essentials';
import { theme } from '../../../essentials/theme';
import { get } from '../../../utils/themeGet';
import { TableContext } from '../context/TableContext';
import { TableProps } from './Table';

type TableHeaderCellProps = Pick<TableProps, 'rowSize' | 'columnSpace'> &
    ComponentPropsWithoutRef<'th'> &
    TextAlignProps &
    LayoutProps;

const TableHeaderCellElement = styled.th.attrs({ theme })<TableHeaderCellProps>`
    border-bottom: 0.0625rem solid ${Colors.AUTHENTIC_BLUE_550} !important;
    font-weight: ${get('fontWeights.bold')};
    height: ${p => p.rowSize};
    padding: 0 calc(${p => p.columnSpace} / 2);
    text-align: left;
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

const TableHeaderCell: FC<TableHeaderCellProps> = (props: TableHeaderCellProps) => {
    const { rowSize, columnSpace } = useContext(TableContext);

    return <TableHeaderCellElement rowSize={rowSize} columnSpace={columnSpace} {...props} />;
};

export { TableHeaderCell, TableHeaderCellProps };
