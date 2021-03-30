import { render } from '@testing-library/react';
import * as React from 'react';
import { Colors } from '../../essentials';
import { HelperText } from './HelperText';

describe('HelperText', () => {
    it('renders an <span> tag by default', () => {
        expect(render(<HelperText />)).toMatchHtmlTag('span');
    });

    it('renders the children', () => {
        expect(render(<HelperText>Content</HelperText>).getByText('Content')).toBeInTheDocument();
    });

    it('has the correct default colors', () => {
        expect(render(<HelperText />).container.firstChild).toHaveStyle(`
            color: ${Colors.AUTHENTIC_BLUE_550};
        `);
    });

    it('is left aligned', () => {
        expect(render(<HelperText />).container.firstChild).toHaveStyle(`
            text-align: left;
        `);
    });

    it('has the correct danger variant colors', () => {
        expect(render(<HelperText variant="info" />).container.firstChild).toHaveStyle(`
            color: ${Colors.AUTHENTIC_BLUE_550};
        `);

        expect(render(<HelperText variant="danger" />).container.firstChild).toHaveStyle(`
            color: ${Colors.NEGATIVE_ORANGE_1000};
        `);
    });

    it('renders correct color on dark background', () => {
        expect(render(<HelperText inverted />).container.firstChild).toHaveStyle(`
            color: ${Colors.AUTHENTIC_BLUE_350};
        `);

        expect(render(<HelperText inverted variant="danger" />).container.firstChild).toHaveStyle(`
            color: ${Colors.NEGATIVE_ORANGE_900};
        `);
    });
});
