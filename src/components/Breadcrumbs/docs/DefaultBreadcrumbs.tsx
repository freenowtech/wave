import React from 'react';
import { Breadcrumbs, BreadcrumbsProps } from '../Breadcrumbs';

export const DefaultBreadcrumbs: React.FC<BreadcrumbsProps> = ({ ...props }: BreadcrumbsProps) => (
    <Breadcrumbs {...props}>
        <Breadcrumbs.Link href="/path">Path</Breadcrumbs.Link>
        <Breadcrumbs.Link href="/path/to">to</Breadcrumbs.Link>
        <Breadcrumbs.Item>Glory</Breadcrumbs.Item>
    </Breadcrumbs>
);
