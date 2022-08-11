import { Placement } from '@popperjs/core';

export type TooltipPlacement =
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right'
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'center-left'
    | 'center-right';

export const TOOLTIP_TO_POPPER_PLACEMENT_MAP: { [key in TooltipPlacement]: Placement } = {
    'bottom-left': 'bottom-start',
    'bottom-center': 'bottom',
    'bottom-right': 'bottom-end',
    'top-left': 'top-start',
    'top-center': 'top',
    'top-right': 'top-end',
    'center-left': 'left',
    'center-right': 'right'
};
