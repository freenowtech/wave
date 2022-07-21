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

export const PropsTable: React.FC<PropsTableProps> = ({ props: componentProps }: PropsTableProps) => (
    <div>
        <Table rowStyle="lines" width="100%">
            <thead>
                <TableRow>
                    <TableHeaderCell>Name</TableHeaderCell>
                    <TableHeaderCell>Type</TableHeaderCell>
                    <TableHeaderCell>Default</TableHeaderCell>
                </TableRow>
            </thead>
            <tbody>
                {componentProps.map(prop => (
                    <TableRow key={prop.name} style={{ textDecoration: prop.deprecated ? 'line-through' : 'none' }}>
                        <TableCell>
                            <Text fontSize="inherit" fontFamily="monospace">
                                {prop.name}
                            </Text>
                        </TableCell>
                        <TableCell style={{ whiteSpace: 'normal' }}>
                            <Text fontSize="inherit" fontFamily="monospace" as="p">
                                {prop.type}
                            </Text>
                            {prop.description && (
                                <Text secondary fontSize="inherit">
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
