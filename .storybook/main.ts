import { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
    stories: ['../**/*.storybook.mdx', '../src/**/*.stories.@(ts|tsx)'],
    addons: ['@storybook/addon-docs'],

    framework: {
        name: '@storybook/react-vite',
        options: {}
    },

    staticDirs: ['../public'],

    typescript: {
        reactDocgen: 'react-docgen-typescript'
    }
};

export default config;
