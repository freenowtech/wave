import React from 'react';
import styled from 'styled-components';
import { Divider } from '../Divider';
import type DividerOffset from '../Divider';

const DividerWrapper = styled.div`
    height: auto;
    display: flex;
    width: 100%;
`;

const DividerColumnWrapper = styled(DividerWrapper)`
    flex-direction: column;
`;

const DividerSideElement = styled.div`
    height: auto;
    padding: 4;
`;

const WrappedHorizontalDivider = (offset: DividerOffset): React.ReactNode => (
    <DividerColumnWrapper>
        <DividerSideElement>Element 1</DividerSideElement>
        <Divider offset={offset} />
        <DividerSideElement>Element 2</DividerSideElement>
    </DividerColumnWrapper>
);

const WrappedVerticalDivider = (offset: DividerOffset): React.ReactNode => (
    <DividerWrapper>
        <DividerSideElement>Element 1</DividerSideElement>
        <Divider vertical offset={offset} />
        <DividerSideElement>Element 2</DividerSideElement>
    </DividerWrapper>
);

export { WrappedHorizontalDivider, WrappedVerticalDivider };
