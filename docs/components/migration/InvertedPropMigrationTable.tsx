import React from 'react';

import { Source } from '../../../src/docs/Source';
import { Table, TableCell, TableHeaderCell, TableRow } from '../../../src/components/Table';

const codemodsExample = `<Box>
    <InvertedColorScheme>
        <Button size="small" onClick={onClick}>
            {label}
        </Button>
    </InvertedColorScheme>
    <InvertedColorScheme>
        <Button size="small" onClick={onClick}>
            {label}
        </Button>
    </InvertedColorScheme>
</Box>`;

const polishedExample = `<InvertedColorScheme>
    <Button size="small" onClick={onClick}>
        {label}
    </Button>
    <Button size="small" onClick={onClick}>
        {label}
    </Button>
</InvertedColorScheme>`;

export const InvertedPropMigrationTable = () => (
    <Table rowStyle="blank">
        <thead>
            <TableHeaderCell>After codemods</TableHeaderCell>
            <TableHeaderCell>Polished code</TableHeaderCell>
        </thead>
        <tbody>
            <TableRow>
                <TableCell verticalAlign="top">
                    <Source code={codemodsExample} />
                </TableCell>
                <TableCell verticalAlign="top">
                    <Source code={polishedExample} />
                </TableCell>
            </TableRow>
        </tbody>
    </Table>
);
