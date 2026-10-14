import React, { type ReactNode } from 'react';
import { Table, TableCell, TableHeaderCell, TableRow } from '../../src/components/Table';

interface DocsTableProps {
    headers: string[];
    /** Each row starts with a unique label, which is used as its key */
    rows: [string, ...ReactNode[]][];
}

// The Storybook MDX setup doesn't support Markdown tables, so the docs pages use this instead
// Table cells don't wrap by default, which would push long texts out of the page
const wrap = { whiteSpace: 'normal' } as const;

export const DocsTable: React.FC<DocsTableProps> = ({ headers, rows }) => (
    <Table rowStyle="zebra" rowSize="small" width="100%">
        <thead>
            <TableRow>
                {headers.map(header => (
                    <TableHeaderCell key={header} style={wrap}>
                        {header}
                    </TableHeaderCell>
                ))}
            </TableRow>
        </thead>
        <tbody>
            {rows.map(([label, ...cells]) => (
                <TableRow key={label}>
                    <TableCell style={wrap}>{label}</TableCell>
                    {cells.map((cell, index) => (
                        <TableCell key={headers[index + 1]} style={wrap}>
                            {cell}
                        </TableCell>
                    ))}
                </TableRow>
            ))}
        </tbody>
    </Table>
);
