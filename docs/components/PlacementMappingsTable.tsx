import React from 'react';
import { Table, TableCell, TableHeaderCell, TableRow } from '../../src/components/Table';

export const PlacementMappingsTable: React.FC = () => (
    <Table rowStyle="zebra" rowSize="small">
        <thead>
            <TableRow>
                <TableHeaderCell>react-tether</TableHeaderCell>
                <TableHeaderCell>react-popper (new)</TableHeaderCell>
            </TableRow>
        </thead>
        <tbody>
            <TableRow>
                <TableCell>bottom-left</TableCell>
                <TableCell>bottom-start</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>bottom-center</TableCell>
                <TableCell>bottom</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>bottom-right</TableCell>
                <TableCell>bottom-end</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>top-left</TableCell>
                <TableCell>top-start</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>top-center</TableCell>
                <TableCell>top</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>top-right</TableCell>
                <TableCell>top-end</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>center-left</TableCell>
                <TableCell>left</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>center-right</TableCell>
                <TableCell>right</TableCell>
            </TableRow>
        </tbody>
    </Table>
);
