import React, { ReactNode, useState, useContext } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled, { css } from 'styled-components';
import { variant } from 'styled-system';
import { Colors, Elevation } from '../../essentials';
import { theme } from '../../essentials/theme';
import { get } from '../../utils/themeGet';

export const ANIMATION_DURATION = 140;
const TRANSITION_KEY = 'banner-animation';

const fallDown = css`
    top: 0;

    &.${TRANSITION_KEY}-appear, &.${TRANSITION_KEY}-enter {
        opacity: 0;
        transform: translateY(-100%);
    }

    &.${TRANSITION_KEY}-appear-active, &.${TRANSITION_KEY}-enter-active {
        opacity: 1;
        transform: translateY(0);
    }

    &.${TRANSITION_KEY}-exit {
        opacity: 1;
        transform: translateY(0);
    }

    &.${TRANSITION_KEY}-exit-done, &.${TRANSITION_KEY}-exit-active {
        opacity: 0;
        transform: translateY(-100%);
    }
`;

const riseUp = css`
    bottom: 0;

    &.${TRANSITION_KEY}-appear, &.${TRANSITION_KEY}-enter {
        opacity: 0;
        transform: translateY(100%);
    }

    &.${TRANSITION_KEY}-appear-active, &.${TRANSITION_KEY}-enter-active {
        opacity: 1;
        transform: translateY(0);
    }

    &.${TRANSITION_KEY}-exit {
        opacity: 1;
        transform: translateY(0);
    }

    &.${TRANSITION_KEY}-exit-done, &.${TRANSITION_KEY}-exit-active {
        opacity: 0;
        transform: translateY(100%);
    }
`;

const bannerVariants = variant({
    variants: {
        info: {
            backgroundColor: Colors.AUTHENTIC_BLUE_550
        },
        success: {
            backgroundColor: Colors.POSITIVE_GREEN_900
        },
        danger: {
            backgroundColor: Colors.NEGATIVE_ORANGE_900
        }
    }
});

type DismissFunc = () => void;

interface BannerProps {
    /**
     * Overrides the banner position.
     */
    position?: 'top' | 'bottom';
    /**
     * Set the appropriate background color, screen position, and animation.
     */
    variant?: 'info' | 'success' | 'danger';
    /**
     * A function child can be used instead of a React element. This function is
     * called a function to dismiss the banner, which can be used to trigger the
     * animation and unmount the component afterwards.
     * ```jsx
     *    <Banner>
     *        {dismiss => (
     *            <button onClick={() => dismiss()} />
     *        )}
     *    </Transition>
     * ```
     */
    children?: ReactNode | ((dismiss: DismissFunc) => ReactNode);
    /**
     * A function that will be called after the user has dismissed the banner and
     * the banner has disappeared.
     */
    onClose?: () => void;
}

const getBannerPosition = (props: BannerProps) => {
    if (props.position) {
        return props.position === 'top' ? fallDown : riseUp;
    }

    return props.variant === 'danger' ? fallDown : riseUp;
};

const AnimatedBanner = styled.div.attrs({ theme })<BannerProps>`
    overflow: auto;
    box-sizing: border-box;
    padding: ${get('space.3')};
    background-color: ${Colors.AUTHENTIC_BLUE_550};

    position: fixed;
    left: 0;
    width: 100%;
    z-index: ${Elevation.BANNER};

    transition: transform ${ANIMATION_DURATION}ms ease-out, opacity ${ANIMATION_DURATION * 0.75}ms ease;

    ${props => getBannerPosition(props)}

    ${bannerVariants}
`;

const DismissContext = React.createContext<DismissFunc>(() => {});

const useBannerDismiss: () => DismissFunc = () => {
    const dismiss = useContext(DismissContext);

    if (dismiss === undefined) {
        throw new Error('useBannerDismiss must be used within a <Banner />');
    }

    return dismiss;
};

const Banner: React.FC<BannerProps> = ({ children, onClose, ...rest }: BannerProps) => {
    const [visible, setVisible] = useState(true);

    const dismissFunction = () => {
        setVisible(false);
        if (onClose) {
            setTimeout(() => onClose(), ANIMATION_DURATION);
        }
    };

    const renderChildren = () => {
        if (typeof children === 'function') {
            return children(dismissFunction) as ReactNode;
        }

        return children;
    };

    return (
        <CSSTransition in={visible} classNames={TRANSITION_KEY} timeout={ANIMATION_DURATION} unmountOnExit appear>
            <AnimatedBanner {...rest}>
                <DismissContext.Provider value={dismissFunction}>{renderChildren()}</DismissContext.Provider>
            </AnimatedBanner>
        </CSSTransition>
    );
};

export { Banner, BannerProps, useBannerDismiss, DismissFunc };
