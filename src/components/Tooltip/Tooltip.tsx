import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { createPortal } from 'react-dom';
import { usePopper } from 'react-popper';
import { Placement } from '@popperjs/core';
import { variant } from 'styled-system';
import { Elevation, MediaQueries } from '../../essentials';
import { getSemanticValue } from '../../utils/cssVariables';
import { get } from '../../utils/themeGet';
import { Text } from '../Text/Text';
import { InvertedColorScheme } from '../ColorScheme/InvertedColorScheme';

const fadeAnimation = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`;

const arrowPlacementStyles = variant({
    variants: {
        bottom: {
            right: 'calc(50% - 0.25rem)'
        },
        'bottom-end': {
            right: '0.3rem'
        },
        'top-start': {
            bottom: '-0.5rem',
            transform: 'rotate(-180deg)'
        },
        top: {
            bottom: '-0.5rem',
            transform: 'rotate(-180deg)',
            right: 'calc(50% - 0.25rem)'
        },
        'top-end': {
            bottom: '-0.5rem',
            transform: 'rotate(-180deg)',
            right: '0.3rem'
        },
        left: {
            top: 'calc(50% - 0.25rem)',
            left: 'auto',
            right: '-0.5rem',
            transform: 'rotate(90deg)'
        },
        'left-end': {
            bottom: '0.5rem',
            left: 'auto',
            right: '-0.5rem',
            transform: 'rotate(90deg)'
        },
        'left-start': {
            top: '0.5rem',
            left: 'auto',
            right: '-0.5rem',
            transform: 'rotate(90deg)'
        },
        right: {
            top: 'calc(50% - 0.25rem)',
            left: '-0.25rem',
            right: 'auto',
            transform: 'rotate(-90deg)'
        },
        'right-end': {
            bottom: '0.5rem',
            left: '-0.25rem',
            right: 'auto',
            transform: 'rotate(-90deg)'
        },
        'right-start': {
            top: '0.5rem',
            left: '-0.25rem',
            right: 'auto',
            transform: 'rotate(-90deg)'
        }
    }
});

interface TooltipBodyProps {
    variant: string;
}

const TooltipBody = styled.div<TooltipBodyProps>`
    position: relative;
    z-index: ${Elevation.TOOLTIP};
    background-color: ${getSemanticValue('background-backdrop')};
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
        border-bottom-color: ${
            // background colors are used because this border is used to create the arrow
            getSemanticValue('background-backdrop')
        };
        margin-left: -0.25rem;

        ${arrowPlacementStyles}
    }
`;

interface TooltipProps {
    /**
     * The content that will be shown inside the tooltip body
     */
    content: React.ReactNode;
    /**
     * Set the position of where the tooltip is attached to the target, defaults to "top"
     */
    placement?: Placement;
    /**
     * Force the tooltip to always be visible, regardless of user interaction
     */
    alwaysVisible?: boolean;
}

const Tooltip: React.FC<React.PropsWithChildren<TooltipProps>> = ({
    content,
    children,
    placement = 'top',
    alwaysVisible = false
}) => {
    const [isVisible, setIsVisible] = React.useState(alwaysVisible);
    /**
     * triggerReference and contentReference are used with the Popper library in order to get the tooltip styles and attributes
     */
    const [triggerReference, setTriggerReference] = React.useState(undefined);
    const [contentReference, setContentReference] = React.useState(undefined);

    const { styles, attributes } = usePopper(triggerReference, contentReference, {
        placement,
        modifiers: [
            {
                name: 'offset',
                enabled: true,
                options: {
                    offset: [0, 5]
                }
            }
        ]
    });

    let dynamicContent = content;

    if (typeof content === 'string') {
        dynamicContent = (
            <InvertedColorScheme>
                <Text as="p" fontSize={0}>
                    {content}
                </Text>
            </InvertedColorScheme>
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
            {content &&
                isVisible &&
                createPortal(
                    <TooltipBody
                        ref={setContentReference}
                        style={{ ...styles.popper }}
                        variant={attributes.popper?.['data-popper-placement']}
                        {...attributes.popper}
                    >
                        {dynamicContent}
                    </TooltipBody>,
                    document.body
                )}
        </>
    );
};

export { Tooltip, TooltipProps };
