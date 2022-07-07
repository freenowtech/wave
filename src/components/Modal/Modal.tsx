import React, { useEffect, useState, ReactNode, useContext, useRef } from 'react';
import { createGlobalStyle } from 'styled-components';
import { WidthProps } from 'styled-system';
import { useIsEscKeyPressed } from '../../utils/hooks/useIsEscKeyPressed';
import { ANIMATION_DURATION as CARD_ANIMATION_DURATION, CenteredCard } from './components/CenteredCard';
import { ANIMATION_DURATION as DIMMING_ANIMATION_DURATION, DimmingFade } from './components/DimmingFade';
import { TopRightXIcon } from './components/TopRightXIcon';

type DismissFunc = () => void;

const DismissContext = React.createContext<DismissFunc>(undefined);

const useModalDismiss = (): DismissFunc => {
    const dismiss = useContext(DismissContext);

    if (dismiss === undefined) {
        throw new Error('useModalDismiss must be used within a <Modal />');
    }

    return dismiss;
};

interface ModalProps extends WidthProps {
    /**
     * Show the modal covering the whole page to focus the users attention
     */
    fullscreen?: boolean;
    /**
     * Makes the modal dismissible by the user (defaults to true)
     */
    dismissible?: boolean;
    /**
     * Function that will be called when the user intends to close the modal
     */
    onClose?: () => void;
    /**
     * Children can be rendered with a dismiss function as render prop. Calling
     * the dismiss function will close the Modal.
     */
    children?: ReactNode | ((dismiss: DismissFunc) => ReactNode);
}

const PreventBackgroundScroll = createGlobalStyle`
    body {
        overflow: hidden;
    }
`;

const ANIMATION_DURATION = Math.max(DIMMING_ANIMATION_DURATION, CARD_ANIMATION_DURATION);

/*
 * We define the types for the props twice because the render props won't be inferred correctly
 * when only using `React.FC<ModalProps>`. This leads to compiler errors when passing the
 * dismiss function.
 */
const Modal: React.FC<ModalProps> = ({ children, onClose, dismissible, ...rest }: ModalProps) => {
    const [visible, setVisible] = useState(true);
    const isEscKeyPressed = useIsEscKeyPressed();
    const closeTimeout = useRef(null);

    const handleClose: DismissFunc = () => {
        setVisible(false);

        if (onClose) {
            closeTimeout.current = setTimeout(() => onClose(), ANIMATION_DURATION);
        }
    };

    const handleDimmingClick = () => {
        if (dismissible && !rest.fullscreen) {
            handleClose();
        }
    };

    useEffect(() => {
        if (dismissible && isEscKeyPressed) {
            handleClose();
        }
    }, [dismissible, isEscKeyPressed]);

    useEffect(
        () => () => {
            if (closeTimeout.current) clearTimeout(closeTimeout.current);
        },
        []
    );

    const renderChildren = () => {
        if (typeof children === 'function') {
            return children(handleClose);
        }

        return children;
    };

    return (
        <DismissContext.Provider value={handleClose}>
            <DimmingFade
                onClick={handleDimmingClick}
                visible={visible}
                fullscreen={rest.fullscreen}
                data-testid="dimming-background"
            >
                {dismissible && rest.fullscreen && <TopRightXIcon data-testid="close-icon" onClick={handleClose} />}
            </DimmingFade>
            <CenteredCard visible={visible} {...rest}>
                {dismissible && !rest.fullscreen && <TopRightXIcon data-testid="close-icon" onClick={handleClose} />}
                {renderChildren()}
            </CenteredCard>
            <PreventBackgroundScroll />
        </DismissContext.Provider>
    );
};

Modal.defaultProps = {
    dismissible: true
};

export { Modal, ModalProps, useModalDismiss };
