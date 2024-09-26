import { Label as BaseLabel } from 'react-aria-components';
import styled, { css } from 'styled-components';
import { textStyles } from '../Text/Text';

export const flyingLabelStyles = css`
    top: 0;
    transform: translate3d(0, 0, 0);

    ${textStyles.variants.label2}
`;

export const Label = styled(BaseLabel)<{ $flying: boolean }>`
    position: absolute;
    top: 50%;
    color: currentColor;

    ${textStyles.variants.body1}

    transform: translate3d(0, calc(-${textStyles.variants.body1.lineHeight} / 2), 0);
    transform-origin: 0;

    transition: top 200ms ease, font-size 200ms ease, transform 200ms ease;

    ${props => props.$flying && flyingLabelStyles}
`;
