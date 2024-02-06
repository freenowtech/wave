import { DocsContext } from '@storybook/blocks';

import React, { FC, useContext, useMemo, useState } from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import styled from 'styled-components';
import { Box, DarkScheme, Input, LightScheme, Table, TableCell, TableHeaderCell, TableRow } from '../../../components';
import { applyPrefix, generateCssVariableEntries, getSemanticValue } from '../../../utils/cssVariables';
import {
    Colors as ClassicColors,
    SemanticColors as ClassicSemanticTokens,
    SemanticColorsDarkSchema as ClassicDarkSemanticTokens
} from '../Colors';
import {
    Colors as ModernColors,
    SemanticColors as ModernSemanticTokens,
    SemanticColorsDarkSchema as ModernDarkSemanticTokens
} from '../ModernColors';

const CenteredTableCell = styled(TableCell)`
    text-align: center;
    width: 1%; // Hack to make width as small as possible while respecting table-layout: auto

    &:first-child {
        padding-left: 1rem;
    }
`;

const BlockContainer = styled.div`
    width: 4rem;
    margin: auto !important;
`;

const ColorBlock = styled.div<{ token: string }>`
    background-color: var(${p => p.token});
    border: 0.0625rem solid ${getSemanticValue('border-neutral-default')};
    height: 1.5rem;
`;

const Tokens = {
    s: {
        light: {
            classic: ClassicSemanticTokens,
            modern: ModernSemanticTokens
        },
        dark: {
            classic: ClassicDarkSemanticTokens,
            modern: ModernDarkSemanticTokens
        }
    },
    b: {
        light: {
            classic: ClassicColors,
            modern: ModernColors
        },
        dark: {
            classic: ClassicColors,
            modern: ModernColors
        }
    }
} as const;

export const CssVariablesTable: FC<{ tier: 'b' | 's' }> = ({ tier }) => {
    const [nameSearchInput, setNameSearchInput] = useState('');
    const isDark = useDarkMode();
    const {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        store: { globals }
    } = useContext(DocsContext);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const { theme } = globals.get();
    const tokens = Tokens[tier][isDark ? 'dark' : 'light'][theme];
    const invertedSchemeTokens = Tokens[tier][isDark ? 'light' : 'dark'][theme];

    const entries = useMemo(() => {
        const schemeEntries = generateCssVariableEntries(tokens);
        const invertedSchemeEntries = generateCssVariableEntries(invertedSchemeTokens);

        return schemeEntries.map(({ value, variable }, i) => ({
            value,
            variable,
            invertedValue: invertedSchemeEntries[i].value
        }));
    }, [tokens, invertedSchemeTokens]);

    const filteredTokens = !nameSearchInput
        ? entries
        : entries.filter(({ variable }) => variable.includes(nameSearchInput.toLowerCase().trim()));

    return (
        <Table rowStyle="lines" width="100%" rowSize="small">
            <thead>
                <TableRow>
                    <TableHeaderCell>Color</TableHeaderCell>
                    <TableHeaderCell>Inverted Color</TableHeaderCell>
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
                </TableRow>
            </thead>
            <tbody>
                {filteredTokens.map(({ variable, value, invertedValue }) => {
                    const token = applyPrefix(variable, tier);

                    return (
                        <TableRow key={variable}>
                            <CenteredTableCell>
                                <BlockContainer>
                                    <ColorBlock token={token} />
                                </BlockContainer>
                                <code>{value}</code>
                            </CenteredTableCell>
                            <CenteredTableCell>
                                <BlockContainer>
                                    {isDark ? (
                                        <LightScheme>
                                            <ColorBlock token={token} />
                                        </LightScheme>
                                    ) : (
                                        <DarkScheme>
                                            <ColorBlock token={token} />
                                        </DarkScheme>
                                    )}
                                </BlockContainer>
                                <code>{invertedValue}</code>
                            </CenteredTableCell>
                            <TableCell>
                                <code>{variable}</code>
                            </TableCell>
                        </TableRow>
                    );
                })}
            </tbody>
        </Table>
    );
};
