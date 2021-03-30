import React from 'react';
import { Table, TableCell, TableHeaderCell, TableRow } from '../../../components/Table';

export const BreakpointsTable = () => (
    <div style={{ overflow: 'scroll' }}>
        <Table rowStyle="lines" rowSize="small" width="100%">
            <thead>
                <TableRow>
                    <TableHeaderCell>Breakpoint</TableHeaderCell>
                    <TableHeaderCell>Index</TableHeaderCell>
                    <TableHeaderCell>Alias</TableHeaderCell>
                    <TableHeaderCell>Purpose</TableHeaderCell>
                </TableRow>
            </thead>
            <tbody>
                <TableRow>
                    <TableCell>(default)</TableCell>
                    <TableCell>0</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>Mobile (portrait)</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>30rem (480px)</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>small</TableCell>
                    <TableCell>Mobile (landscape)</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>48rem (768px)</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>medium</TableCell>
                    <TableCell>Tablet (portrait)</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>62rem (992px)</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>large</TableCell>
                    <TableCell>Tablet (landscape)</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>75rem (1200px)</TableCell>
                    <TableCell>4</TableCell>
                    <TableCell>xlarge</TableCell>
                    <TableCell>Laptops (and Desktops)</TableCell>
                </TableRow>
            </tbody>
        </Table>
    </div>
);
