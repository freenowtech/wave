import { render } from '@testing-library/react';
import * as React from 'react';
import { Box } from './Box';

describe('Box', () => {
    it('renders "div" by default', () => {
        expect(render(<Box />)).toMatchHtmlTag('div');
    });

    it('respects the "as" prop', () => {
        expect(render(<Box as="span" />)).toMatchHtmlTag('span');
    });

    it('renders padding and margin', () => {
        expect(render(<Box m={2} p={1} />).container.firstChild).toHaveStyle({
            margin: '1rem',
            padding: '0.5rem'
        });
    });

    it('renders flexbox', () => {
        expect(render(<Box alignItems="center" flexDirection="column" />).container.firstChild).toHaveStyle(`
            align-items: center;
            flex-direction: column;
        `);
    });

    it('renders grid layout', () => {
        expect(render(<Box gridTemplateRows="1fr auto 10%" />).container.firstChild).toHaveStyle(`
            grid-template-rows: 1fr auto 10%;
        `);
    });
});
