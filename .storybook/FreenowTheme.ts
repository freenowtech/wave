// .storybook/FreenowTheme.ts
import { create } from '@storybook/theming/create';

export default create({
    base: 'light',

    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',

    brandTitle: 'FREENOW',
    brandUrl: 'https://wave.free-now.com/',
    brandImage: 'https://wave.free-now.com/freenow-logo.svg',
    brandTarget: '_self',

    //
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
