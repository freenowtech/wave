import React from 'react';
import styled from 'styled-components';
import { Table, TableCell, TableHeaderCell, TableRow } from '../../../components';
import { Colors, SemanticColors } from '../Colors';

function flattenObj(obj: {}, parent?: {}, res: {} = {}): {} {
    for (const key in obj) {
        const propName = parent ? parent + '.' + key : key;
        if (typeof obj[key] == 'object') {
            flattenObj(obj[key], propName, res);
        } else {
            res[propName] = obj[key];
        }
    }

    return res;
}

const ColorBlock = styled.div<{ color: string }>`
    background-color: ${p => p.color};
    border: 0.0625rem solid ${p => (p.color === Colors.WHITE ? Colors.AUTHENTIC_BLUE_200 : p.color)};
    height: 1rem;
    width: 4rem;
`;

export const SemanticColorsTable = () => {
    const flatSemanticColors = flattenObj(SemanticColors);

    return (
        <Table rowStyle="lines" width="100%">
            <thead>
                <TableRow>
                    <TableHeaderCell>Color</TableHeaderCell>
                    <TableHeaderCell>Name</TableHeaderCell>
                    <TableHeaderCell>Hex Code</TableHeaderCell>
                </TableRow>
            </thead>
            <tbody>
                {Object.keys(flatSemanticColors).map(key => (
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
    );
};
