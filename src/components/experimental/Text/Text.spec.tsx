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

    it.each([undefined, 'p'] as const)('keeps the variant off the DOM with as=%s', as => {
        render(
            <Text variant="headline" as={as}>
                Content
            </Text>
        );

        expect(screen.getByText('Content')).not.toHaveAttribute('variant');
    });
});
