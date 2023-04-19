import { Preview } from '@storybook/react';

export const preview: Preview = {
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
        backgrounds: {
            default: 'light',
            values: [
                { name: 'light', value: '#FFFFFF' },
                { name: 'dark', value: '#001E3E' }
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
        },
        options: {
            storySort: {
                order: ['Get Started']
            }
        }
    }
};

export default preview;

// (default)	0	-	Mobile (portrait)
// 30rem (480px)	1	small	Mobile (landscape)
// 48rem (768px)	2	medium	Tablet (portrait)
// 62rem (992px)	3	large	Tablet (landscape)
// 75rem (1200px)	4	xlarge	Laptops (and Desktops)
