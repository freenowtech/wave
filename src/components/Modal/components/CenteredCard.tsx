import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import styled, { css } from 'styled-components';
import { Elevation } from '../../../essentials';
import { Card, CardProps } from '../../Card/Card';

const ANIMATION_DURATION = 150;
const TRANSITION_KEY = 'centered-card-animation';

const fromTop = css`
    &.${TRANSITION_KEY}-appear, &.${TRANSITION_KEY}-enter {
        opacity: 0;
        transform: translate(-50%, calc(-50% - 1rem));
    }

    &.${TRANSITION_KEY}-appear-active, &.${TRANSITION_KEY}-enter-active {
        opacity: 1;
        transform: translate(-50%, -50%);
    }

    &.${TRANSITION_KEY}-exit {
        opacity: 1;
        transform: translate(-50%, -50%);
    }

    &.${TRANSITION_KEY}-exit-done, &.${TRANSITION_KEY}-exit-active {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.98);
    }
`;

const scaleUp = css`
    &.${TRANSITION_KEY}-appear, &.${TRANSITION_KEY}-enter {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.94);
    }

    &.${TRANSITION_KEY}-appear-active, &.${TRANSITION_KEY}-enter-active {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }

    &.${TRANSITION_KEY}-exit {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }

    &.${TRANSITION_KEY}-exit-done, &.${TRANSITION_KEY}-exit-active {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.98);
    }
`;

const StyledCard = styled(Card)<{ fullscreen?: boolean }>`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: ${Elevation.CARD_ON_DIMMING};
    max-height: calc(100% - 2rem);
    will-change: transform, opacity;
    transition: transform ${ANIMATION_DURATION}ms ease-out, opacity ${ANIMATION_DURATION}ms ease-out;

    ${p => (p.fullscreen ? scaleUp : fromTop)};

    @media (max-width: calc(${p => p.width} + 2rem)) {
        width: calc(100% - 2rem);
    }
`;

interface CenteredCardProps extends CardProps {
    visible: boolean;
    fullscreen?: boolean;
}

const CenteredCard: React.FC<React.PropsWithChildren<CenteredCardProps>> = ({ visible, width = '37.5rem', ...rest }) => (
    <CSSTransition in={visible} classNames={TRANSITION_KEY} timeout={ANIMATION_DURATION} unmountOnExit appear>
        <StyledCard {...rest} width={width} level={rest.fullscreen ? 0 : 300} />
    </CSSTransition>
);

export { CenteredCard, ANIMATION_DURATION };
