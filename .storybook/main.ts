import path from 'path';
import { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
    stories: ['../**/*.storybook.mdx', '../src/**/*.stories.@(ts|tsx)'],

    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-viewport',
        'storybook-dark-mode'
    ],

    framework: {
        name: '@storybook/react-webpack5',
        options: {}
    },

    docs: {
        autodocs: true
    },

    staticDirs: ['../public'],

    typescript: {
        reactDocgen: 'react-docgen-typescript'
    },

    webpackFinal: async config => {
        // Storybook 7's react-dom-shim only aliases to the createRoot shim for
        // React 18 (version starts with "18"). React 19 falls through to the
        // legacy ReactDOM.render shim (react-16.js) which was removed in React 19.
        // Force the React 18 createRoot shim, which is compatible with React 19.
        config.resolve.alias = {
            ...config.resolve.alias,
            '@storybook/react-dom-shim': path.resolve(
                __dirname,
                '../node_modules/@storybook/react-dom-shim/dist/react-18'
            )
        };
        return config;
    }
};

export default config;
