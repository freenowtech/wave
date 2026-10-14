import { render } from '@testing-library/react';
import * as React from 'react';
import { getSemanticValue } from '../../utils/cssVariables';
import { Label } from './Label';

describe('Label', () => {
    it('renders an <span> tag by default', () => {
        expect(render(<Label />)).toMatchHtmlTag('span');
    });

    it('renders the children', () => {
        expect(render(<Label>Content</Label>).getByText('Content')).toBeInTheDocument();
    });

    it('renders the default variant by default', () => {
        expect(render(<Label>Content</Label>).container.firstChild).toHaveStyleRule(
            'background-color',
            getSemanticValue('background-element-neutral-emphasized')
        );
    });

    it('applies the variant it receives', () => {
        expect(render(<Label variant="success">Content</Label>).container.firstChild).toHaveStyleRule(
            'background-color',
            getSemanticValue('background-element-success-default')
        );
    });
});
