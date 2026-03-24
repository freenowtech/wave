import { useCallback, useEffect, useRef } from 'react';

/**
 * Watch for mutations in the DOM through the MutationObserver API
 *
 * @param element - DOM element or undefined
 * @param callback - callback to execute on mutations
 * @param options - Options passed to mutation observerRef
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
 */
export function useMutationObserver(
    element: Element | undefined,
    callback: MutationCallback,
    options: MutationObserverInit = {}
): void {
    const observerRef = useRef<MutationObserver | null>(null);

    const stop = useCallback(() => {
        if (!observerRef.current) return;

        observerRef.current.disconnect();

        observerRef.current = null;
    }, []);

    useEffect(() => {
        if (!element) return;

        observerRef.current = new MutationObserver(callback);
        observerRef.current?.observe(element, options);

        return stop;
    }, [callback, stop, options, element]);

    useEffect(() => stop, []);
}
