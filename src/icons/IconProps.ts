import { ComponentPropsWithoutRef } from 'react';
import { SemanticCssVariable } from '../essentials/Colors/types';

export interface IconProps extends ComponentPropsWithoutRef<'svg'> {
    /**
     * Overrides the default color of the icon.
     */
    color?: SemanticCssVariable | 'inherit' | string;
    /**
     * Adjusts the size of the icon with defaults or the size in pixels.
     */
    size?: 'small' | 'medium' | 'large' | number;
}
