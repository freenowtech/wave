import { autoPlacement, flip, type Middleware, type Placement as FloatingPlacement } from '@floating-ui/react';

/**
 * The placements of react-popper, which positioned Tooltip and Popover in Wave 2: the ones of Floating UI, plus `auto`,
 * `auto-start` and `auto-end` to use the side with the most space
 */
export type Placement = FloatingPlacement | 'auto' | 'auto-start' | 'auto-end';

/**
 * Translates a placement to Floating UI. The `auto` placements become the autoPlacement middleware, the others move to
 * the opposite side with flip when they don't fit. Floating UI doesn't allow both middlewares together.
 */
export const getFloatingPlacement = (
    placement: Placement
): { placement: FloatingPlacement; middleware: Middleware } => {
    switch (placement) {
        case 'auto': {
            return { placement: 'bottom', middleware: autoPlacement() };
        }
        case 'auto-start': {
            return { placement: 'bottom-start', middleware: autoPlacement({ alignment: 'start' }) };
        }
        case 'auto-end': {
            return { placement: 'bottom-end', middleware: autoPlacement({ alignment: 'end' }) };
        }
        default: {
            return { placement, middleware: flip() };
        }
    }
};
