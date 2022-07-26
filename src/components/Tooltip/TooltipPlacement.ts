import { Placement } from '@popperjs/core/lib/enums';

export type TooltipPlacement =
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right'
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'center-left'
    | 'center-right';

const tooltipPlacementMap = {
    'bottom-left': 'bottom-start',
    'bottom-center': 'bottom',
    'bottom-right': 'bottom-end',
    'top-left': 'top-start',
    'top-center': 'top',
    'top-right': 'top-end',
    'center-left': 'left',
    'center-right': 'right'
};

export const mapTooltipPlacementToPopperPlacement = (tooltipPlacement: TooltipPlacement | Placement): Placement =>
    tooltipPlacementMap[tooltipPlacement];
