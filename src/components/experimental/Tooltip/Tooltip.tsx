import React from 'react';
import { OverlayArrow, Tooltip as AriaTooltip, TooltipTrigger, Focusable } from 'react-aria-components';

import type { TooltipProps as AriaTooltipProps, TooltipTriggerComponentProps } from 'react-aria-components';

import './tooltip.css';

interface TooltipProps {
    children: any;
    content: string;
    customTrigger?: boolean;
    hideArrow?: boolean;
    tooltipProps?: Omit<AriaTooltipProps, 'children'>;
    triggerProps?: Omit<TooltipTriggerComponentProps, 'children'>;
}

const Tooltip = ({
    children,
    content,
    triggerProps,
    tooltipProps,
    hideArrow = false,
    customTrigger = false
}: TooltipProps) => (
    <TooltipTrigger {...triggerProps}>
        {customTrigger ? <Focusable>{children}</Focusable> : children}
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
);

export { Tooltip, TooltipProps };
