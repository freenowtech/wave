import { PropsWithChildren } from 'react';
import * as React from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { usePopper } from 'react-popper';
import { Placement } from '@popperjs/core/lib/enums';
import { Colors, MediaQueries } from '../../essentials';
import { get } from '../../utils/themeGet';
import { Text } from '../Text/Text';
import { mapTooltipPlacementToPopperPlacement, TooltipPlacement } from './TooltipPlacement';

const fadeAnimation = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`;

const TooltipBody = styled.div<Pick<TooltipProps, 'inverted'>>`
    position: relative;
    background-color: ${p => (p.inverted ? Colors.AUTHENTIC_BLUE_50 : Colors.AUTHENTIC_BLUE_900)};
    padding: 0.25rem 0.5rem;
    border-radius: ${get('radii.2')};
    opacity: 0;
    animation-name: ${fadeAnimation};
    animation-duration: 100ms;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;
    animation-delay: 400ms;
    max-width: 10rem;

    ${MediaQueries.small} {
        max-width: 18.75rem;
    }

    &::after {
        bottom: 100%;
        content: ' ';
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
        border: 0.25rem solid rgba(0, 0, 0, 0);
        border-bottom-color: ${p => (p.inverted ? Colors.AUTHENTIC_BLUE_50 : Colors.AUTHENTIC_BLUE_900)};
        margin-left: -0.25rem;
    }
`;

const PopStyles = createGlobalStyle`
    .bottom {
        &, ${TooltipBody} {
            &::after {
                right: 50%;
            }
        }
    }
    .bottom-end {
        &, ${TooltipBody} {
            &::after {
                right: 0.3rem;
            }
        }
    }
    .top-start {
        &, ${TooltipBody} {
            &::after {
                bottom: -0.5rem;
                transform: rotate(-180deg);
            }
        }
    }
    .top {
        &, ${TooltipBody} {
            &::after {
                bottom: -0.5rem;
                transform: rotate(-180deg);
                right: 50%;
            }
        }
    }
    .top-end {
        &, ${TooltipBody} {
            &::after {
                bottom: -0.5rem;
                transform: rotate(-180deg);
                right: 0.3rem;
            }
        }
    }
    .left {
        &, ${TooltipBody} {
            &::after {
                top: calc(50% - 0.25rem);
                left: auto;
                right: -0.5rem;
                transform: rotate(90deg);
            }
        }
    }
    .right {
        &, ${TooltipBody} {
            &::after {
                top: calc(50% - 0.25rem);
                left: -0.25rem;
                right: auto;
                transform: rotate(-90deg);
            }
        }
    }
`;

interface TooltipProps {
    /**
     * The content that will be shown inside of the tooltip body
     */
    content: React.ReactNode;
    /**
     * Set the position of where the tooltip is attached to the target, defaults to "top-center"
     */
    placement?: TooltipPlacement | Placement;
    /**
     * Adjust the component for display on dark backgrounds
     */
    inverted?: boolean;
    /**
     * Force the tooltip to always be visible, regardless of user interaction
     */
    alwaysVisible?: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({
    content,
    children,
    placement = 'top-center',
    alwaysVisible = false,
    inverted = false
}: PropsWithChildren<TooltipProps>) => {
    const [isVisible, setIsVisible] = React.useState(alwaysVisible);
    const [triggerReference, setTriggerReference] = React.useState(undefined);
    const [contentReference, setContentReference] = React.useState(undefined);

    const mappedPlacement = mapTooltipPlacementToPopperPlacement(placement) ?? (placement as Placement);

    const { styles, attributes } = usePopper(triggerReference, contentReference, {
        placement: mappedPlacement,
        strategy: 'fixed',
        modifiers: [
            {
                name: 'offset',
                enabled: true,
                options: {
                    offset: [0, 5]
                }
            },
            {
                name: 'flip',
                enabled: true
            }
        ]
    });

    let dynamicContent = content;

    if (typeof content === 'string') {
        dynamicContent = (
            <Text as="p" fontSize={0} inverted={!inverted}>
                {content}
            </Text>
        );
    }

    const handleVisibilityChange = (nextState: React.SetStateAction<boolean>) => {
        if (!alwaysVisible) {
            setIsVisible(nextState);
        }
    };

    return (
        <>
            {React.cloneElement(children as React.ReactElement, {
                onMouseOver: () => handleVisibilityChange(true),
                onMouseOut: () => handleVisibilityChange(false),
                ref: setTriggerReference
            })}
            {isVisible && (
                <TooltipBody
                    className={mappedPlacement}
                    ref={setContentReference}
                    inverted={inverted}
                    style={{ ...styles.popper }}
                    {...attributes.popper}
                >
                    {dynamicContent}
                </TooltipBody>
            )}
            <PopStyles />
        </>
    );
};

export { Tooltip, TooltipProps };
