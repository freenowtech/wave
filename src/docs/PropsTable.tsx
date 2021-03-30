import * as React from 'react';
import { Text } from '../components';
import { Table, TableCell, TableHeaderCell, TableRow } from '../components/Table';

interface PropDefinition {
    name: string;
    type: string;
    description?: string;
    defaultValue?: string;
    deprecated?: boolean;
}

interface PropsTableProps {
    props: PropDefinition[];
}

export const PropsTable: React.FC<PropsTableProps> = ({ props }) => (
    <div style={{ overflow: 'scroll' }}>
        <Table rowStyle="lines" width="100%">
            <thead>
                <TableRow>
                    <TableHeaderCell>Name</TableHeaderCell>
                    <TableHeaderCell>Type</TableHeaderCell>
                    <TableHeaderCell>Default</TableHeaderCell>
                </TableRow>
            </thead>
            <tbody>
                {props.map(prop => (
                    <TableRow key={prop.name} style={{ textDecoration: prop.deprecated ? 'line-through' : 'none' }}>
                        <TableCell>
                            <Text fontSize="inherit" fontFamily="monospace">
                                {prop.name}
                            </Text>
                        </TableCell>
                        <TableCell>
                            <Text fontSize="inherit" fontFamily="monospace" as="p">
                                {prop.type}
                            </Text>
                            {prop.description && (
                                <Text weak fontSize="inherit">
                                    {prop.description}
                                </Text>
                            )}
                        </TableCell>
                        <TableCell>
                            <Text fontSize="inherit" fontFamily="monospace">
                                {prop.defaultValue}
                            </Text>
                        </TableCell>
                    </TableRow>
                ))}
            </tbody>
        </Table>
    </div>
);
