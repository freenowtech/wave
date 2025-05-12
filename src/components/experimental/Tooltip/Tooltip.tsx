import React from 'react';
import { createGlobalStyle } from 'styled-components';

import {
    OverlayArrow,
    Tooltip as AriaTooltip,
    TooltipTrigger
    // Focusable
} from 'react-aria-components';

import type { TooltipProps as AriaTooltipProps, TooltipTriggerComponentProps } from 'react-aria-components';

interface TooltipProps {
    children: any;
    content: string;
    customTrigger?: boolean;
    hideArrow?: boolean;
    tooltipProps?: Omit<AriaTooltipProps, 'children'>;
    triggerProps?: Omit<TooltipTriggerComponentProps, 'children'>;
}

const TooltipStyles = createGlobalStyle`
    .react-aria-Tooltip {

        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.20);
        border-radius: 4px;
        background: var(--wave-exp-color-inverse-surface);
        color: var(--wave-exp-color-inverse-on-surface);
        forced-color-adjust: none;
        outline: none;
        padding: 2px 8px;
        max-width: 150px;
        
        /* fixes FF gap */
        transform: translate3d(0, 0, 0);
        transition: transform 200ms, opacity 200ms;

        & .react-aria-OverlayArrow svg {
            display: block;
            fill: var(--wave-exp-color-inverse-surface);
        }

        &[data-entering],
        &[data-exiting] {
            transform: var(--origin);
            opacity: 0;
        }

        &[data-placement='top'] {
            margin-bottom: 8px;
            
            --origin: translateY(4px);
        }

        &[data-placement='bottom'] {
            margin-top: 8px;
            
            --origin: translateY(-4px);
            & .react-aria-OverlayArrow svg {
                transform: rotate(180deg);
            }
        }

        &[data-placement='right'] {
            margin-left: 8px;
            
            --origin: translateX(-4px);
            & .react-aria-OverlayArrow svg {
                transform: rotate(90deg);
            }
        }

        &[data-placement='left'] {
            margin-right: 8px;
            
            --origin: translateX(4px);
            & .react-aria-OverlayArrow svg {
                transform: rotate(-90deg);
            }
        }
    }
`;

const Tooltip = ({
    children,
    content,
    triggerProps,
    tooltipProps,
    hideArrow = false
}: // customTrigger = false
TooltipProps): JSX.Element => (
    <>
        <TooltipStyles />
        <TooltipTrigger {...triggerProps}>
            {/* {customTrigger ? <Focusable>{children}</Focusable> : children} */}
            {children}
            <AriaTooltip {...tooltipProps}>
                {!hideArrow && (
                    <OverlayArrow>
                        <svg width={8} height={8} viewBox="0 0 8 8">
                            <path d="M0 0 L4 4 L8 0" />
                        </svg>
                    </OverlayArrow>
                )}
                {content}
            </AriaTooltip>
        </TooltipTrigger>
    </>
);

export { Tooltip, TooltipProps };
