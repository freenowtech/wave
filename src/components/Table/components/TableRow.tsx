import React, { ComponentPropsWithoutRef, FC, useContext } from 'react';
import styled, { css } from 'styled-components';
import { TableContext } from '../context/TableContext';
import { TableProps } from './Table';
import { getSemanticValue } from '../../../utils/cssVariables';

type TableRowProps = ComponentPropsWithoutRef<'tr'> & {
    /**
     * Show active state styling on the row
     * @default false
     */
    active?: boolean;
    /**
     * Show the hover state styling on the row
     * @default true
     */
    hover?: boolean;
};

const zebraStyles = (active, hover) => css`
    &:nth-child(even) {
        background-color: hsla(${getSemanticValue('background-surface-neutral-faded-hsl')}, 0.3);
    }

    &:hover {
        ${hover ? `background-color: ${getSemanticValue('background-surface-info-faded')}` : ''};
    }

    ${active ? `background-color: ${getSemanticValue('background-surface-info-active')} !important` : ''};
`;

const linesStyles = (active, hover) => css`
    td,
    th {
        border-bottom: 0.0625rem solid ${getSemanticValue('border-neutral-default')};
    }

    &:first-of-type {
        th {
            border-bottom: 0.0625rem solid ${getSemanticValue('border-neutral-emphasized')};
        }
    }

    &:hover {
        ${hover ? `background-color: ${getSemanticValue('background-surface-neutral-faded')};` : ''}
    }

    ${active ? `background-color: ${getSemanticValue('background-surface-info-faded')} !important` : ''};
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
                        ${hover ? `background-color: ${getSemanticValue('background-surface-neutral-faded')}` : ''};
                    }

                    ${active
                        ? `background-color: ${getSemanticValue('background-surface-info-faded')} !important`
                        : ''};
                `;
        }
    }
);

const TableRow: FC<TableRowProps> = (props: TableRowProps) => {
    const { rowStyle } = useContext(TableContext);

    return <TableRowElement rowStyle={rowStyle} {...props} />;
};

export { TableRow, TableRowProps };
