import styled from 'styled-components';
import { Label } from './Label';

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

    /* For browsers that support :has(), we use this as a fallback */
    /* stylelint-disable selector-type-case, selector-type-no-unknown */
    &:has(${Label}:not(.visually-hidden)) {
        padding-top: var(--wave-exp-typescale-label-2-line-height);
    }
`;
