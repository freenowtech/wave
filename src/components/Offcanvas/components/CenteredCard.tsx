import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import styled, { css } from 'styled-components';
import { Elevation } from '../../../essentials';
import { Card, CardProps } from '../../Card/Card';

const ANIMATION_DURATION = 150;
const TRANSITION_KEY = 'centered-card-animation';

const inFrom = {
    top: css`
        &.${TRANSITION_KEY}-appear, &.${TRANSITION_KEY}-enter {
            opacity: 0;
            transform: translate(0%, calc(-50% - 1rem));
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
            transform: translate(-0%, -50%);
        }
    `,
    bottom: css`
        &.${TRANSITION_KEY}-appear, &.${TRANSITION_KEY}-enter {
            opacity: 0;
            transform: translate(0%, calc(50% + 1rem));
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
            transform: translate(0%, 10%);
        }
    `
};

const position = {
    top: css`
        left: 0;
        right: 0;
        top: 0;
        bottom: unset;
    `,
    bottom: css`
        left: 0;
        right: 0;
        top: unset;
        bottom: 0;
    `
};

const StyledCard = styled(Card)<{ side?: string }>`
    position: fixed;

    left: ${p => (p.side === 'right' ? 'unset' : 0)};
    right: ${p => (p.side === 'right' ? 0 : 'unset')};
    transform: translate(0%, 0%);
    z-index: ${Elevation.CARD_ON_DIMMING};
    width: 100%;
    will-change: transform, opacity;
    transition: transform ${ANIMATION_DURATION}ms ease-out, opacity ${ANIMATION_DURATION}ms ease-out;

    ${p => inFrom[p.side]};
    ${p => position[p.side]};

    @media (max-width: calc(${p => p.width} + 2rem)) {
        width: calc(100% - 2rem);
    }
`;

interface CenteredCardProps extends CardProps {
    visible: boolean;
    side: string;
}

const CenteredCard: React.FC<React.PropsWithChildren<CenteredCardProps>> = ({
    visible,
    height = '28.375rem',
    ...rest
}: CenteredCardProps) => (
    <CSSTransition in={visible} classNames={TRANSITION_KEY} timeout={ANIMATION_DURATION} unmountOnExit appear>
        <StyledCard {...rest} height={height} level={300} />
    </CSSTransition>
);

export { CenteredCard, ANIMATION_DURATION };
