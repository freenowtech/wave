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

    it('"size" prop has precedence over "as" prop', () => {
        render(
            <Headline as="h2" size="xs">
                Headline
            </Headline>
        );
        const headline = screen.getByRole('heading', { level: 2 });

        expect(headline).toHaveStyle(`
          font-size: ${theme.fontSizes[0]}
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
            ['h1', { fontSize: theme.fontSizes[7], lineHeight: '3.75rem' }],
            ['h2', { fontSize: theme.fontSizes[5], lineHeight: '2.5rem' }],
            ['h3', { fontSize: theme.fontSizes[4], lineHeight: '2rem' }],
            ['h4', { fontSize: theme.fontSizes[2], lineHeight: '1.375rem' }],
            ['h5', { fontSize: theme.fontSizes[1], lineHeight: '1.25rem' }],
            ['h6', { fontSize: theme.fontSizes[0], lineHeight: '1.125rem' }]
        ] as const;

        test.each(testCases)(
            '"%s" with correct styles',
            (headline: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6', expectedStyles) => {
                expect(render(<Headline as={headline} />).container.firstChild).toHaveStyle(`
                font-size: ${expectedStyles.fontSize};
                line-height: ${expectedStyles.lineHeight};
            `);
            }
        );
    });

    describe('renders headline styles with provided sizes', () => {
        const testCases = [
            ['xxl', { fontSize: theme.fontSizes[7], lineHeight: '3.75rem' }],
            ['xl', { fontSize: theme.fontSizes[5], lineHeight: '2.5rem' }],
            ['l', { fontSize: theme.fontSizes[4], lineHeight: '2rem' }],
            ['m', { fontSize: theme.fontSizes[2], lineHeight: '1.375rem' }],
            ['s', { fontSize: theme.fontSizes[1], lineHeight: '1.25rem' }],
            ['xs', { fontSize: theme.fontSizes[0], lineHeight: '1.125rem' }]
        ] as const;

        test.each(testCases)('size "%s" with correct styles', (sizeName, expectedStyles) => {
            render(<Headline size={sizeName}>Headline</Headline>);

            expect(screen.getByRole('heading', { level: 1 })).toHaveStyle(`
            font-size: ${expectedStyles.fontSize};
            line-height: ${expectedStyles.lineHeight};
        `);
        });
    });
});
