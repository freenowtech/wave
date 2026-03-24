import { type ReactNode } from 'react';
import { type BoxProps } from '../Box/Box';

export type InfoBannerVariants = 'info' | 'success' | 'warning' | 'error';

export interface CardProps extends BoxProps {
    children: ReactNode;
    variant?: InfoBannerVariants;
    emphasized?: boolean;
}

export interface BoxWithVariant extends BoxProps {
    variant: InfoBannerVariants;
    emphasized: boolean;
}
