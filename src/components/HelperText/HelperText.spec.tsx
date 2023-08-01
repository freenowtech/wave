import { render } from '@testing-library/react';
import * as React from 'react';
import { HelperText } from './HelperText';

describe('HelperText', () => {
    it('renders an <span> tag by default', () => {
        expect(render(<HelperText />)).toMatchHtmlTag('span');
    });

    it('renders the children', () => {
        expect(render(<HelperText>Content</HelperText>).getByText('Content')).toBeInTheDocument();
    });

    it('is left aligned', () => {
        expect(render(<HelperText />).container.firstChild).toHaveStyle(`
            text-align: left;
        `);
    });
});
