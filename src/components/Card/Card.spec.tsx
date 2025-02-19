import { render } from '@testing-library/react';
import * as React from 'react';
import { theme } from '../../essentials/theme';
import { Card } from './Card';

describe('Card', () => {
    it('renders an <div> tag by default', () => {
        expect(render(<Card />)).toMatchHtmlTag('div');
    });

    it('renders the children', () => {
        expect(render(<Card>Content</Card>).getByText('Content')).toBeInTheDocument();
    });

    it('has a border radius set by default', () => {
        expect(render(<Card />).container.firstChild).toHaveStyle(`
            border-radius: ${theme.radii[1]};
        `);
    });

    describe('renders different card levels', () => {
        const testCases = [
            [0, 'none'],
            [100, theme.shadows.small],
            [200, theme.shadows.medium],
            [300, theme.shadows.large]
        ];

        test.each(testCases)(
            'with level %s and sets the correct box-shadow',
            (level: 0 | 100 | 200 | 300, expected) => {
                /* @ts-expect-error TS2769 */
                expect(render(<Card level={level} />).container.firstChild).toHaveStyle(`
                    box-shadow: ${expected};
                `);
            }
        );
    });
});
