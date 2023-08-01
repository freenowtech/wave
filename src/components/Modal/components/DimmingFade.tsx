import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import styled, { css } from 'styled-components';
import { Dimming } from '../../Dimming/Dimming';
import { getSemanticValue } from '../../../utils/cssVariables';

const TRANSITION_KEY = 'dimming-fade-animation';
const ANIMATION_DURATION = 200;

const fadeInAnimation = (maxOpacity = 0.6) => css`
    transition: opacity ${ANIMATION_DURATION}ms cubic-bezier(0.215, 0.61, 0.355, 1);

    &.${TRANSITION_KEY}-appear, &.${TRANSITION_KEY}-enter {
        opacity: 0;
    }

    &.${TRANSITION_KEY}-appear-active, &.${TRANSITION_KEY}-enter-active {
        opacity: ${maxOpacity};
    }

    &.${TRANSITION_KEY}-exit {
        opacity: ${maxOpacity};
    }

    &.${TRANSITION_KEY}-exit-done, &.${TRANSITION_KEY}-exit-active {
        opacity: 0;
    }
`;

const fullscreenDimming = css`
    background-color: ${getSemanticValue('background-surface-neutral-default')};
    opacity: 1;
`;

const DimmingFadeStyled = styled(Dimming)<{ fullscreen?: boolean }>`
    will-change: opacity;

    ${p => (p.fullscreen ? fadeInAnimation(1) : fadeInAnimation())};
    ${p => (p.fullscreen ? fullscreenDimming : undefined)}
`;

interface DimmingFadeProps {
    visible: boolean;
    fullscreen?: boolean;
    onClick: (event: React.MouseEvent) => void;
}

const DimmingFade: React.FC<React.PropsWithChildren<DimmingFadeProps>> = ({ visible, ...rest }: DimmingFadeProps) => (
    <CSSTransition in={visible} classNames={TRANSITION_KEY} timeout={ANIMATION_DURATION} unmountOnExit appear>
        <DimmingFadeStyled {...rest} />
    </CSSTransition>
);

export { DimmingFade, ANIMATION_DURATION };
