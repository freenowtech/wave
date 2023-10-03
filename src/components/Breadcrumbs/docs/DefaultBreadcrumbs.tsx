import React from 'react';
import { Breadcrumbs } from '../Breadcrumbs';

export const DefaultBreadcrumbs = ({ ...props }) => (
    <Breadcrumbs {...props}>
        <Breadcrumbs.Link href="/path">Path</Breadcrumbs.Link>
        <Breadcrumbs.Link href="/path/to">to</Breadcrumbs.Link>
        <Breadcrumbs.Item>Glory</Breadcrumbs.Item>
    </Breadcrumbs>
);
