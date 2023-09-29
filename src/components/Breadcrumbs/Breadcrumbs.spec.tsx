import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { Breadcrumbs } from './Breadcrumbs';

const renderBreadCrumbs = () =>
    render(
        <Breadcrumbs>
            <Breadcrumbs.Link href="/path">Path</Breadcrumbs.Link>
            <Breadcrumbs.Link href="/to">to</Breadcrumbs.Link>
            <Breadcrumbs.Item>Glory</Breadcrumbs.Item>
        </Breadcrumbs>
    );

describe('Breadcrumbs', () => {
    it('renders a <a> if we use Link', () => {
        expect(render(<Breadcrumbs.Link>Children</Breadcrumbs.Link>)).toMatchHtmlTag('a');
    });

    it('renders a <span> if we use Item', () => {
        expect(render(<Breadcrumbs.Item>Children</Breadcrumbs.Item>)).toMatchHtmlTag('span');
    });

    it('renders the children', () => {
        renderBreadCrumbs();
        expect(screen.getByText('Path')).toBeInTheDocument();
        expect(screen.getByText('to')).toBeInTheDocument();
        expect(screen.getByText('Glory')).toBeInTheDocument();
    });

    it('passes href to underlying element', () => {
        const expectedHref = 'https://free-now.com/';
        const anchorElement = render(
            <Breadcrumbs.Link href={expectedHref}>Path</Breadcrumbs.Link>
        ).container.querySelector('a');

        expect(anchorElement).toHaveAttribute('href', expectedHref);
    });
});
