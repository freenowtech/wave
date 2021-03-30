import { render } from '@testing-library/react';
import * as React from 'react';
import { Colors } from '../../essentials';
import { Text } from './Text';

describe('Text', () => {
    it('renders a <span> by default', () => {
        expect(render(<Text />)).toMatchHtmlTag('span');
    });

    it('respects the "as" prop', () => {
        expect(render(<Text as="b" />)).toMatchHtmlTag('b');
    });

    it('renders the children', () => {
        expect(render(<Text>Content</Text>).getByText('Content')).toBeInTheDocument();
    });

    it('has a dim color if weak property is set', () => {
        expect(render(<Text weak />).container.firstChild).toHaveStyle(`
            color: ${Colors.AUTHENTIC_BLUE_550};
        `);
    });

    it('has a bright color if inverted property is set', () => {
        expect(render(<Text inverted />).container.firstChild).toHaveStyle(`
            color: ${Colors.WHITE};
        `);
    });
});
