import { useCallback, useEffect, useRef } from 'react';

/**
 * Watch for mutations in the DOM through the MutationObserver API
 *
 * @param element - DOM element or undefined
 * @param callback - callback to execute on mutations
 * @param options - Options passed to mutation observer
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
 */
export function useMutationObserver(
    element: Element | undefined,
    callback: MutationCallback,
    options: MutationObserverInit = {}
): void {
    const observer = useRef<MutationObserver | null>(null);

    const stop = useCallback(() => {
        if (!observer.current) return;

        observer.current.disconnect();
        // eslint-disable-next-line unicorn/no-null
        observer.current = null;
    }, []);

    useEffect(() => {
        if (!element) return;

        observer.current = new MutationObserver(callback);
        observer.current?.observe(element, options);

        // eslint-disable-next-line consistent-return
        return stop;
    }, [callback, stop, options, element]);

    useEffect(() => stop, []);
}
