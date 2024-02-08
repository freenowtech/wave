import { useMemo } from 'react';

/**
 * useClosestColorScheme - Returns 'light' / 'dark' based on the enforced color scheme closest to the element passed or `undefined` when no color scheme is enforced
 */
export const useClosestColorScheme = (element?: HTMLElement): 'light' | 'dark' | undefined =>
    useMemo(() => {
        if (!element) return undefined;

        const closestParentWithColorScheme = element.closest('.wave');
        if (!closestParentWithColorScheme) return undefined;

        const hasEnforcedLightScheme = closestParentWithColorScheme.classList.contains('light-scheme');
        if (hasEnforcedLightScheme) return 'light';

        const hasEnforcedDarkScheme = closestParentWithColorScheme.classList.contains('dark-scheme');
        if (hasEnforcedDarkScheme) return 'dark';

        return undefined;
    }, [element]);
