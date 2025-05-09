import styled from 'styled-components';
import { ModalOverlayProps, ModalOverlay } from 'react-aria-components';
import { getSemanticHslValue } from '../../../essentials/experimental';
import { Elevation } from '../../../essentials';

interface BackdropProps extends ModalOverlayProps {
    isBackdropVisible?: boolean;
}

const Backdrop = styled(ModalOverlay)<{ isBackdropVisible?: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: var(--visual-viewport-height);
    background: ${props =>
        props.isBackdropVisible !== false ? `hsla(${getSemanticHslValue('on-surface')}, 60%)` : 'transparent'};
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: ${Elevation.DIMMING};

    ${props =>
        props.isBackdropVisible === false &&
        `
        pointer-events: none;
        
        & > * {
            pointer-events: auto;
        }
    `}

    &[data-entering] {
        animation: backdrop-fade 200ms;
    }

    &[data-exiting] {
        animation: backdrop-fade 150ms reverse ease-in;
    }

    @keyframes backdrop-fade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export { Backdrop, BackdropProps };
