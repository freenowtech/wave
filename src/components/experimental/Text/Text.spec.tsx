import React from 'react';
import { render, screen } from '@testing-library/react';
import { Text, textStyles } from './Text';

describe('Experimental Text', () => {
    it('renders the body1 variant by default', () => {
        render(<Text>Content</Text>);

        expect(screen.getByText('Content')).toHaveStyleRule('font-size', textStyles.variants.body1.fontSize);
    });

    it('applies the variant it receives', () => {
        render(<Text variant="headline">Content</Text>);

        expect(screen.getByText('Content')).toHaveStyleRule('font-size', textStyles.variants.headline.fontSize);
    });
});
