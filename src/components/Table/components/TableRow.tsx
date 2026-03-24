import React, { type ComponentPropsWithoutRef, type FC, useContext } from 'react';
import styled, { css } from 'styled-components';
import { TableContext } from '../context/TableContext';
import { type TableProps } from './Table';
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

const zebraStyles = (active: boolean, hover: boolean) => css`
    &:nth-child(even) {
        background-color: hsla(${getSemanticValue('background-surface-neutral-faded-hsl')}, 0.3);
    }

    &:hover {
        ${hover ? `background-color: ${getSemanticValue('background-surface-info-faded')}` : ''};
    }

    ${active ? `background-color: ${getSemanticValue('background-surface-info-active')} !important` : ''};
`;

const linesStyles = (active: boolean, hover: boolean) => css`
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
            case 'zebra': {
                return zebraStyles(active ?? false, hover);
            }
            case 'lines': {
                return linesStyles(active ?? false, hover);
            }
            case 'blank':
            default: {
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
    }
);

const TableRow: FC<TableRowProps> = (props: TableRowProps) => {
    const { rowStyle } = useContext(TableContext);

    return <TableRowElement rowStyle={rowStyle} {...props} />;
};

export { TableRow, type TableRowProps };
