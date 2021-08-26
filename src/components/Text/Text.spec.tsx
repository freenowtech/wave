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

    describe('if the weak property is set', () => {
        it('has a dim color', () => {
            expect(render(<Text weak />).container.firstChild).toHaveStyle(`
                color: ${Colors.AUTHENTIC_BLUE_550};
            `);
        });

        it('has a dimmer color if inverted', () => {
            expect(render(<Text weak inverted />).container.firstChild).toHaveStyle(`
                color: ${Colors.AUTHENTIC_BLUE_350};
            `);
        });
    });

    describe('if the `secondary` property is set', () => {
        it('has a dim color', () => {
            expect(render(<Text secondary />).container.firstChild).toHaveStyle(`
                color: ${Colors.AUTHENTIC_BLUE_550};
            `);
        });

        it('has a dimmer color if inverted', () => {
            expect(render(<Text secondary inverted />).container.firstChild).toHaveStyle(`
                color: ${Colors.AUTHENTIC_BLUE_350};
            `);
        });
    });

    describe('if the disabled property is set', () => {
        it('has the disabled color', () => {
            expect(render(<Text disabled />).container.firstChild).toHaveStyle(`
                color: ${Colors.AUTHENTIC_BLUE_200};
            `);
        });
        it('has a stronger disabled color if inverted', () => {
            expect(render(<Text disabled inverted />).container.firstChild).toHaveStyle(`
                color: ${Colors.AUTHENTIC_BLUE_550};
            `);
        });
    });

    it('has a bright color if inverted property is set', () => {
        expect(render(<Text inverted />).container.firstChild).toHaveStyle(`
            color: ${Colors.WHITE};
        `);
    });
});
