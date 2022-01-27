import React, { FC } from 'react';
import styled from 'styled-components';
import { Spaces } from '../..';
import { Box, BoxProps } from '../Box/Box';

const COLUMN_WIDTH_RATIO = 100 / 12;
const GAP = Spaces[3];

type ColumnOffset = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
type ColumnSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

const BorderBoxWrapper = styled(Box)`
    box-sizing: border-box;
`;

type RowProps = BoxProps;

const Row: FC<RowProps> = (props: RowProps) => (
    <Box display="flex" flexWrap="wrap" marginRight={`-${GAP}`} {...props} />
);

interface ColumnProps extends BoxProps {
    span?: ColumnSpan;
    offset?: ColumnOffset;
}

const Column: FC<ColumnProps> = ({ span = 1, offset = 0, ...restProps }: ColumnProps) => {
    const marginLeft = `${offset * COLUMN_WIDTH_RATIO}%`;
    const width = `${span * COLUMN_WIDTH_RATIO}%`;

    return <BorderBoxWrapper flex={`0 0 ${width}`} marginLeft={marginLeft} paddingRight={GAP} {...restProps} />;
};

export { Row, RowProps, Column, ColumnProps };
