import { render } from '@testing-library/react';
import React from 'react';
import { InlineSpinner } from '..';
import { Colors } from '../../essentials';

describe('InlineSpinner', () => {
    it('renders the default variant', () => {
        const { container } = render(<InlineSpinner />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders the small size', () => {
        const { container } = render(<InlineSpinner size="small" />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders in a custom color', () => {
        const { container } = render(<InlineSpinner color={Colors.POSITIVE_GREEN_900} />);

        expect(container.firstChild).toMatchSnapshot();
    });
});
