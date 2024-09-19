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
    }
};

export default config;
