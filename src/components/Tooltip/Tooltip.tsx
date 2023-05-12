import { PropsWithChildren } from 'react';
import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { usePopper } from 'react-popper';
import { Placement } from '@popperjs/core/lib/enums';
import { variant } from 'styled-system';
import { MediaQueries, SemanticColors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { Text } from '../Text/Text';
import { mapPlacementWithDeprecationWarning, TooltipPlacement } from './TooltipPlacement';

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
    inverted?: boolean;
    variant: string;
}

const TooltipBody = styled.div<TooltipBodyProps>`
    position: relative;
    background-color: ${p =>
        p.inverted ? SemanticColors.background.secondary : SemanticColors.background.primaryEmphasized};
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
        border-bottom-color: ${p =>
            p.inverted ? SemanticColors.background.secondary : SemanticColors.background.primaryEmphasized};
        margin-left: -0.25rem;

        ${arrowPlacementStyles}
    }
`;

interface TooltipProps {
    /**
     * The content that will be shown inside of the tooltip body
     */
    content: React.ReactNode;
    /**
     * Set the position of where the tooltip is attached to the target, defaults to "top"
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

const Tooltip: React.FC<PropsWithChildren<TooltipProps>> = ({
    content,
    children,
    placement = 'top',
    alwaysVisible = false,
    inverted = false
}) => {
    const [isVisible, setIsVisible] = React.useState(alwaysVisible);
    /**
     * triggerReference and contentReference are used with the Popper library in order to get the tooltip styles and attributes
     */
    const [triggerReference, setTriggerReference] = React.useState(undefined);
    const [contentReference, setContentReference] = React.useState(undefined);

    /**
     * Map the older placement values to Popper placement  as we need to get the correct placement for the tooltip from the Popper library
     * without introduce any breaking changes to the Tooltip component.
     * TODO: Remove in the next major release.
     */
    const mappedPlacement = mapPlacementWithDeprecationWarning(placement);

    const { styles, attributes } = usePopper(triggerReference, contentReference, {
        placement: mappedPlacement,
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
            {content && isVisible && (
                <TooltipBody
                    ref={setContentReference}
                    inverted={inverted}
                    style={{ ...styles.popper }}
                    variant={attributes.popper?.['data-popper-placement']}
                    {...attributes.popper}
                >
                    {dynamicContent}
                </TooltipBody>
            )}
        </>
    );
};

export { Tooltip, TooltipProps };
