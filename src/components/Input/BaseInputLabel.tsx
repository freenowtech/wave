import styled, { css } from 'styled-components';
import { theme } from '../../essentials/theme';
import { get } from '../../utils/themeGet';
import { InternalInputComponentProps } from './BaseInput';

const ANIMATION_DURATION = 100;

const activePositionBaseStyles = css`
    font-weight: ${get('fontWeights.semibold')};
`;

const BaseInputLabel = styled.label.attrs({ theme })<Pick<InternalInputComponentProps, 'size'>>`
    position: absolute;
    pointer-events: none;
    background-color: transparent;
    line-height: 1.5;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: calc(100% - 2rem);
    transition: top ${ANIMATION_DURATION}ms ease-out, left ${ANIMATION_DURATION}ms ease-out,
        padding ${ANIMATION_DURATION}ms ease-out, font-size ${ANIMATION_DURATION}ms ease-out,
        color ${ANIMATION_DURATION}ms ease-out, background ${ANIMATION_DURATION}ms ease-out;
`;

export { BaseInputLabel, activePositionBaseStyles };
