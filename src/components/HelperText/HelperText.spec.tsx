import { render } from '@testing-library/react';
import * as React from 'react';
import { getSemanticValue } from '../../utils/cssVariables';
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

    it('renders the info variant by default', () => {
        expect(render(<HelperText />).container.firstChild).toHaveStyleRule(
            'color',
            getSemanticValue('foreground-neutral-emphasized')
        );
    });

    it('applies the variant it receives', () => {
        expect(render(<HelperText variant="danger" />).container.firstChild).toHaveStyleRule(
            'color',
            getSemanticValue('foreground-danger-default')
        );
    });
});
