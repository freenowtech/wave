import React from 'react';
import styled from 'styled-components';
import { Colors } from '../..';
import { Text } from '../../../components';

import { Spaces } from '../Spaces';

interface SpaceSquareProps {
    space: string;
}

const SpaceSample = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 0 ${Spaces[1]};
`;

const SpacesWrapper = styled.div`
    display: flex;
    margin-top: ${Spaces[6]};
`;

const SpaceSquare = styled.div<SpaceSquareProps>`
    width: ${props => props.space};
    height: ${props => props.space};
    background-color: #ca0928;
`;

const SpacesContainer: React.FC = () => (
    <>
        <SpacesWrapper>
            {Spaces.map((space, index) => (
                <SpaceSample key={space}>
                    <Text fontSize={1} fontWeight="semibold" style={{ color: 'inherit' }}>
                        {index}
                    </Text>
                    <Text mt={1} fontSize={1} style={{ color: 'inherit' }}>
                        {space}
                    </Text>
                    <Text mb={2} fontSize={1} weak>
                        {Number(space.replace('rem', '')) * 16}px
                    </Text>
                    <SpaceSquare space={Spaces[index]} />
                </SpaceSample>
            ))}
        </SpacesWrapper>
    </>
);

export { SpacesContainer };
