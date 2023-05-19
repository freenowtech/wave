// .storybook/YourTheme.ts
import { create } from '@storybook/theming/create';
import logo from '../public/assets/freenow-logo.svg';

export default create({
    base: 'light',

    // Typography
    fontBase: '"YOURNOWSans-Medium", "Open Sans", sans-serif',
    fontCode: 'monospace',

    brandTitle: 'FREENOW',
    brandUrl: 'https://www.free-now.com/',
    brandImage: logo,
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
