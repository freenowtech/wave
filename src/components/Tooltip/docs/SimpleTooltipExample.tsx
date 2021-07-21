import { FC } from 'react';
import * as React from 'react';
import styled from 'styled-components';
import { Colors, MediaQueries } from '../../../essentials';
import { Tooltip } from '../Tooltip';

const ExampleWrapper = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    align-items: center;

    ${MediaQueries.small} {
        grid-template-columns: auto auto;
    }
`;

const SimpleTooltipExample: FC = () => (
    <ExampleWrapper>
        <div style={{ height: '5rem', border: `0.0625rem solid ${Colors.AUTHENTIC_BLUE_50}` }}>
            <Tooltip alwaysVisible content="This is a regular tooltip 🏓">
                <div style={{ marginTop: '3.75rem' }} />
            </Tooltip>
        </div>
        <div style={{ backgroundColor: Colors.AUTHENTIC_BLUE_900, height: '5rem' }}>
            <Tooltip alwaysVisible inverted content="This is the inverted tooltip">
                <div style={{ marginTop: '3.75rem' }} />
            </Tooltip>
        </div>
    </ExampleWrapper>
);

export { SimpleTooltipExample };
