export const parameters = {
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
    }
};
