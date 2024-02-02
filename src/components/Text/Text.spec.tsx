import { render } from '@testing-library/react';
import * as React from 'react';

import { Text } from './Text';

describe('Text', () => {
    describe('default render', () => {
        it('renders a <span> by default', () => {
            expect(render(<Text />)).toMatchHtmlTag('span');
        });

        it('renders the children', () => {
            expect(render(<Text>Content</Text>).getByText('Content')).toBeInTheDocument();
        });
    });

    it('respects the "as" prop', () => {
        expect(render(<Text as="b" />)).toMatchHtmlTag('b');
    });
});
