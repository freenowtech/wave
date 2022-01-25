import React, { FC, useState } from 'react';
import { Table, TableCell, TableHeaderCell, TableRow } from '..';
import { Box, Button, Label, Select } from '../..';
import { Colors } from '../../../essentials';
import { EnvelopeIcon, PhoneIcon } from '../../../icons';
import { Text } from '../../Text/Text';

export const LiveTable: FC = () => {
    const [rowStyle, setRowStyle] = useState<'zebra' | 'lines' | 'blank'>('zebra');
    const [columnSpace, setColumnSpace] = useState('normal');
    const [rowSize, setRowSize] = useState('normal');

    const generatedTableCode = `<Table rowStyle="${rowStyle}"${
        columnSpace !== 'normal' ? ` columnSpace="${columnSpace}"` : ''
    }${rowSize !== 'normal' ? ` rowSize="${rowSize}"` : ''} />`;

    return (
        <>
            <Select
                label="rowStyle"
                width="10rem"
                onChange={e => setRowStyle(e.target.value as 'zebra' | 'lines' | 'blank')}
                value={rowStyle}
                mr={1}
            >
                <option value="zebra">zebra</option>
                <option value="lines">lines</option>
                <option value="blank">blank</option>
            </Select>

            <Select
                label="columnSpace"
                width="10rem"
                onChange={e => setColumnSpace(e.target.value)}
                value={columnSpace}
                mr={1}
            >
                <option value="small">small</option>
                <option value="normal">normal (default)</option>
            </Select>

            <Select label="rowSize" width="10rem" onChange={e => setRowSize(e.target.value)} value={rowSize}>
                <option value="small">small</option>
                <option value="normal">normal (default)</option>
                <option value="large">large</option>
            </Select>

            <Box mb={2}>
                <pre
                    className="language-jsx prism-code"
                    style={{
                        padding: '1rem',
                        fontSize: '1rem',
                        color: 'rgb(57, 58, 52)',
                        backgroundColor: 'rgb(246, 248, 250)'
                    }}
                >
                    {generatedTableCode}
                </pre>

                <Table rowStyle={rowStyle} columnSpace={columnSpace} rowSize={rowSize}>
                    <caption style={{ captionSide: 'bottom', padding: '1rem' }}>The wonderful Wave list</caption>
                    <thead>
                        <TableRow>
                            <TableHeaderCell scope="col">Creation Date / Activity</TableHeaderCell>
                            <TableHeaderCell scope="col">Name</TableHeaderCell>
                            <TableHeaderCell scope="col">City</TableHeaderCell>
                            <TableHeaderCell scope="col">Phone</TableHeaderCell>
                            <TableHeaderCell scope="col">E-Mail</TableHeaderCell>
                            <TableHeaderCell scope="col">Actions</TableHeaderCell>
                        </TableRow>
                    </thead>
                    <tbody>
                        <TableRow>
                            <TableCell>
                                5 July 2019 - 11:14
                                <br />
                                <Text fontSize={0} weak>
                                    No activity yet
                                </Text>
                            </TableCell>
                            <TableCell scope="row">Leander Klein</TableCell>
                            <TableCell>
                                <Label>New</Label>
                            </TableCell>
                            <TableCell>
                                <Box display="flex" alignItems="center">
                                    <PhoneIcon size={18} color={Colors.ACTION_BLUE_900} />
                                    &nbsp;+4915127182377
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box display="flex" alignItems="center">
                                    <EnvelopeIcon size={18} color={Colors.ACTION_BLUE_900} />
                                    &nbsp;leander.klein@free-now.com
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Button variant="secondary" size="small">
                                    ...
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                31 January 2020 - 02:48
                                <br />
                                <Text fontSize={0} weak>
                                    No activity yet
                                </Text>
                            </TableCell>
                            <TableCell scope="row">Marc Berg</TableCell>
                            <TableCell>
                                <Label variant="success">Active</Label>
                            </TableCell>
                            <TableCell>
                                <Box display="flex" alignItems="center">
                                    <PhoneIcon size={18} color={Colors.ACTION_BLUE_900} />
                                    &nbsp;+4915139912828
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box display="flex" alignItems="center">
                                    <EnvelopeIcon size={18} color={Colors.ACTION_BLUE_900} />
                                    &nbsp;m.berg@free-now.com
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Button variant="secondary" size="small">
                                    ...
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                27 February 2020 - 16:02
                                <br />
                                <Text fontSize={0} weak>
                                    17 Tours
                                </Text>
                            </TableCell>
                            <TableCell scope="row">Ecki Diepenhorst</TableCell>
                            <TableCell>
                                <Label variant="success">Active</Label>
                            </TableCell>
                            <TableCell>
                                <Box display="flex" alignItems="center">
                                    <PhoneIcon size={18} color={Colors.ACTION_BLUE_900} />
                                    &nbsp;+4915139912828
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box display="flex" alignItems="center">
                                    <EnvelopeIcon size={18} color={Colors.ACTION_BLUE_900} />
                                    &nbsp;e.diepenhorst@free-now.com
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Button variant="secondary" size="small">
                                    ...
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                30 March 2020 - 18:19
                                <br />
                                <Text fontSize={0} weak>
                                    17 Tours
                                </Text>
                            </TableCell>
                            <TableCell scope="row">John Doe</TableCell>
                            <TableCell>
                                <Label variant="danger">Fraud</Label>
                            </TableCell>
                            <TableCell>
                                <Box display="flex" alignItems="center">
                                    <PhoneIcon size={18} color={Colors.ACTION_BLUE_900} />
                                    &nbsp;+491672182732
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box display="flex" alignItems="center">
                                    <EnvelopeIcon size={18} color={Colors.ACTION_BLUE_900} />
                                    &nbsp;j.doe@free-now.com
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Button variant="secondary" size="small">
                                    ...
                                </Button>
                            </TableCell>
                        </TableRow>
                    </tbody>
                </Table>
            </Box>
        </>
    );
};
