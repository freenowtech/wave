import { Label as BaseLabel } from 'react-aria-components';
import styled, { css } from 'styled-components';
import { getSemanticValue } from '../../../essentials/experimental';

export const flyingLabelStyles = css`
    top: 0;
    transform: none;

    font-size: var(--wave-exp-typescale-label-2-size);
    font-weight: var(--wave-exp-typescale-label-2-weight);
    line-height: var(--wave-exp-typescale-label-2-line-height);
`;

export const Label = styled(BaseLabel)<{ $flying: boolean }>`
    position: absolute;
    top: 50%;
    color: currentColor;

    font-family: inherit;
    font-size: var(--wave-exp-typescale-body-1-size);
    font-weight: var(--wave-exp-typescale-body-1-weight);
    line-height: var(--wave-exp-typescale-body-1-line-height);
    white-space: nowrap;

    transform: translateY(-50%);
    transform-origin: 0;

    transition: top 200ms ease, font-size 200ms ease, transform 200ms ease;

    ${props => props.$flying && flyingLabelStyles}

    [data-invalid] & {
        color: ${getSemanticValue('negative')};
    }
`;
