import React from 'react';
import styled from 'styled-components';
import { Text } from '../../components';
import { Colors } from '../../essentials';
import { IconProps } from '../IconProps';

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    grid-gap: 2rem 1rem;
    max-width: 100%;
    margin-top: 2rem;
    margin-bottom: 6rem;
`;

const Cell = styled.div`
    width: 10rem;
    word-wrap: break-word;
`;

const IconComponentWrapper = styled.div`
    padding-bottom: 0.5rem;
    border-bottom: 0.0625rem solid ${Colors.AUTHENTIC_BLUE_50};
`;

export const Item = ({ children, name }) => {
    return (
        <Cell key={name}>
            <IconComponentWrapper>{children}</IconComponentWrapper>
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
