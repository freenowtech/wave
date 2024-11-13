import styled from 'styled-components';
import { ModalOverlayProps, ModalOverlay } from 'react-aria-components';
import { getSemanticHslValue } from '../../../essentials/experimental';
import { Elevation } from '../../../essentials';

type BackdropProps = ModalOverlayProps;

const Backdrop = styled(ModalOverlay)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: var(--visual-viewport-height);
    background: hsla(${getSemanticHslValue('on-surface')}, 60%);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: ${Elevation.DIMMING};

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
