import React from 'react';
import { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import { DocsContainer } from '@storybook/addon-docs';
import { useDarkMode } from 'storybook-dark-mode';

import { GlobalStyle as ClassicColors } from '../src/essentials/Colors/Colors';
import { GlobalStyle as ModernColors } from '../src/essentials/Colors/ModernColors';
import { createGlobalStyle, ColorPalette as ExperimentalColors } from '../src/essentials/experimental/Colors';
import { DarkScheme, LightScheme } from '../src/components/ColorScheme';

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

    return (
        <>
            <Colors />
            <div style={{ fontFamily: font }}>
                <Story {...context} />
            </div>
        </>
    );
};

export const withColorScheme = (Story, context) => {
    const SchemeWrapper = useDarkMode() ? DarkScheme : LightScheme;

    return (
        <SchemeWrapper>
            <Story {...context} />
        </SchemeWrapper>
    );
};

export const preview: Preview = {
    decorators: [withTheme, withColorScheme],

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
                const scheme = useDarkMode() ? DarkTheme : LightTheme;
                const globals = props.context.store.globals.get();
                const { Colors, font } = THEMES[globals.theme];

                return (
                    <div style={{ fontFamily: font }}>
                        <Colors />
                        <DocsContainer {...props} theme={scheme} />
                    </div>
                );
            },
            toc: {
                headingSelector: 'h2, h3'
            }
        },
        backgrounds: {
            disable: true
        },
        viewport: {
            viewports: {
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
        }
    }
};

export default preview;
