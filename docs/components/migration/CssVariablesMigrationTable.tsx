import React from 'react';

import { Source } from '../../../src/docs/Source';
import { Table, TableCell, TableHeaderCell, TableRow } from '../../../src/components/Table';

const codemodsExample = `import { styled } from 'styled-components';

export const GreyList = styled.ul\`
    color: var(--wave-b-color-blue-primary-550);
\`;
`;

const polishedExample = `import { styled } from 'styled-components';
import {getSemanticValue} from '@freenow/wave';

export const GreyList = styled.ul\`
    color: \${getSemanticValue('foreground-neutral-emphasized')};
\`;
`;

export const CssVariablesMigrationTable = () => (
    <Table rowStyle="blank">
        <thead>
            <TableHeaderCell>After codemods</TableHeaderCell>
            <TableHeaderCell>Polished code</TableHeaderCell>
        </thead>
        <tbody>
            <TableRow>
                <TableCell verticalAlign="top">
                    <Source code={codemodsExample} />
                </TableCell>
                <TableCell verticalAlign="top">
                    <Source code={polishedExample} />
                </TableCell>
            </TableRow>
        </tbody>
    </Table>
);
