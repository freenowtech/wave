export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    viewMode: 'docs',
    controls: {
        expanded: true,
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    }
};
