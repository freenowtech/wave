import React, { useEffect, useState, ReactNode, useContext } from 'react';
import { createGlobalStyle } from 'styled-components';
import { WidthProps } from 'styled-system';
import { useIsEscKeyPressed } from '../../utils/hooks/useIsEscKeyPressed';
import { ANIMATION_DURATION as CARD_ANIMATION_DURATION, SideCard } from './components/SideCard';
import { ANIMATION_DURATION as DIMMING_ANIMATION_DURATION, DimmingFade } from './components/DimmingFade';
import { TopRightXIcon } from './components/TopRightXIcon';

type DismissFunc = () => void;

const DismissContext = React.createContext<DismissFunc>(undefined);

const useOffcanvasDismiss = () => {
    const dismiss = useContext(DismissContext);

    if (dismiss === undefined) {
        throw new Error('useOffcanvasDismiss must be used within a <Offcanvas />');
    }

    return dismiss;
};

interface OffcanvasProps extends WidthProps {
    /**
     * Show the Offcanvas on the side of the page: left or right
     */
    side?: 'left' | 'right' | 'top' | 'bottom';
    /**
     * Makes the Offcanvas dismissible by the user (defaults to true)
     */
    dismissible?: boolean;
    /**
     * Function that will be called when the user intends to close the Offcanvas
     */
    onClose?: () => void;
    /**
     * Children can be rendered with a dismiss function as render prop. Calling
     * the dismiss function will close the Offcanvas.
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
 * when only using `React.FC<OffcanvasProps>`. This leads to compiler errors when passing the
 * dismiss function.
 */
const Offcanvas: React.FC<OffcanvasProps> = ({ children, onClose, dismissible, side, ...rest }: OffcanvasProps) => {
    const [visible, setVisible] = useState(true);
    const isEscKeyPressed = useIsEscKeyPressed();

    const handleClose: DismissFunc = () => {
        setVisible(false);

        if (onClose) {
            setTimeout(() => onClose(), ANIMATION_DURATION);
        }
    };

    const handleDimmingClick = () => {
        if (dismissible) handleClose();
    };

    useEffect(() => {
        if (dismissible && isEscKeyPressed) {
            handleClose();
        }
    }, [dismissible, isEscKeyPressed]);

    const renderChildren = () => {
        if (typeof children === 'function') {
            return children(handleClose);
        }

        return children;
    };

    return (
        <DismissContext.Provider value={handleClose}>
            <DimmingFade onClick={handleDimmingClick} visible={visible} data-testid="dimming-background" />
            <SideCard visible={visible} {...rest} side={side}>
                {dismissible && <TopRightXIcon data-testid="close-icon" onClick={handleClose} />}
                {renderChildren()}
            </SideCard>
            <PreventBackgroundScroll />
        </DismissContext.Provider>
    );
};

Offcanvas.defaultProps = {
    dismissible: true
};

export { Offcanvas, OffcanvasProps, useOffcanvasDismiss };
