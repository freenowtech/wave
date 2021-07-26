import React, { ComponentPropsWithoutRef, FC, useContext } from 'react';
import styled, { css } from 'styled-components';
import { Colors } from '../../../essentials';
import { TableContext } from '../context/TableContext';
import { TableProps } from './Table';

type TableRowProps = ComponentPropsWithoutRef<'tr'> & {
    active?: boolean;
    hover?: boolean;
};

const zebraStyles = (active, hover) => css`
    &:nth-child(even) {
        background-color: rgb(249, 250, 251);
    }

    &:hover {
        ${hover ? `background-color: ${Colors.ACTION_BLUE_100}` : ''};
    }

    ${active ? `background-color: ${Colors.ACTION_BLUE_150} !important` : ''};
`;

const linesStyles = (active, hover) => css`
    td,
    th {
        border-bottom: 0.0625rem solid ${Colors.AUTHENTIC_BLUE_200};
    }

    &:first-of-type {
        th {
            border-bottom: 0.0625rem solid ${Colors.AUTHENTIC_BLUE_550};
        }
    }

    &:hover {
        ${hover ? `background-color: ${Colors.ACTION_BLUE_50};` : ''}
    }

    ${active ? `background-color: ${Colors.ACTION_BLUE_100} !important` : ''};
`;

const TableRowElement = styled.tr<TableRowProps & Pick<TableProps, 'rowStyle'>>(
    ({ rowStyle, active, hover = true }) => {
        switch (rowStyle) {
            case 'zebra':
                return zebraStyles(active, hover);
            case 'lines':
                return linesStyles(active, hover);
            case 'blank':
            default:
                return css`
                    &:hover {
                        ${hover ? `background-color: ${Colors.ACTION_BLUE_50}` : ''};
                    }

                    ${active ? `background-color: ${Colors.ACTION_BLUE_100} !important` : ''};
                `;
        }
    }
);

const TableRow: FC<TableRowProps> = (props: TableRowProps) => {
    const { rowStyle } = useContext(TableContext);

    return <TableRowElement rowStyle={rowStyle} {...props} />;
};

export { TableRow, TableRowProps };
