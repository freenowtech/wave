import themeGet from '@styled-system/theme-get';
import { get as getKey } from 'styled-system';
import { theme } from '../essentials/theme';

export const get = (key: string) => themeGet(key, getKey(theme, key));
