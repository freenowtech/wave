import * as React from 'react';
import styled from 'styled-components';
import { Placement } from '@popperjs/core/lib/enums';
import { usePopper } from 'react-popper';

import { theme } from '../../essentials/theme';
import { get } from '../../utils/themeGet';
import { Colors, Spaces } from '../../essentials';
import { ChevronDownIcon, ChevronUpIcon } from '../../icons/index';
import { useClickOutside } from '../../utils/hooks/useClickOutside';

import { Text } from '../Text/Text';

import { PopoverContent } from './PopoverContent';

interface PopoverRefObjectProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref: any;
}

const PopoverTrigger = styled.div.attrs({ theme })<PopoverRefObjectProps>`
    display: inline-block;
    width: fit-content;
    border-radius: ${get('radii.2')};
`;

const DefaultPopoverWrapper = styled.div.attrs({ theme })`
    position: relative;
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

const PopoverContentContainer = styled.div<PopoverRefObjectProps>`
    display: inline-block;
`;

const PopoverContentWrapper = styled.div`
    display: inline-block;
    box-sizing: border-box;
    width: auto;
    height: auto;
    z-index: 1000;
    box-shadow: ${get('shadows.small')};
    max-height: none;

    &:focus {
        outline: 0;
    }
`;

const KEY_CODE_MAP = {
    ENTER: 13,
    SPACE: 32,
    ESC: 27
};

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
     * Optional: Render popover content open by default
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

export const Popover: React.FC<PopoverProps> = ({
    children,
    content = '',
    placement = 'bottom-start',
    offset = 5,
    isOpen = false,
    onOpen,
    onClose
}: PopoverProps) => {
    const [triggerReference, setTriggerReference] = React.useState(undefined);
    const [contentReference, setContentReference] = React.useState(undefined);
    const popoverTriggerRef = React.useRef<HTMLDivElement>(null);
    const popoverContentRef = React.useRef<HTMLDivElement>(null);

    const [openByDefault, setOpenByDefault] = React.useState(isOpen);

    const [render, setRender] = React.useState(openByDefault);

    const { styles, attributes } = usePopper(triggerReference, contentReference, {
        placement,
        strategy: 'fixed',
        modifiers: [
            {
                name: 'offset',
                enabled: !!offset,
                options: {
                    offset: [0, offset]
                }
            },
            {
                name: 'flip',
                enabled: true
            }
        ]
    });

    const resolveCallback = React.useCallback(
        state => {
            if (onClose && !state) onClose();
            if (onOpen && state) onOpen();
        },
        [onClose, onOpen]
    );

    const hidePopover: () => void = React.useCallback(() => {
        if (openByDefault) {
            setOpenByDefault(false);
        } else {
            setRender(false);
        }
        resolveCallback(false);
    }, [openByDefault, resolveCallback]);

    const handleClose = React.useCallback(() => {
        if (render) {
            hidePopover();
        }
    }, [render, hidePopover]);

    const handleClick: () => void = React.useCallback(() => {
        if (render) {
            hidePopover();
        } else {
            setRender(true);
            resolveCallback(true);
        }
    }, [resolveCallback, setRender, render, hidePopover]);

    // handleOut - handles click outside the trigger
    const handleOut = React.useCallback(
        ev => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (popoverTriggerRef && popoverTriggerRef.current && !popoverTriggerRef.current.contains(ev.target)) {
                if (!openByDefault) {
                    handleClose();
                } else {
                    setOpenByDefault(false);
                    resolveCallback(false);
                }
            }
        },
        [openByDefault, popoverTriggerRef, handleClose, resolveCallback]
    );

    const handleKeyControl = (ev: React.KeyboardEvent<HTMLElement>) => {
        // eslint-disable-next-line default-case
        switch (ev.keyCode) {
            case KEY_CODE_MAP.ESC:
                handleClose();
                break;
            case KEY_CODE_MAP.ENTER:
                handleClick();
                break;
            case KEY_CODE_MAP.SPACE:
                handleClick();
        }
    };

    React.useEffect(() => {
        if (openByDefault) {
            setRender(true);
        } else {
            setRender(false);
        }
    }, [openByDefault, setRender]);

    useClickOutside(popoverContentRef, ev => handleOut(ev));

    return (
        <>
            <PopoverTrigger
                ref={setTriggerReference}
                onClick={handleClick}
                tabIndex={0}
                aria-describedby="popover-content"
                aria-haspopup
                onKeyDown={ev => handleKeyControl(ev)}
            >
                {typeof children === 'string' ? (
                    <DefaultPopoverWrapper
                        ref={popoverTriggerRef}
                        style={{ background: render ? Colors.AUTHENTIC_BLUE_50 : 'none' }}
                    >
                        <Text fontWeight="semibold">{children}</Text>
                        {!render ? (
                            <ChevronDownIcon size={20} style={{ marginLeft: Spaces[1] }} />
                        ) : (
                            <ChevronUpIcon size={20} style={{ marginLeft: Spaces[1] }} />
                        )}
                    </DefaultPopoverWrapper>
                ) : (
                    <div ref={popoverTriggerRef}>{children}</div>
                )}
            </PopoverTrigger>

            {render && (
                <PopoverContentContainer
                    id="popover-content"
                    ref={setContentReference}
                    // zIndex temporary until we have Portal component
                    style={{ ...styles.popper, zIndex: 9999 }}
                    {...attributes.popper}
                >
                    <PopoverContentWrapper ref={popoverContentRef}>
                        <PopoverContent>{content}</PopoverContent>
                    </PopoverContentWrapper>
                </PopoverContentContainer>
            )}
        </>
    );
};
