import React from 'react';
import { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import { ClassicColors, ModernColors } from '../src/essentials/Colors/globalStyles';
import { getSemanticValue } from '../src/utils/cssVariables';

const THEMES = {
    classic: ClassicColors,
    modern: ModernColors
} as const;

export const withTheme = (Story, context) => {
    const Theme = THEMES[context.globals.theme];
    return (
        <>
            <Theme />
            <div className="wave">
                <Story {...context} />
            </div>
        </>
    );
};

export const preview: Preview = {
    decorators: [withTheme],
    parameters: {
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
            theme: themes.light,
            toc: {
                headingSelector: 'h2, h3'
            }
        },
        backgrounds: {
            default: 'auto',
            values: [
                { name: 'auto', value: getSemanticValue('background-page-default') },
                { name: 'light', value: getSemanticValue('background-surface-neutral-default') },
                { name: 'dark', value: getSemanticValue('background-surface-primary-default') }
            ]
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
