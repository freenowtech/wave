import React from 'react';
import styled from 'styled-components';
import { Placement } from '@popperjs/core/lib/enums';

import { theme } from '../../essentials/theme';
import { get } from '../../utils/themeGet';
import { Colors, Spaces } from '../../essentials';
import { ChevronDownIcon, ChevronUpIcon } from '../../icons/index';

import { Text } from '../Text/Text';

import { PopoverContent } from './PopoverContent';
import { handleKeyDown } from '../../utils/hooks/useHandleKeyDown';
import { useStateWithTimeout } from '../../utils/hooks/useStateWithTimeout';

interface PopoverProps {
    /**
     * Popover Trigger (Only use Text, Link, Button or Icon component from @wave as a trigger)
     */
    children: React.ReactNode;
    /**
     * Popover content (can be any valid React Element or component containing React Elements)
     */
    content: React.ReactNode;
    /**
     * Optional: Specify the Popover content placement (placement changes automatically, if Popover content cannot fit inside viewport with selected placement)
     */
    placement?: Placement;
    /**
     * Optional: Specify the Popover content offset (margin between Popover trigger and content)
     */
    offset?: number;
    /**
     * Optional: Keep popover content open by default
     */
    isOpen?: boolean;
    /**
     * Optional: Define a callback for when Popover content is opened
     */
    onOpen?: () => void;
    /**
     * Optional: Define a callback for when Popover content is closed
     */
    onClose?: () => void;
}

const PopoverTrigger = styled.div.attrs({ theme })`
    display: inline-flex;
    border-radius: ${get('radii.2')};
`;

const DefaultPopoverWrapper = styled.div.attrs({ theme })`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${get('semanticColors.button.secondary.borderHover')};
    padding: 0.8125rem ${Spaces[2]};
    border-radius: ${get('radii.2')};

    &:hover {
        cursor: pointer;
        background-color: ${get('semanticColors.background.secondary')} !important;
    }
`;

/**
 * ** Primary UI element for content whose visibility can be toggled with a click on trigger element **
 *
 * Renders a UI component that opens a popup dialog on click of a trigger element.
 *
 * ---
 *
 * Popover components consist of 2 main elements:
 *  - **Popover Trigger** – an element that shows/hides the Popover.
 *  - **Popover Content** – card with content that is toggled by the Trigger.
 *
 * ---
 *
 * For **Trigger** you can use just a plain string (for default variant), or following components from Wave:
 * - **&lt;Text&gt;**
 * - **&lt;Button&gt;**
 * - **&lt;Button&gt; with Icon**
 * - **&lt;Icon&gt;**
 * - **&lt;Link&gt;**
 *
 * The **Popover Content** acts as a container for any content: text, form, or anything else...
 *
 * ---
 *
 * <br/>
 * #### Differences from a Tooltip component
 *
 * - Popover is toggled by clicking on (not hovering over) the Trigger. The second click (or click outside the Popover) hides the Popover.
 * - Popover scrolls with the page
 * - Popover content and trigger are not limited to text.
 *
 * ---
 *
 * #### Style Props
 *
 * The Popover supports:
 * - **placement** prop for specifying the Popover content attachment in relation to the Popover trigger
 * - **offset** prop for the margin between Trigger and Popover card.
 *
 */
export const Popover = ({
    children,
    content = '',
    placement = 'bottom-start',
    offset = 5,
    isOpen = false,
    onOpen,
    onClose
}: PopoverProps): JSX.Element => {
    const triggerRef = React.useRef<HTMLDivElement | null>(null);
    const [openByDefault, setOpenByDefault] = React.useState<boolean>(isOpen);

    const fadeInDuration = '0.05s';
    const transitionLength = React.useMemo(() => Number.parseFloat(fadeInDuration) * 1000, [fadeInDuration]);

    const [isShown, setIsShown, setIsShownWithTimeout, clearIsShownTimeout] = useStateWithTimeout<boolean>(
        false,
        transitionLength
    );

    const [render, setRender, setRenderWithTimeout, clearRenderTimeout] = useStateWithTimeout<boolean>(
        false,
        transitionLength
    );

    // This callback makes sure our onOpen or onClose callbacks (if defined) get called on each Popover click action
    const resolveCallback = React.useCallback(
        state => {
            if (onClose && !state) onClose();
            if (onOpen && state) onOpen();
        },
        [onClose, onOpen]
    );

    const handleOut: (ev) => void = React.useCallback(
        ev => {
            // If openByDefault -> ignore the custom handler
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (triggerRef.current && !triggerRef.current.contains(ev.target)) {
                if (!openByDefault) {
                    setIsShown(false);
                    clearIsShownTimeout();
                    setRenderWithTimeout(false);
                    resolveCallback(false);
                } else if (onClose) onClose();
            }
        },
        [clearIsShownTimeout, onClose, openByDefault, resolveCallback, setRenderWithTimeout, setIsShown]
    );

    // Handle click on the trigger vith mouse and/or keyboard
    const handleClick: () => void = React.useCallback(() => {
        if (isShown) {
            setIsShown(false);
            clearIsShownTimeout();
            setRenderWithTimeout(false);
            resolveCallback(false);

            if (openByDefault) {
                setOpenByDefault(false);
                resolveCallback(false);
            }
        } else {
            // If popover is not shown, render it (consequently clearing render timeout)
            setRender(true);
            clearRenderTimeout();
            setIsShownWithTimeout(true);
            resolveCallback(true);
        }
    }, [
        clearRenderTimeout,
        clearIsShownTimeout,
        openByDefault,
        resolveCallback,
        setRender,
        setRenderWithTimeout,
        setIsShown,
        setIsShownWithTimeout,
        isShown
    ]);

    React.useEffect(() => {
        // Making Popover content open by default, based on openByDefault
        if (openByDefault) {
            setRender(true);
            clearRenderTimeout();
            setIsShownWithTimeout(true);
        } else {
            setIsShown(false);
            clearIsShownTimeout();
            setRenderWithTimeout(false);
        }
    }, [
        openByDefault,
        clearRenderTimeout,
        clearIsShownTimeout,
        setRender,
        setIsShown,
        setIsShownWithTimeout,
        setRenderWithTimeout
    ]);

    return (
        <>
            <PopoverTrigger ref={triggerRef} onClick={handleClick} tabIndex={0} onKeyDown={handleKeyDown(handleClick)}>
                {/* If plain string is passed as the trigger, we apply the default state styling */}
                {typeof children === 'string' ? (
                    <DefaultPopoverWrapper style={{ background: render ? Colors.AUTHENTIC_BLUE_50 : 'none' }}>
                        <Text fontWeight="semibold">{children}</Text>
                        {!render ? (
                            <ChevronDownIcon size={20} style={{ marginLeft: Spaces[1] }} />
                        ) : (
                            <ChevronUpIcon size={20} style={{ marginLeft: Spaces[1] }} />
                        )}
                    </DefaultPopoverWrapper>
                ) : (
                    // ...otherwise, we use the passed component as a trigger
                    children
                )}
            </PopoverTrigger>

            {render && (
                <PopoverContent
                    isShown={isShown}
                    triggerRef={triggerRef.current}
                    onClose={handleOut}
                    placement={placement}
                    offset={offset}
                >
                    {content}
                </PopoverContent>
            )}
        </>
    );
};
