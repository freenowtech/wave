import React from 'react';
import styled from 'styled-components';
import { Box, Headline, Text } from '../../src/components';
import { Colors, Spaces } from '../../src/essentials';

const Wrapper = styled.div`
    background-color: ${Colors.ACTION_BLUE_900};

    padding: ${Spaces[2]} ${Spaces[3]};
    margin-top: -${Spaces[3]};
    margin-left: -${Spaces[3]};
    margin-right: -${Spaces[3]};

    @media screen and (min-width: 48rem) {
        padding: ${Spaces[2]} ${Spaces[6]};
        margin-top: -${Spaces[6]};
        margin-left: -${Spaces[6]};
        margin-right: -${Spaces[6]};
    }
`;

export const TitleCard = ({ title, children }) => {
    return (
        <Wrapper>
            <Headline inverted marginTop={{ _: '3rem', medium: '12rem' }}>
                {title}
            </Headline>
            <Box maxWidth={['100%', '100%', '100%', '100%', '60%']} mt={3} mb={2}>
                <Text as="p" inverted>
                    {children}
                </Text>
            </Box>
        </Wrapper>
    );
};
