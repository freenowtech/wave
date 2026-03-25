import baseThemeGet from '@styled-system/theme-get';
import { get as getKey } from 'styled-system';
import { theme } from '../../essentials/experimental/theme';

// fixme: currently we assume that we always return string or number from the theme
// not sure how we can get the correct type based on the path from the theme file

type ThemeGetFunc = (path: string) => (props: any) => string | number;

export const get: ThemeGetFunc = (key: string) => baseThemeGet(key, getKey(theme, key));
