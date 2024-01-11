import { DocsContext } from '@storybook/blocks';

import React, { FC, useContext, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Box, Input, Table, TableCell, TableHeaderCell, TableRow } from '../../../components';
import { generateCssVariableEntries, generateCssVariables, getSemanticValue } from '../../../utils/cssVariables';
import { Colors as ClassicColors, SemanticColors as ClassicSemanticTokens } from '../Colors';
import { Colors as ModernColors, SemanticColors as ModernSemanticTokens } from '../ModernColors';

const ColorBlock = styled.div<{ color: string }>`
    background-color: ${p => p.color};
    border: 0.0625rem solid ${getSemanticValue('border-neutral-default')};
    height: 1.5rem;
    width: 4rem;
`;

const InjectedVariables = styled.div<{ variables: ReadonlyArray<string> }>`
    ${p => p.variables}
`;

const Tokens = {
    s: {
        classic: ClassicSemanticTokens,
        modern: ModernSemanticTokens
    },
    b: {
        classic: ClassicColors,
        modern: ModernColors
    }
} as const;

export const CssVariablesTable: FC<{ tier: 'b' | 's' }> = ({ tier }) => {
    const [nameSearchInput, setNameSearchInput] = useState('');
    const {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        store: { globals }
    } = useContext(DocsContext);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const { theme } = globals.get();
    const tokens = Tokens[tier][theme];

    const entries = useMemo(() => generateCssVariableEntries(tokens), [tokens]);
    const variables = useMemo(() => generateCssVariables(tokens, tier), [tokens, tier]);

    const filteredTokens = !nameSearchInput
        ? entries
        : entries.filter(({ variable }) => variable.includes(nameSearchInput.toLowerCase().trim()));

    return (
        <InjectedVariables variables={variables}>
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
                    {filteredTokens.map(({ variable, value }) => (
                        <TableRow key={variable}>
                            <TableCell>
                                <ColorBlock color={value} />
                            </TableCell>
                            <TableCell>
                                <code>{variable}</code>
                            </TableCell>
                            <TableCell>
                                <code>{value}</code>
                            </TableCell>
                        </TableRow>
                    ))}
                </tbody>
            </Table>
        </InjectedVariables>
    );
};
