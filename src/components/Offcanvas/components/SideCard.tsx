import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import styled, { css } from 'styled-components';
import { Elevation } from '../../../essentials';
import { Card, CardProps } from '../../Card/Card';

const ANIMATION_DURATION = 150;
const TRANSITION_KEY = 'centered-card-animation';

const fromLeft = css`
    &.${TRANSITION_KEY}-appear, &.${TRANSITION_KEY}-enter {
        opacity: 0;
        transform: translate(calc(-50% - 1rem), 0%);
    }

    &.${TRANSITION_KEY}-appear-active, &.${TRANSITION_KEY}-enter-active {
        opacity: 1;
        transform: translate(0%, 0%);
    }

    &.${TRANSITION_KEY}-exit {
        opacity: 1;
        transform: translate(0%, 0%);
    }

    &.${TRANSITION_KEY}-exit-done, &.${TRANSITION_KEY}-exit-active {
        opacity: 0;
        transform: translate(-10%, 0%);
    }
`;

const fromRight = css`
    &.${TRANSITION_KEY}-appear, &.${TRANSITION_KEY}-enter {
        opacity: 0;
        transform: translate(calc(50% + 1rem), 0%);
    }

    &.${TRANSITION_KEY}-appear-active, &.${TRANSITION_KEY}-enter-active {
        opacity: 1;
        transform: translate(0%, 0%);
    }

    &.${TRANSITION_KEY}-exit {
        opacity: 1;
        transform: translate(0%, 0%);
    }

    &.${TRANSITION_KEY}-exit-done, &.${TRANSITION_KEY}-exit-active {
        opacity: 0;
        transform: translate(+10%, 0%);
    }
`;

const right = css`
    left: unset;
    right: 0;
    top: 0;
    bottom: 0;
`;

const left = css`
    left: 0;
    right: unset;
    top: 0;
    bottom: 0;
`;

const StyledCard = styled(Card)<{ side?: string }>`
    position: fixed;
    
    left: ${p => (p.side === 'right' ? 'unset' : 0)};
    right: ${p => (p.side === 'right' ? 0 : 'unset')};
    transform: translate(0%, 0%);
    z-index: ${Elevation.CARD_ON_DIMMING};
    height: 100%;
    will-change: transform, opacity;
    transition: transform ${ANIMATION_DURATION}ms ease-out, opacity ${ANIMATION_DURATION}ms ease-out;

    ${p => (p.side === 'right' ? fromRight : fromLeft)};
    ${p => (p.side === 'right' ? right : left)};

    @media (max-width: calc(${p => p.width} + 2rem)) {
        width: calc(100% - 2rem);
    }
`;

const SideCard: React.FC<CardProps & { visible: boolean; side: string }> = ({
    visible,
    width = '28.375rem',
    ...rest
}) => {
    return (
        <CSSTransition in={visible} classNames={TRANSITION_KEY} timeout={ANIMATION_DURATION} unmountOnExit appear>
            <StyledCard {...rest} width={width} level={300} />
        </CSSTransition>
    );
};

export { SideCard, ANIMATION_DURATION };
