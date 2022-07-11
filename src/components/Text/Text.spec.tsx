import { render } from '@testing-library/react';
import * as React from 'react';
import { SemanticColors } from '../../essentials/Colors/Colors';

import { Text } from './Text';

describe('Text', () => {
    describe('default render', () => {
        it('renders a <span> by default', () => {
            expect(render(<Text />)).toMatchHtmlTag('span');
        });

        it('has a primary color by default', () => {
            expect(render(<Text />).container.firstChild).toHaveStyle(`
            color: ${SemanticColors.text.primary};
        `);
        });

        it('renders the children', () => {
            expect(render(<Text>Content</Text>).getByText('Content')).toBeInTheDocument();
        });
    });

    it('respects the "as" prop', () => {
        expect(render(<Text as="b" />)).toMatchHtmlTag('b');
    });

    it('has an inverted primary color if inverted property is set', () => {
        expect(render(<Text inverted />).container.firstChild).toHaveStyle(`
            color: ${SemanticColors.text.primaryInverted};
        `);
    });

    describe('if the weak property is set', () => {
        it('has a dim color', () => {
            expect(render(<Text weak />).container.firstChild).toHaveStyle(`
                color: ${SemanticColors.text.secondary};
            `);
        });

        it('has a dimmer color if inverted', () => {
            expect(render(<Text weak inverted />).container.firstChild).toHaveStyle(`
                color: ${SemanticColors.text.secondaryInverted};
            `);
        });
    });

    describe('if the `secondary` property is set', () => {
        it('has a dim color', () => {
            expect(render(<Text secondary />).container.firstChild).toHaveStyle(`
                color: ${SemanticColors.text.secondary};
            `);
        });

        it('has a dimmer color if inverted', () => {
            expect(render(<Text secondary inverted />).container.firstChild).toHaveStyle(`
                color: ${SemanticColors.text.secondaryInverted};
            `);
        });
    });

    describe('if the disabled property is set', () => {
        it('has the disabled color', () => {
            expect(render(<Text disabled />).container.firstChild).toHaveStyle(`
                color: ${SemanticColors.text.disabled};
            `);
        });
        it('has a stronger disabled color if inverted', () => {
            expect(render(<Text disabled inverted />).container.firstChild).toHaveStyle(`
                color: ${SemanticColors.text.disabledInverted};
            `);
        });
    });
});
