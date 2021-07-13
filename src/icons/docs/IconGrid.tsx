import React from 'react';
import styled from 'styled-components';
import { Box, Text } from '../../components';
import { Checkerboard } from '../../docs/Checkerboard';
import { IconProps } from '../IconProps';

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(6rem, auto));
    grid-gap: 2rem 1rem;
    max-width: 100%;
    margin-top: 2rem;
    margin-bottom: 2rem;
`;

const Cell = styled.div`
    width: 6rem;
    word-wrap: break-word;
`;

export const Item = ({ children, name }) => {
    return (
        <Cell key={name}>
            <Box p={2} position="relative" flexBasis="100%">
                <Box position="absolute" top={0} left={0} right={0} bottom={0}>
                    <Checkerboard />
                </Box>
                <Box position="relative" textAlign="center">
                    {children}
                </Box>
            </Box>
            <Text as="p" fontSize={1} weak mt={1}>
                {name}
            </Text>
        </Cell>
    );
};

interface IconGridProps {
    entries?: ReadonlyArray<[string, React.FC<IconProps>]>;
}

export const IconGrid: React.FC<IconGridProps> = ({ children, entries }) => {
    return (
        <Grid>
            {entries &&
                entries.map(([name, IconComponent]) => {
                    return (
                        <Item name={name} key={name}>
                            <IconComponent size={36} />
                        </Item>
                    );
                })}
            {children}
        </Grid>
    );
};
