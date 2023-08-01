import { render } from '@testing-library/react';
import * as React from 'react';
import { Label } from './Label';

describe('Label', () => {
    it('renders an <span> tag by default', () => {
        expect(render(<Label />)).toMatchHtmlTag('span');
    });

    it('renders the children', () => {
        expect(render(<Label>Content</Label>).getByText('Content')).toBeInTheDocument();
    });
});
