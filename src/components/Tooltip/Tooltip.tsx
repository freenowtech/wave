import { PropsWithChildren } from 'react';
import * as React from 'react';
import TetherComponent from 'react-tether';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { Colors, Elevation, MediaQueries } from '../../essentials';
import { get } from '../../utils/themeGet';
import { Text } from '../Text/Text';
import { TooltipPlacement } from './TooltipPlacement';
import { getAttachmentFromPlacement } from './util/getAttachmentFromPlacement';

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

const GlobalTetherStyles = createGlobalStyle`
    body > .tether-element {
        z-index: ${Elevation.TOOLTIP};
    }

    .tether-target-attached-bottom {
        & > ${TooltipBody} {
            margin-top: 0.5rem;

            &::after {
                top: -0.5rem;
            }
        }
    }

    .tether-target-attached-top {
        & > ${TooltipBody} {
            top: -0.5rem;

            &::after {
                bottom: -0.5rem;
                transform: rotate(-180deg);
            }
        }
    }
    
    .tether-target-attached-center {
        & > ${TooltipBody} {
            &::after {
                left: 50%;
            }
        }
    }
    
    .tether-target-attached-left {
        & > ${TooltipBody} {
            &::after {
                left: 1rem;
            }
        }
    }

    .tether-target-attached-right {
        & > ${TooltipBody} {
            &::after {
                right: 1rem;
            }
        }
    }

    .tether-target-attached-middle.tether-target-attached-right {
        & > ${TooltipBody} {
            margin-left: 0.5rem;

            &::after {
                top: calc(50% - 0.25rem);
                left: -0.25rem;
                right: auto;
                transform: rotate(-90deg);
            }
        }
    }

    .tether-target-attached-middle.tether-target-attached-left {
        & > ${TooltipBody} {
           left: -0.5rem;

            &::after {
                top: calc(50% - 0.25rem);
                left: auto;
                right: -0.5rem;
                transform: rotate(90deg);
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
    placement?: TooltipPlacement;
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
            <TetherComponent
                {...getAttachmentFromPlacement(placement)}
                constraints={[
                    {
                        to: 'window',
                        attachment: 'together'
                    }
                ]}
                renderTarget={ref =>
                    React.cloneElement(children as React.ReactElement, {
                        onMouseOver: () => handleVisibilityChange(true),
                        onMouseOut: () => handleVisibilityChange(false),
                        ref
                    })
                }
                renderElement={(ref: React.RefObject<HTMLDivElement>) =>
                    isVisible && (
                        <TooltipBody ref={ref} inverted={inverted}>
                            {dynamicContent}
                        </TooltipBody>
                    )
                }
            />
            <GlobalTetherStyles />
        </>
    );
};

export { Tooltip, TooltipProps };
