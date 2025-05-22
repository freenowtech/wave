import styled from 'styled-components';
import { Label } from './Label';

export const InnerWrapper = styled.div`
    position: relative;
    overflow: hidden;

    box-sizing: border-box;
    width: 100%;

    /* stylelint-disable selector-type-case, selector-type-no-unknown */
    &:has(${Label}) {
        padding-top: var(--wave-exp-typescale-label-2-line-height);
    }
`;
