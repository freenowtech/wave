import 'styled-components';
import { BreakpointsArray, MediaQueries } from './essentials/Breakpoints/Breakpoints';
import { Spaces } from './essentials';

declare module 'styled-components' {
    export interface DefaultTheme {
        breakpoints: BreakpointsArray;
        fontSizes: string[];
        fontWeights: {
            normal: number;
            semibold: number;
            bold: number;
        };
        fonts: {
            normal: string;
            monospace: string;
        };
        mediaQueries: typeof MediaQueries;
        space: typeof Spaces;
        radii: string[];
        iconSizes: {
            small: number;
            medium: number;
            large: number;
        };
        shadows: {
            small: string;
            medium: string;
            large: string;
        };
    }
}
