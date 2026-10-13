import isPropValid from '@emotion/is-prop-valid';
import { styled } from 'styled-components';

export const InnerWrapper = styled.div.withConfig({ shouldForwardProp: isPropValid })<{ hideLabel?: boolean }>`
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
