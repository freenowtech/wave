import { ReactNode } from 'react';

export interface AccordionProps {
    heading?: string;
    description?: string;
    info?: string;
    buttonLabel?: string;
    variant?: 'compact' | 'default';
    defaultExpanded?: boolean;
    children: ReactNode;
    onExpand?: () => void;
    onCollapse?: () => void;
}
