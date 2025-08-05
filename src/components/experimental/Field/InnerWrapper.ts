import styled from 'styled-components';

export const InnerWrapper = styled.div<{ hideLabel?: boolean }>`
    position: relative;
    overflow: hidden;

    box-sizing: border-box;
    width: 100%;

    ${props =>
        !props.hideLabel &&
        `
        padding-top: var(--wave-exp-typescale-label-2-line-height);
    `}
`;
