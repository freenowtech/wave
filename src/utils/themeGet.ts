import themeGet from '@styled-system/theme-get';
import { get as getKey } from 'styled-system';
import { theme } from '../essentials/theme';

export const get = key => {
    if (getKey(theme, key) === undefined) {
        console.warn(`Theme key "${key}" not found in theme.`);
    }

    return themeGet(key, getKey(theme, key));
};
