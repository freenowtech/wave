// .storybook/manager.ts
import { addons } from '@storybook/manager-api';
import FreenowTheme from './FreenowTheme';

addons.setConfig({
    theme: FreenowTheme
});
