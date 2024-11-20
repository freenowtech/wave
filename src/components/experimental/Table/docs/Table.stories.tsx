import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { Table, TableHeader, TableBody, Row, Cell, Column, Skeleton } from '../Table';
import { Text } from '../../Text/Text';

const meta: Meta = {
    title: 'Experimental/Components/Table',
    component: Table,
    parameters: {
        layout: 'centered'
    },
    args: {
        label: 'Files'
    }
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
    render: () => {
        const columns: Array<{ id: string; name: string; isRowHeader?: boolean }> = [
            { name: 'Name', id: 'name', isRowHeader: true },
            { name: 'Type', id: 'type' },
            { name: 'Date Modified', id: 'date' }
        ];

        const rows: Array<{ id: number; name: string; date: string; type: string }> = [
            { id: 1, name: 'Games', date: '6/7/2020', type: 'File folder' },
            { id: 2, name: 'Program Files', date: '4/7/2021', type: 'File folder' },
            { id: 3, name: 'bootmgr', date: '11/20/2010', type: 'System file' },
            { id: 4, name: 'log.txt', date: '1/18/2016', type: 'Text Document' },
            { id: 5, name: 'log.txt', date: '1/18/2016', type: 'Text Document' },
            { id: 6, name: 'log.txt', date: '1/18/2016', type: 'Text Document' },
            { id: 7, name: 'log.txt', date: '1/18/2016', type: 'Text Document' }
        ];

        return (
            <Table aria-label="Files" selectionMode="multiple" selectionBehavior="replace">
                <TableHeader columns={columns}>
                    {column => <Column isRowHeader={column.isRowHeader}>{column.name}</Column>}
                </TableHeader>
                <TableBody items={rows}>
                    {item => <Row columns={columns}>{column => <Cell>{item[column.id]}</Cell>}</Row>}
                </TableBody>
            </Table>
        );
    }
};

export const Loading: Story = {
    render: () => {
        const columns: Array<{ id: string; name: string; isRowHeader?: boolean }> = [
            { name: 'Name', id: 'name', isRowHeader: true },
            { name: 'Type', id: 'type' },
            { name: 'Date Modified', id: 'date' }
        ];

        return (
            <Table aria-label="Files">
                <TableHeader columns={columns}>
                    {column => <Column isRowHeader={column.isRowHeader}>{column.name}</Column>}
                </TableHeader>
                <TableBody items={[{ id: 1 }, { id: 2 }, { id: 3 }]}>
                    {() => (
                        <Row columns={columns}>
                            {() => (
                                <Cell>
                                    <Skeleton />
                                </Cell>
                            )}
                        </Row>
                    )}
                </TableBody>
            </Table>
        );
    }
};

export const Empty: Story = {
    render: () => {
        const columns: Array<{ id: string; name: string; isRowHeader?: boolean }> = [
            { name: 'Name', id: 'name', isRowHeader: true },
            { name: 'Type', id: 'type' },
            { name: 'Date Modified', id: 'date' }
        ];

        return (
            <Table aria-label="Files">
                <TableHeader columns={columns}>
                    {column => <Column isRowHeader={column.isRowHeader}>{column.name}</Column>}
                </TableHeader>
                <TableBody
                    items={[]}
                    renderEmptyState={() => (
                        <div style={{ padding: '1rem', textAlign: 'center' }}>
                            <Text variant="body1">No results found</Text>
                        </div>
                    )}
                >
                    {[]}
                </TableBody>
            </Table>
        );
    }
};

export const Async: Story = {
    render: () => {
        type Character = { name: string; height: number; mass: number; birth_year: string };
        const emptyCharacter: Character = {
            name: '',
            height: 0,
            mass: 0,
            birth_year: ''
        };
        const pageSize = 10;
        const [isLoading, setIsLoading] = React.useState(true);
        const [items, setItems] = React.useState<Character[]>(
            /* eslint-disable-next-line unicorn/no-new-array */
            new Array(pageSize).fill(emptyCharacter).map((value, idx) => ({ ...value, name: idx.toString() }))
        );

        React.useEffect(() => {
            let ignore = false;

            async function startFetching() {
                const res = await fetch(`https://swapi.py4e.com/api/people`);
                const json = await res.json();

                if (!ignore) {
                    setItems(json.results);
                }

                setIsLoading(false);
            }

            // eslint-disable-next-line no-void
            void startFetching();

            return () => {
                ignore = true;
            };
        }, []);

        const columns: Array<{ id: string; name: string; isRowHeader?: boolean }> = [
            { name: 'Name', id: 'name', isRowHeader: true },
            { name: 'Height', id: 'height' },
            { name: 'Mass', id: 'mass' },
            { name: 'Birth Year', id: 'birth_year' }
        ];

        return (
            <Table aria-label="Star Wars Characters">
                <TableHeader columns={columns}>
                    {column => <Column isRowHeader={column.isRowHeader}>{column.name}</Column>}
                </TableHeader>
                <TableBody items={items}>
                    {item => (
                        <Row id={item.name} columns={columns}>
                            {column => <Cell>{isLoading ? <Skeleton /> : item[column.id]}</Cell>}
                        </Row>
                    )}
                </TableBody>
            </Table>
        );
    }
};
