import React, { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Spaces } from '../../essentials/Spaces/Spaces';
import { Box, BoxProps } from '../Box/Box';

const AMOUNT_OF_DECIMALS = 4;
const COLUMN_WIDTH = 100 / 12;
const GAP = Spaces[3];

type ColumnOffset = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
type ColumnSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

const BorderBoxWrapper = styled(Box)`
    box-sizing: border-box;
`;

type RowProps = BoxProps;

const Row: FC<PropsWithChildren<RowProps>> = props => (
    <Box display="flex" flexWrap="wrap" marginRight={`-${GAP}`} {...props} />
);

interface ColumnProps extends BoxProps {
    span?: ColumnSpan;
    offset?: ColumnOffset;
}

const Column: FC<PropsWithChildren<ColumnProps>> = ({ span = 1, offset = 0, ...restProps }) => {
    const marginLeft = offset * COLUMN_WIDTH;
    const width = span * COLUMN_WIDTH;

    return (
        <BorderBoxWrapper
            flex={`0 0 ${width.toFixed(AMOUNT_OF_DECIMALS)}%`}
            marginLeft={marginLeft ? `${marginLeft.toFixed(AMOUNT_OF_DECIMALS)}%` : undefined}
            paddingRight={GAP}
            {...restProps}
        />
    );
};

export { Row, RowProps, Column, ColumnProps };
