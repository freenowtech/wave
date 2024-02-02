// .storybook/FreenowTheme.ts
import { create } from '@storybook/theming/create';

const baseVars = {
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',

    brandTitle: 'FREENOW',
    brandUrl: 'https://wave.free-now.com/',
    brandImage: 'https://wave.free-now.com/freenow-logo.svg',
    brandTarget: '_self'
};

export const LightTheme = create({
    base: 'light',
    ...baseVars,

    colorPrimary: '#CA0928',
    colorSecondary: '#585C6D',

    // UI
    appBg: '#ffffff',
    appContentBg: '#ffffff',
    appBorderColor: '#585C6D',
    appBorderRadius: 4,

    // Text colors
    textColor: '#10162F',
    textInverseColor: '#ffffff',

    // Toolbar default and active colors
    barTextColor: '#9E9E9E',
    barSelectedColor: '#585C6D',
    barBg: '#ffffff',

    // Form colors
    inputBg: '#ffffff',
    inputBorder: '#10162F',
    inputTextColor: '#10162F',
    inputBorderRadius: 2
});

export const DarkTheme = create({
    base: 'dark',
    appContentBg: 'hsl(0deg, 0%, 5%)',
    appPreviewBg: '#222425',
    inputTextColor: 'blue',
    ...baseVars
});
