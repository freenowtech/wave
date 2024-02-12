import { useEffect, useMemo, useState } from 'react';
import { useMutationObserver } from './useMutationObserver';

type ColorScheme = 'light' | 'dark' | undefined;

const getColorSchemeFromElement = (element?: Element): ColorScheme => {
    if (!element) return undefined;

    const hasEnforcedLightScheme = element.classList.contains('light-scheme');
    if (hasEnforcedLightScheme) return 'light';

    const hasEnforcedDarkScheme = element.classList.contains('dark-scheme');
    if (hasEnforcedDarkScheme) return 'dark';

    return undefined;
};

/**
 * Gets the enforced color scheme closest to the @param element
 *
 * @param element DOM element
 * @returns 'light' / 'dark' or `undefined` when no color scheme is enforced
 */
export const useClosestColorScheme = (element?: Element): ColorScheme => {
    const closestParentWithColorScheme = useMemo(() => element?.closest('.wave'), [element]);

    const [closestColorScheme, setClosestColorScheme] = useState<ColorScheme>();

    useEffect(() => {
        const colorScheme = getColorSchemeFromElement(closestParentWithColorScheme);
        setClosestColorScheme(colorScheme);
    }, [closestParentWithColorScheme]);

    const callback = mutations => {
        const lastMutation: MutationRecord = mutations[mutations.length - 1];
        const changedElement = lastMutation.target as Element;

        setClosestColorScheme(getColorSchemeFromElement(changedElement));
    };

    useMutationObserver(closestParentWithColorScheme, callback, { attributes: true, attributeFilter: ['class'] });

    return closestColorScheme;
};
