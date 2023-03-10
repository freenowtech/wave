import React from 'react';
import styled from 'styled-components';
import { Divider } from '../Divider';
import type { DividerOffset } from '../Divider';

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

const SectionPlaceholder = styled.div`
    flex: 1;
    height: '200px';
    border: 1px black solid;
    text-align: center;
    padding: 20px;
`;

const WrappedHorizontalDivider = (offset: DividerOffset): React.ReactElement => (
    <DividerColumnWrapper>
        <DividerSideElement>Element 1</DividerSideElement>
        <Divider offset={offset} />
        <DividerSideElement>Element 2</DividerSideElement>
    </DividerColumnWrapper>
);

const WrappedVerticalDivider = (offset: DividerOffset): React.ReactElement => (
    <DividerWrapper>
        <DividerSideElement>Element 1</DividerSideElement>
        <Divider vertical offset={offset} />
        <DividerSideElement>Element 2</DividerSideElement>
    </DividerWrapper>
);

export { WrappedHorizontalDivider, WrappedVerticalDivider, SectionPlaceholder };
