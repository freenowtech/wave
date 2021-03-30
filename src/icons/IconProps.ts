import { DetailedHTMLProps, SVGAttributes } from 'react';
import { Colors } from '../essentials';

export interface IconProps extends DetailedHTMLProps<SVGAttributes<SVGSVGElement>, SVGSVGElement> {
    color?: Colors | 'inherit';
    size?: 'small' | 'medium' | 'large' | number;
}
