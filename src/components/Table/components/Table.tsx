import React, { ComponentPropsWithoutRef, FC } from 'react';
import styled, { StyledComponent } from 'styled-components';
import { compose, height, HeightProps, margin, MarginProps, width, WidthProps } from 'styled-system';
import { theme } from '../../../essentials/theme';
import { get } from '../../../utils/themeGet';
import { TableContext } from '../context/TableContext';
import { getColumnSpace } from '../util/getColumnSpace';
import { getRowSize } from '../util/getRowSize';

interface TableElementProps
    extends MarginProps,
        HeightProps,
        WidthProps,
        // do not include width property from the `<table>` tag type because styled-system provides its own
        Omit<ComponentPropsWithoutRef<'table'>, 'width'> {}

interface TableProps extends TableElementProps {
    /**
     * Row style (background colors, borders, etc.)
     * @default lines
     */
    rowStyle: 'lines' | 'zebra' | 'blank';
    /**
     * The height of the table rows. More info on [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/height)
     */
    rowSize?: 'large' | 'normal' | 'small' | string;
    /**
     * The space between columns of the table (any CSS value will be divided by 2 using `calc`)
     */
    columnSpace?: 'normal' | 'small' | string;
}

const TableElement: StyledComponent<FC<TableElementProps>, typeof theme> = styled.table.attrs({
    theme
})<TableElementProps>`
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
        <TableElement {...props}>
            <TableContext.Provider value={context}>{children}</TableContext.Provider>
        </TableElement>
    );
};

export { Table, TableElement, TableProps };
