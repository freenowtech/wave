import { render } from '@testing-library/react';
import * as React from 'react';
import { Colors } from '../../essentials';
import { Link } from './Link';

describe('Link', () => {
    it('renders a <a> by default', () => {
        expect(render(<Link href="#test" />)).toMatchHtmlTag('a');
    });

    it('renders the children', () => {
        expect(render(<Link href="#test">Content</Link>).getByText('Content')).toBeInTheDocument();
    });

    it('should render the correct inverted color', () => {
        expect(render(<Link inverted href="#test" />).container.firstChild).toHaveStyle(`
            color: ${Colors.WHITE};
        `);
    });

    it('passes href to underlying element', () => {
        const expectedHref = 'https://free-now.com/';
        const anchorElement = render(<Link href={expectedHref} />).container.querySelector('a');

        expect(anchorElement).toHaveAttribute('href', expectedHref);
    });
});
