import React from 'react';
import { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import { addons } from '@storybook/preview-api';
import { DocsContainer } from '@storybook/addon-docs';

import { GlobalStyle as ClassicColors } from '../src/essentials/Colors/Colors';
import { GlobalStyle as ModernColors } from '../src/essentials/Colors/ModernColors';
import { DarkScheme, LightScheme } from '../src/components/ColorScheme';

import { getSemanticValue } from '../src/utils/cssVariables';
import { LightTheme, DarkTheme } from './FreenowTheme';
import { useDarkMode } from 'storybook-dark-mode';

const THEMES = {
    classic: ClassicColors,
    modern: ModernColors
} as const;

export const withTheme = (Story, context) => {
    const Theme = THEMES[context.globals.theme];
    return (
        <>
            <Theme />
            <Story {...context} />
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
                order: ['Welcome', 'Get Started', 'Essentials', 'Components', 'Form Elements']
            }
        },
        docs: {
            container: props => {
                const scheme = useDarkMode() ? DarkTheme : LightTheme;
                const globals = props.context.store.globals.get();
                const WaveTheme = THEMES[globals.theme];

                return (
                    <>
                        <WaveTheme />
                        <DocsContainer {...props} theme={scheme} />
                    </>
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
                items: ['modern', 'classic'],
                dynamicTitle: true
            }
        }
    }
};

export default preview;
