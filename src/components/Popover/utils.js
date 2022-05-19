import React, { useState, useEffect, useCallback, useRef } from 'react';

/**
 * transition - Helper function to generate transition properties rule
 */

type Transition = (properties: string[], duration: string, timingFunction: string) => string | null;

const transition: Transition = (properties, duration, timingFunction) =>
    properties.map(property => `${property} ${duration} ${timingFunction}`).join(',');

/**
 * useStateWithTimeout - Manages state with a Timeout
 */

type Return<S> = [S, (arg0: S) => void, (arg0: S) => void, () => void];

function useStateWithTimeout<S>(defaultValue: S, timeout?: number): Return<S> {
    const [state, setState] = useState(defaultValue);
    const timeoutRef = useRef(null);
    const setStateWithTimeout = useCallback(
        value => {
            if (typeof setTimeout === 'function') {
                timeoutRef.current = setTimeout(() => {
                    timeoutRef.current = undefined;
                    setState(value);
                }, timeout);
            }
        },
        [timeout]
    );
    const clearStateTimeout = useCallback(() => {
        if (timeoutRef.current !== null && typeof clearTimeout === 'function') {
            clearTimeout(timeoutRef.current);
        }
    }, []);
    useEffect(
        () => () => {
            clearStateTimeout();
        },
        [clearStateTimeout]
    );
    return [state, setState, setStateWithTimeout, clearStateTimeout];
}

/**
 * handleKeyDown - Handle opening/closing the Popover content with keyboard clicks
 */

// Map keys with which we can open/close the popover
const KEY_CODE_MAP = {
    ENTER: 13,
    SPACE: 32
};

// Type the handleKeyDown action
type HandleKeyDown = (onClick?: () => void, action?: () => void) => (ev: React.KeyboardEvent<HTMLElement>) => void;

const handleKeyDown: HandleKeyDown = (onClick, action) => ev => {
    if (ev.keyCode === KEY_CODE_MAP.ENTER) {
        if (onClick) {
            onClick(ev);
        }

        if (action) {
            action();
        }
    } else if (ev.keyCode === KEY_CODE_MAP.SPACE) {
        ev.preventDefault();
        if (onClick) {
            onClick(ev);
        }

        if (action) {
            action();
        }
    }
};

/**
 * useClickOutside - Handle closing the Popover content when we click outside it
 */

type UseClickOutside = (
    ref: { current: HTMLElement | null | undefined },
    handler: (ev: React.SyntheticEvent<HTMLLinkElement>) => void
) => void;

const useClickOutside: UseClickOutside = (ref, handler) => {
    useEffect(() => {
        const handleClose = (event: Event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                handler(event);
            }
        };
        window.addEventListener('mousedown', handleClose);
        window.addEventListener('touchstart', handleClose);
        return () => {
            window.removeEventListener('mousedown', handleClose);
            window.removeEventListener('touchstart', handleClose);
        };
    }, [handler, ref]);
};

export { handleKeyDown, useStateWithTimeout, transition, useClickOutside };
