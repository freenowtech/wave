import React from 'react';

// Map keys which apply for handleKeyDown
const KEY_CODE_MAP = {
    ENTER: 13,
    SPACE: 32
};

// Type the handleKeyDown action
type HandleKeyDown = (
    onClick?: (ev?: React.KeyboardEvent<HTMLElement>) => void,
    action?: () => void
) => (ev: React.KeyboardEvent<HTMLElement>) => void;

/**
 * handleKeyDown - Handle triggering an action on keyboard keys clicks [ENTER, SPACE]
 */
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

export { handleKeyDown };
