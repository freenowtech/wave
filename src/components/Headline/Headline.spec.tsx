import { render } from '@testing-library/react';
import * as React from 'react';
import { Colors } from '../../essentials';
import { theme } from '../../essentials/theme';
import { Headline } from './Headline';

describe('Headline', () => {
    it('renders an <h1> tag by default', () => {
        expect(render(<Headline />)).toMatchHtmlTag('h1');
    });

    it('respects the "as" prop', () => {
        expect(render(<Headline as="h5" />)).toMatchHtmlTag('h5');
    });

    it('renders the children', () => {
        expect(render(<Headline>Content</Headline>).getByText('Content')).toBeInTheDocument();
    });

    it('has a white color when inverted property is set', () => {
        expect(render(<Headline inverted />).container.firstChild).toHaveStyle(`
            color: ${Colors.WHITE};
        `);
    });

    describe('renders different headline sizes', () => {
        const testCases = [
            ['h1', theme.fontSizes[7]],
            ['h2', theme.fontSizes[5]],
            ['h3', theme.fontSizes[4]],
            ['h4', theme.fontSizes[2]],
            ['h5', theme.fontSizes[1]],
            ['h6', theme.fontSizes[0]]
        ];

        test.each(testCases)(
            'in size %s with correct font size',
            (headline: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6', expected) => {
                expect(render(<Headline as={headline} />).container.firstChild).toHaveStyle(`
                font-size: ${expected};
            `);
            }
        );
    });
});
