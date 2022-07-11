import React, { FC, useState } from 'react';
import { Table, TableCell, TableHeaderCell, TableRow } from '..';
import { Box, Button, Checkbox, Label, Text } from '../..';
import { Colors } from '../../../essentials';
import { EnvelopeIcon, PhoneIcon } from '../../../icons';
import { TableRowSkeleton } from '../components/TableRowSkeleton';

function randomDate() {
    const start = new Date(2012, 0, 1);
    return new Date(start.getTime() + Math.random() * (Date.now() - start.getTime()));
}

const data = [
    {
        id: 1,
        date: randomDate().toDateString(),
        activity: 'No Activity',
        name: 'Leander Klein',
        status: <Label>New</Label>,
        emailAddress: 'leander.klein@free-now.com'
    },
    {
        id: 2,
        date: randomDate().toDateString(),
        activity: '13 Trips',
        name: 'Jonathan Roolf',
        status: <Label variant="success">Active</Label>,
        emailAddress: 'jonathan.roolf@free-now.com'
    },
    {
        id: 3,
        date: randomDate().toDateString(),
        activity: 'No Activity',
        name: 'John Doe',
        status: <Label variant="danger">Fraud</Label>,
        emailAddress: 'j.doe@mytaxi.com'
    },
    {
        id: 4,
        date: randomDate().toDateString(),
        activity: 'No activity',
        name: 'Leonard Koch',
        status: <Label variant="success">Active</Label>,
        emailAddress: 'l.koch@mytaxi.com'
    },
    {
        id: 5,
        date: randomDate().toDateString(),
        activity: '3 Trips',
        name: 'Enzo Mathe',
        status: <Label variant="success">Active</Label>,
        emailAddress: 'enzo.mathe@free-now.com'
    }
];

export const SkeletonTable: FC = () => {
    const [loading, setLoading] = useState(true);

    return (
        <>
            <Box display="flex" alignItems="center" mb={2}>
                <Checkbox onChange={e => setLoading(e.target.checked)} checked={loading} label="Show loading state" />
            </Box>
            <Table rowStyle="zebra">
                <thead>
                    <TableRow>
                        <TableHeaderCell style={{ width: '10rem', whiteSpace: 'normal' }}>
                            Creation Date / Activity
                        </TableHeaderCell>
                        <TableHeaderCell style={{ width: '6.5rem' }}>Name</TableHeaderCell>
                        <TableHeaderCell style={{ width: '3rem' }}>Status</TableHeaderCell>
                        <TableHeaderCell style={{ width: '7.5rem' }}>Phone</TableHeaderCell>
                        <TableHeaderCell style={{ width: '13rem' }}>E-Mail</TableHeaderCell>
                        <TableHeaderCell style={{ width: '6.5rem' }}>Actions</TableHeaderCell>
                    </TableRow>
                </thead>
                <tbody>
                    {loading && [0, 1, 2, 3, 4].map(key => <TableRowSkeleton key={key} columns={6} />)}
                    {!loading &&
                        data.map(entry => (
                            <TableRow key={entry.id}>
                                <TableCell>
                                    {entry.date}
                                    <br />
                                    <Text fontSize={0} weak>
                                        {entry.activity}
                                    </Text>
                                </TableCell>
                                <TableCell>{entry.name}</TableCell>
                                <TableCell>{entry.status}</TableCell>
                                <TableCell>
                                    <Box display="flex" alignItems="center">
                                        <PhoneIcon size={18} color={Colors.ACTION_BLUE_900} />
                                        &nbsp;+49&nbsp;{Math.round(Math.random() * 1000000000)}
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Box display="flex" alignItems="center">
                                        <EnvelopeIcon size={18} color={Colors.ACTION_BLUE_900} />
                                        &nbsp;{entry.emailAddress}
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Button variant="secondary" size="small">
                                        ...
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                </tbody>
            </Table>
        </>
    );
};
