import { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
    stories: [
        '../docs/**/*.(stories|storybook).mdx',
        '../src/**/*.(stories|storybook).mdx',
        '../src/**/*.stories.@(ts|tsx)'
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-viewport'
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {}
    },
    docs: {
        autodocs: true
    }
};

export default config;
