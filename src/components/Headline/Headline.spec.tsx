import { render, screen } from '@testing-library/react';
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

    it('uses size from the "size" prop', () => {
        render(
            <Headline as="h2" size="m">
                Headline
            </Headline>
        );
        const headline = screen.getByRole('heading', { level: 2 });

        expect(headline).toHaveStyle(`
          font-size: ${theme.fontSizes[2]}
        `);
    });

    it('renders the children', () => {
        expect(render(<Headline>Content</Headline>).getByText('Content')).toBeInTheDocument();
    });

    it('has a white color when inverted property is set', () => {
        expect(render(<Headline inverted />).container.firstChild).toHaveStyle(`
            color: ${Colors.WHITE};
        `);
    });

    describe('renders different default headline sizes', () => {
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

    describe('renders headline with provided sizes', () => {
        const testCases = [
            ['xxl', theme.fontSizes[7]],
            ['xl', theme.fontSizes[5]],
            ['l', theme.fontSizes[4]],
            ['m', theme.fontSizes[2]],
            ['s', theme.fontSizes[1]],
            ['xs', theme.fontSizes[0]]
        ] as const;

        test.each(testCases)('size %s uses correct font-size', (sizeName, expectedFontSize) => {
            render(<Headline size={sizeName}>Headline</Headline>);

            expect(screen.getByRole('heading', { level: 1 })).toHaveStyle(`
            font-size: ${expectedFontSize};
        `);
        });
    });
});
