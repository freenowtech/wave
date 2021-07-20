import { render } from '@testing-library/react';
import * as React from 'react';
import { Colors } from '../../essentials';
import { Label } from './Label';

describe('Label', () => {
    it('renders an <span> tag by default', () => {
        expect(render(<Label />)).toMatchHtmlTag('span');
    });

    it('renders the children', () => {
        expect(render(<Label>Content</Label>).getByText('Content')).toBeInTheDocument();
    });

    it('has the correct default colors', () => {
        expect(render(<Label />).container.firstChild).toHaveStyle(`
            color: ${Colors.AUTHENTIC_BLUE_900};
            border-color: ${Colors.AUTHENTIC_BLUE_200};
            background-color: ${Colors.AUTHENTIC_BLUE_50};
        `);
    });

    it('has the correct info variant colors', () => {
        expect(render(<Label variant="info" />).container.firstChild).toHaveStyle(`
            color: ${Colors.ACTION_BLUE_900};
            border-color: ${Colors.ACTION_BLUE_350};
            background-color: ${Colors.ACTION_BLUE_50};
        `);
    });

    it('has the correct success variant colors', () => {
        expect(render(<Label variant="success" />).container.firstChild).toHaveStyle(`
            color: ${Colors.POSITIVE_GREEN_1000};
            border-color: ${Colors.POSITIVE_GREEN_350};
            background-color: ${Colors.POSITIVE_GREEN_50};
        `);
    });

    it('has the correct danger variant colors', () => {
        expect(render(<Label variant="danger" />).container.firstChild).toHaveStyle(`
            color: ${Colors.NEGATIVE_ORANGE_1000};
            border-color: ${Colors.NEGATIVE_ORANGE_350};
            background-color: ${Colors.NEGATIVE_ORANGE_50};
        `);
    });

    it('uses the filled version if set', () => {
        expect(render(<Label variant="success" filled />).container.firstChild).toHaveStyle(`
            color: ${Colors.WHITE};
            border-color: ${Colors.POSITIVE_GREEN_900};
            background-color: ${Colors.POSITIVE_GREEN_900};
        `);
    });
});
