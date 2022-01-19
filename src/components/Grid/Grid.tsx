import React, { FC } from 'react';
import { Box, BoxProps } from '../Box/Box';

type ColumnSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type ColumnOffset = 'auto' | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

type RowProps = BoxProps;

const Row: FC<RowProps> = (props: RowProps) => (
    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridColumnGap={3} {...props} />
);

interface ColumnProps extends BoxProps {
    span?: ColumnSpan;
    offset?: ColumnOffset;
}

const Column: FC<ColumnProps> = ({ span = 1, offset = 'auto', ...restProps }: ColumnProps) => {
    const gridColumnStart = offset === 'auto' ? 'auto' : offset + 1;
    const gridColumnEnd = `span ${span}`;

    return <Box gridColumn={`${gridColumnStart} / ${gridColumnEnd}`} {...restProps} />;
};

export { Row, RowProps, Column, ColumnProps };
