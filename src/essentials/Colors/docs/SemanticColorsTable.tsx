import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Box, Input, Table, TableCell, TableHeaderCell, TableRow } from '../../../components';
import { Colors, SemanticColors } from '../Colors';

function flattenObj(
    obj: Record<string, unknown>,
    parent?: string,
    result: Map<string, string> = new Map()
): Map<string, string> {
    Object.keys(obj).forEach(key => {
        const propName = parent ? `${parent}.${key}` : key;

        if (typeof obj[key] === 'object') {
            flattenObj(obj[key] as Record<string, unknown>, propName, result);
        } else {
            result.set(propName, obj[key] as string);
        }
    });

    return result;
}

const ColorBlock = styled.div<{ color: string }>`
    background-color: ${p => p.color};
    border: 0.0625rem solid ${p => (p.color === Colors.WHITE ? Colors.AUTHENTIC_BLUE_200 : p.color)};
    height: 1.5rem;
    width: 4rem;
`;

export const SemanticColorsTable: FC = () => {
    const [nameSearchInput, setNameSearchInput] = useState('');
    const flatSemanticColors = flattenObj(SemanticColors);

    const filteredColorKeys = Object.keys(flatSemanticColors).filter(it => {
        if (nameSearchInput === '') {
            return true;
        }

        return it.toLowerCase().includes(nameSearchInput.toLowerCase());
    });

    return (
        <>
            <Table rowStyle="lines" width="100%" rowSize="small">
                <thead>
                    <TableRow>
                        <TableHeaderCell>Color</TableHeaderCell>
                        <TableHeaderCell>
                            <Box display="flex" justifyContent="space-between" alignItems="center">
                                Name
                                <Input
                                    placeholder="Filter"
                                    size="small"
                                    value={nameSearchInput}
                                    onChange={e => setNameSearchInput(e.target.value)}
                                />
                            </Box>
                        </TableHeaderCell>
                        <TableHeaderCell>Hex Code</TableHeaderCell>
                    </TableRow>
                </thead>
                <tbody>
                    {filteredColorKeys.map(key => (
                        <TableRow key={key}>
                            <TableCell>
                                <ColorBlock color={flatSemanticColors[key]} />
                            </TableCell>
                            <TableCell>
                                <code>{key}</code>
                            </TableCell>
                            <TableCell>
                                <code>{flatSemanticColors[key]}</code>
                            </TableCell>
                        </TableRow>
                    ))}
                </tbody>
            </Table>
        </>
    );
};
