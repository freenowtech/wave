import React, { FC } from 'react';
import styled from 'styled-components';
import { Spaces } from '../..';
import { Box, BoxProps } from '../Box/Box';

const COLUMN_WIDTH = 100 / 12;
const GAP = Spaces[3];

const Row = styled(Box).attrs({ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' })`
    gap: ${GAP};
    margin-right: -${GAP};
`;

type ColumnOffset = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
type ColumnSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface ColumnProps extends BoxProps {
    span?: ColumnSpan;
    offset?: ColumnOffset;
}

const Column: FC<ColumnProps> = ({ span = 1, offset = 0, ...restProps }: ColumnProps) => {
    const marginLeft = `${offset * COLUMN_WIDTH}%`;
    const width = `calc(${span * COLUMN_WIDTH}% - ${GAP})`;

    return <Box flex={`0 0 ${width}`} maxWidth={width} marginLeft={marginLeft} {...restProps} />;
};

export { Row, Column, ColumnProps };
