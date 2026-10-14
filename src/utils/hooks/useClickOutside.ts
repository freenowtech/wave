import { useEffect } from 'react';

/**
 * useClickOutside - Handle click outside a referenced element (e.g. Popover)
 */
type UseClickOutside = (ref: { current: HTMLElement | null | undefined }, handler: (ev: Event) => void) => void;

const useClickOutside: UseClickOutside = (ref, handler) => {
    useEffect(() => {
        const handleClose = (event: Event) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
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

export { useClickOutside };
