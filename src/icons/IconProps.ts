import { ComponentPropsWithoutRef } from 'react';
import { Colors } from '../essentials';

export interface IconProps extends ComponentPropsWithoutRef<'svg'> {
    /**
     * Overrides the default color of the icon.
     */
    color?: Colors | 'inherit';
    /**
     * Adjusts the size of the icon with defaults or the size in pixels.
     */
    size?: 'small' | 'medium' | 'large' | number;
}
