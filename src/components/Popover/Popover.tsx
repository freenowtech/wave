import * as React from 'react';
import styled from 'styled-components';
import { Placement } from '@popperjs/core/lib/enums';
import { usePopper } from 'react-popper';

import { theme } from '../../essentials/theme';
import { get } from '../../utils/themeGet';
import { getSemanticValue } from '../../utils/cssVariables';
import { Spaces } from '../../essentials';
import { ChevronDownIcon, ChevronUpIcon } from '../../icons';
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
    border: 1px solid ${getSemanticValue('border-neutral-default')};
    padding: 0.8125rem ${Spaces[2]};
    border-radius: ${get('radii.2')};
    fill: currentColor;

    &:hover {
        cursor: pointer;
        color: ${getSemanticValue('foreground-on-background-neutral')};
        background-color: ${getSemanticValue('background-element-neutral-emphasized')};
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
     * Popover content padding
     */
    padding?: string | number;
    /**
     * Optional: Specify the Popover content placement (it changes automatically if the Popover content cannot fit inside the viewport with the selected placement)
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

const Popover: React.FC<PopoverProps> = ({
    children,
    content = '',
    padding = undefined,
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
        setRender(openByDefault);
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
                        style={{
                            color: render ? getSemanticValue('foreground-on-background-neutral') : undefined,
                            background: render ? getSemanticValue('background-element-neutral-emphasized') : undefined
                        }}
                    >
                        <Text fontWeight="semibold" style={{ color: 'inherit' }}>
                            {children}
                        </Text>
                        {!render ? (
                            <ChevronDownIcon
                                size={20}
                                color="inherit"
                                style={{ marginLeft: Spaces[1], fill: 'currentColor' }}
                            />
                        ) : (
                            <ChevronUpIcon
                                size={20}
                                color="inherit"
                                style={{ marginLeft: Spaces[1], fill: 'currentColor' }}
                            />
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
                    style={{ ...styles.popper, zIndex: 999 }}
                    {...attributes.popper}
                >
                    <PopoverContentWrapper ref={popoverContentRef}>
                        <PopoverContent padding={padding}>{content}</PopoverContent>
                    </PopoverContentWrapper>
                </PopoverContentContainer>
            )}
        </>
    );
};

export { Popover, PopoverProps };
