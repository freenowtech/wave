import React, { FC } from 'react';
import { Table, TableCell, TableHeaderCell, TableRow } from '..';
import { Box, Label, Link, Text } from '../..';
import { Colors } from '../../../essentials';
import { DigitalPaymentIcon } from '../../../icons/payment';

export const ComplexDataTable: FC = () => (
    <Table rowStyle="lines" rowSize="large">
        <thead>
            <TableRow>
                <TableHeaderCell>Type</TableHeaderCell>
                <TableHeaderCell>ID</TableHeaderCell>
                <TableHeaderCell>State</TableHeaderCell>
                <TableHeaderCell>Pickup</TableHeaderCell>
                <TableHeaderCell>Destination</TableHeaderCell>
                <TableHeaderCell>Driver Name</TableHeaderCell>
                <TableHeaderCell>Request / Pickup</TableHeaderCell>
                <TableHeaderCell>Fare</TableHeaderCell>
            </TableRow>
        </thead>
        <tbody>
            <TableRow>
                <TableCell>
                    <Label variant="success">AdHoc</Label>
                </TableCell>
                <TableCell>
                    <Link fontSize={1} href="https://bomt.prelive.mytaxi.com/booking/10135067/dashboard">
                        6189N
                    </Link>
                </TableCell>
                <TableCell>Accomplished</TableCell>
                <TableCell>
                    Große Elbstraße 273
                    <br />
                    <Text fontSize={1} secondary>
                        22767 Hamburg
                    </Text>
                </TableCell>
                <TableCell>
                    Holsteiner Chaussee 191
                    <br />
                    <Text fontSize={1} secondary>
                        22457 Hamburg
                    </Text>
                </TableCell>
                <TableCell>
                    <Link fontSize={1} href="https://driverservice-crm.prelive.mytaxi.com/driver/4382667/dashboard">
                        DE Hans DE Taximann
                    </Link>
                </TableCell>
                <TableCell>
                    13 Mar 2020 - 02:25 PM
                    <br />
                    13 Mar 2020 - 02:25 PM
                </TableCell>
                <TableCell>
                    <Box display="flex" alignItems="center">
                        2.52 EUR&nbsp;&nbsp;
                        <DigitalPaymentIcon size={20} />
                    </Box>
                </TableCell>
            </TableRow>
            <TableRow style={{ borderLeft: `4px solid ${Colors.NEGATIVE_ORANGE_900}` }}>
                <TableCell>
                    <Label>Advanced</Label>
                </TableCell>
                <TableCell>
                    <Link fontSize={1} href="https://bomt.prelive.mytaxi.com/booking/9846310/dashboard">
                        5V1GM
                    </Link>
                </TableCell>
                <TableCell>Canceled (SER)</TableCell>
                <TableCell>
                    Große Elbstraße 273
                    <br />
                    <Text fontSize={1} secondary>
                        22767 Hamburg
                    </Text>
                </TableCell>
                <TableCell />
                <TableCell />
                <TableCell>13 Feb 2020 - 11:26 AM</TableCell>
                <TableCell />
            </TableRow>
            <TableRow>
                <TableCell>
                    <Label variant="danger">Hop On</Label>
                </TableCell>
                <TableCell>
                    <Link fontSize={1} href="https://bomt.prelive.mytaxi.com/booking/9137333/dashboard">
                        5FUET
                    </Link>
                </TableCell>
                <TableCell>Accomplished</TableCell>
                <TableCell>
                    Große Elbstraße 273
                    <br />
                    <Text fontSize={1} secondary>
                        22767 Hamburg
                    </Text>
                </TableCell>
                <TableCell>
                    Große Elbstraße 273
                    <br />
                    <Text fontSize={1} secondary>
                        22767 Hamburg
                    </Text>
                </TableCell>
                <TableCell>
                    <Link fontSize={1} href="https://driverservice-crm.prelive.mytaxi.com/driver/9543476/dashboard">
                        Hans Taximann
                    </Link>
                </TableCell>
                <TableCell>
                    12 Dec 2019 - 03:14 PM
                    <br />
                    12 Dec 2019 - 03:14 PM
                </TableCell>
                <TableCell>
                    <Box display="flex" alignItems="center">
                        18.40 EUR&nbsp;&nbsp;
                        <DigitalPaymentIcon size={20} />
                    </Box>
                </TableCell>
            </TableRow>
        </tbody>
    </Table>
);
