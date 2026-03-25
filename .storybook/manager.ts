import { addons } from 'storybook/manager-api';
import { LightTheme, DarkTheme } from '../src/docs/storybook-theme/FreenowTheme';

addons.register('wave-theme', api => {
    const updateTheme = () => {
        const globals = api.getGlobals() as Record<string, unknown>;
        const colorScheme = (globals?.colorScheme as string) ?? 'system';
        const isDark =
            colorScheme === 'dark' ||
            (colorScheme === 'system' && (window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false));
        api.setOptions({ theme: isDark ? DarkTheme : LightTheme });
    };
    api.on('GLOBALS_UPDATED', updateTheme);
    updateTheme();
});
