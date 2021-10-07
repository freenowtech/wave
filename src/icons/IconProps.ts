import { ComponentPropsWithoutRef } from 'react';
import { Colors } from '../essentials';

export interface IconProps extends ComponentPropsWithoutRef<'svg'> {
    color?: Colors | 'inherit';
    size?: 'small' | 'medium' | 'large' | number;
}
