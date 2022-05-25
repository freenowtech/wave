import React, { MutableRefObject } from 'react';
import styled, { css } from 'styled-components';
import { usePopper } from 'react-popper';
import type { Placement } from '@popperjs/core/lib/enums';

import { theme } from '../../essentials/theme';
import { get } from '../../utils/themeGet';
import { Spaces } from '../../essentials';

import { Card } from '../Card/Card';

import { mapTransitions } from '../../utils/transitions';
import { useClickOutside } from '../../utils/hooks/useClickOutside';

interface PopoverContentProps {
    /**
     * Popover content (can be any valid React Element or component)
     */
    children: React.ReactNode;
    /**
     * Popover Trigger Reference
     */
    triggerRef: HTMLElement | HTMLDivElement | null;
    /**
     * Is Popover currently displayed?
     */
    isShown: boolean;
    /**
     * Optional: Specify the Popover content placement (placement changes automatically, if Popover content cannot fit inside viewport with selected placement)
     */
    placement?: Placement;
    /**
     * Optional: Specify the Popover content offset (margin between Popover trigger and content)
     */
    offset?: number;
    /**
     * Passes the onClose callback
     */
    onClose: (event?: React.KeyboardEvent<HTMLDivElement>) => void;
}

interface StyledPopoverProps extends React.CSSProperties {
    isShown: boolean;
    transform?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    translate?: any;
    top?: string | number | undefined;
    left?: string | number | undefined;
    bottom?: string | number | undefined;
    right?: string | number | undefined;
    onKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => void;
    ref: MutableRefObject<HTMLDivElement>;
    tabIndex: number;
    role: string;
}

const StyledPopoverParent = styled.div.attrs({ theme })<StyledPopoverProps>`
    ${({ isShown, transform, top, left, bottom, right, position }) => css`
        box-sizing: border-box;
        position: ${position};
        top: ${top};
        left: ${left};
        bottom: ${bottom};
        right: ${right};
        transform: ${transform};
        transition: ${mapTransitions(['opacity'], '0.15s', 'ease-in-out')};
        width: auto;
        height: auto;
        z-index: 1000;
        box-shadow: ${get('shadows.small')};
        max-height: none;
        opacity: ${isShown ? '1' : '0'};

        &:focus {
            outline: 0;
        }
    `}
`;

const PopoverContentContainer = styled(Card)`
    display: block;
    padding: ${Spaces[2]};
`;

export const PopoverContent = ({
    children,
    isShown,
    onClose,
    offset,
    placement,
    triggerRef
}: PopoverContentProps): JSX.Element => {
    const popoverRef = React.useRef<HTMLDivElement | null>(null);

    const { styles, update } = usePopper(triggerRef, popoverRef.current, {
        placement,
        strategy: 'fixed',
        modifiers: [
            {
                name: 'offset',
                enabled: Boolean(offset),
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

    const { popper } = styles;

    React.useEffect(() => {
        // On each update we need to set focus on the popover content, so that we can close the Popover content with ESC key
        const timer = setTimeout(() => {
            popoverRef?.current?.focus();
        }, 100);

        // eslint-disable-next-line no-console
        if (update)
            update()
                .then((): void => undefined)
                // eslint-disable-next-line no-console
                .catch(error => console.log('Error updating Popover position -', error));

        return () => {
            clearTimeout(timer);
        };
    }, [update]);

    // Close the Popover content with click on ESC key
    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.keyCode === 27 && onClose) onClose(event);
    };

    // Hide the Popover content when user clicks outside
    useClickOutside(popoverRef, event => {
        onClose(event);
    });

    return (
        <>
            <StyledPopoverParent
                ref={popoverRef}
                tabIndex={0}
                role="tooltip"
                isShown={isShown}
                onKeyDown={handleKeyDown}
                {...popper}
            >
                <PopoverContentContainer level={200}>{children}</PopoverContentContainer>
            </StyledPopoverParent>
        </>
    );
};
