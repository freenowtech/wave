import React, { useEffect, useLayoutEffect, useState } from 'react';
import { I18nProvider } from 'react-aria-components';
import { Preview } from '@storybook/react-vite';
import { themes } from 'storybook/theming';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import { addons } from 'storybook/preview-api';
import { useDarkMode, DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';

const STORAGE_KEY = 'sb-addon-themes-3';

const getInitialDarkMode = (): boolean => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) return JSON.parse(stored).current === 'dark';
    } catch {}
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
};

import { GlobalStyle as ClassicColors } from '../src/essentials/Colors/Colors';
import { GlobalStyle as ModernColors } from '../src/essentials/Colors/ModernColors';
import { createGlobalStyle, ColorPalette as ExperimentalColors } from '../src/essentials/experimental/Colors';
import { LightTheme, DarkTheme } from '../src/docs/storybook-theme/FreenowTheme';

const THEMES = {
    classic: {
        Colors: ClassicColors,
        font: 'Open Sans'
    },
    modern: {
        Colors: ModernColors,
        font: 'Open Sans'
    },
    'experimental (rider)': {
        Colors: createGlobalStyle({
            accent: ExperimentalColors.red['50'],
            onAccent: ExperimentalColors.neutral['100'],
            accentDark: ExperimentalColors.red['60']
        }),
        font: 'Roboto Flex'
    },
    'experimental (driver)': {
        Colors: createGlobalStyle({
            accent: ExperimentalColors.red['30'],
            onAccent: ExperimentalColors.neutral['99'],
            accentDark: ExperimentalColors.red['90'],
            onAccentDark: ExperimentalColors.neutral['10']
        }),
        font: 'Roboto Flex'
    }
} as const;

export const withTheme = (Story, context) => {
    const { theme } = context.globals;
    const { Colors, font } = THEMES[theme];

    useLayoutEffect(() => {
        document.body.style.fontFamily = font;
    }, []);

    return (
        <>
            <Colors />
            <Story {...context} />
        </>
    );
};

export const withColorScheme = (Story, context) => {
    // useDarkMode from storybook-dark-mode works inside decorators (preview hook context)
    const isDark = useDarkMode();
    const schemeClass = isDark ? 'dark-scheme' : 'light-scheme';

    return (
        <div
            className={`${schemeClass} wave`}
            style={{ background: 'var(--wave-background-page-default)', minHeight: '100%' }}
        >
            <Story {...context} />
        </div>
    );
};

export const withI18nProvider = (Story, context) => {
    const { locale } = context.globals;

    return (
        <I18nProvider locale={locale}>
            <Story {...context} />
        </I18nProvider>
    );
};

export const preview: Preview = {
    decorators: [withTheme, withColorScheme, withI18nProvider],

    parameters: {
        darkMode: {
            dark: { ...themes.dark, ...DarkTheme },
            light: {
                ...themes.normal,
                ...LightTheme
            },
            lightClass: ['wave', 'light-scheme'],
            darkClass: ['wave', 'dark-scheme'],
            stylePreview: true
        },
        actions: { argTypesRegex: '^on[A-Z].*' },
        viewMode: 'docs',
        controls: {
            expanded: true,
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        },
        options: {
            storySort: {
                order: ['Welcome', 'Get Started', 'Essentials', 'Experimental', 'Components', 'Form Elements']
            }
        },
        docs: {
            container: props => {
                // Use React hooks + channel to track dark mode in docs context.
                // storybook-dark-mode's useDarkMode() uses preview-api hooks which
                // only work in decorator/story context, not here.
                const [isDark, setIsDark] = useState(getInitialDarkMode);
                useEffect(() => {
                    const channel = addons.getChannel();
                    channel.on(DARK_MODE_EVENT_NAME, setIsDark);
                    return () => channel.off(DARK_MODE_EVENT_NAME, setIsDark);
                }, []);

                const scheme = isDark ? DarkTheme : LightTheme;
                const globals = props.context.globals ?? {};
                const theme = (globals.theme as keyof typeof THEMES) ?? 'modern';
                const { Colors } = THEMES[theme] ?? THEMES.modern;

                return (
                    <>
                        <Colors />
                        <DocsContainer {...props} theme={scheme} />
                    </>
                );
            },
            toc: {
                headingSelector: 'h2, h3'
            }
        },
        backgrounds: {
            disabled: true
        },
        viewport: {
            options: {
                mobile: {
                    name: 'Mobile',
                    styles: {
                        height: '568px',
                        width: '320px'
                    },
                    type: 'mobile'
                },
                mobile_landscape: {
                    name: 'Mobile landscape',
                    styles: {
                        height: '320px',
                        width: '568px'
                    },
                    type: 'mobile'
                },
                tablet: {
                    name: 'Tablet',
                    styles: {
                        height: '1112px',
                        width: '834px'
                    },
                    type: 'tablet'
                },
                tablet_landscape: {
                    name: 'Tablet landscape',
                    styles: {
                        height: '834px',
                        width: '1112px'
                    },
                    type: 'tablet'
                },
                desktop: {
                    name: 'Desktop',
                    styles: {
                        height: '1080px',
                        width: '1920px'
                    },
                    type: 'desktop'
                }
            }
        }
    },

    globalTypes: {
        theme: {
            description: 'Global theme for components',
            defaultValue: 'modern',
            toolbar: {
                title: 'Theme',
                icon: 'paintbrush',
                items: ['modern', 'classic', 'experimental (rider)', 'experimental (driver)'],
                dynamicTitle: true
            }
        },
        locale: {
            description: 'Global locale for components',
            defaultValue: 'en-GB',
            toolbar: {
                title: 'Locale',
                icon: 'globe',
                items: ['en-GB', 'de-DE', 'es-ES'],
                dynamicTitle: true
            }
        }
    },

    tags: ['autodocs']
};

export default preview;
