import React, { ComponentPropsWithoutRef, FC } from 'react';
import styled from 'styled-components';
import { compose, height, HeightProps, margin, MarginProps, width, WidthProps } from 'styled-system';
import { theme } from '../../../essentials/theme';
import { get } from '../../../utils/themeGet';
import { TableContext } from '../context/TableContext';
import { getColumnSpace } from '../util/getColumnSpace';
import { getRowSize } from '../util/getRowSize';

interface TableElementProps
    extends Omit<ComponentPropsWithoutRef<'table'>, 'height' | 'width'>,
        MarginProps,
        HeightProps,
        WidthProps {}
interface TableProps extends TableElementProps {
    rowStyle: 'lines' | 'zebra' | 'blank';
    rowSize?: 'large' | 'normal' | 'small' | string;
    columnSpace?: 'normal' | 'small' | string;
}

const TableElement = styled.table.attrs({ theme })<TableElementProps>`
    font-size: ${get('fontSizes.1')};
    font-family: ${get('fonts.normal')};
    border-collapse: collapse;
    border-spacing: 0;
    box-sizing: border-box;

    thead tr:hover {
        background-color: inherit;
    }

    ${compose(margin, width, height)}
`;

const Table: FC<TableProps> = ({
    children,
    rowStyle,
    rowSize = 'normal',
    columnSpace = 'normal',
    ...props
}: TableProps) => {
    const context = {
        columnSpace: getColumnSpace(columnSpace),
        rowSize: getRowSize(rowSize),
        rowStyle
    };

    return (
        // @ts-expect-error table props (height, width) conflict with HeightProps and WidthProps from styled-system
        <TableElement {...props}>
            <TableContext.Provider value={context}>{children}</TableContext.Provider>
        </TableElement>
    );
};

export { Table, TableElement, TableProps };
