import { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
    stories: ['../**/*.storybook.mdx', '../src/**/*.stories.@(ts|tsx)'],
    addons: ['storybook-dark-mode', '@storybook/addon-docs'],

    framework: {
        name: '@storybook/react-vite',
        options: {}
    },

    staticDirs: ['../public'],

    typescript: {
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            tsconfigPath: './tsconfig.storybook.json'
        }
    }
};

export default config;
