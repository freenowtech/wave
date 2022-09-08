import React from 'react';
import { render } from '@testing-library/react';
import { Button } from './Button';
import { SemanticColors } from '../../essentials';

describe('standard button', () => {
    it('renders by default the primary variant', () => {
        const { container: primaryTree } = render(<Button variant="primary">Click</Button>);
        const { container: defaultTree } = render(<Button>Click</Button>);

        expect(primaryTree).toEqual(defaultTree);
    });

    describe('primary', () => {
        it('renders as design system suggests', () => {
            const { container } = render(<Button variant="primary">Click</Button>);
            expect(container.firstChild).toHaveStyle(`
              background: ${SemanticColors.button.primary.background};
              color: ${SemanticColors.button.primary.text};
            `);
            expect(container.firstChild).toMatchSnapshot();
        });
    });

    describe('secondary', () => {
        it('renders as design system suggests', () => {
            const { container } = render(<Button variant="secondary">Click</Button>);
            expect(container.firstChild).toHaveStyle(`
              background: ${SemanticColors.button.secondary.background};
              color: ${SemanticColors.button.secondary.text};
              border-color: ${SemanticColors.button.secondary.border};
            `);
            expect(container.firstChild).toMatchSnapshot();
        });
    });

    describe('danger', () => {
        it('renders as design system suggests', () => {
            const { container } = render(<Button variant="danger">Click</Button>);
            expect(container.firstChild).toHaveStyle(`
              background: ${SemanticColors.button.danger.background};
              color: ${SemanticColors.button.danger.text};
            `);
            expect(container.firstChild).toMatchSnapshot();
        });
    });
});

describe('inverted button', () => {
    it('renders by default the primary variant', () => {
        const { container: primaryTree } = render(
            <Button inverted variant="primary">
                Click
            </Button>
        );
        const { container: defaultTree } = render(<Button inverted>Click</Button>);

        expect(primaryTree).toEqual(defaultTree);
    });

    describe('primary', () => {
        it('renders as design system suggests', () => {
            const { container } = render(
                <Button variant="primary" inverted>
                    Click
                </Button>
            );
            expect(container.firstChild).toHaveStyle(`
              background: ${SemanticColors.button.primary.backgroundInverted};
              color: ${SemanticColors.button.primary.textInverted};
            `);
            expect(container.firstChild).toMatchSnapshot();
        });
    });

    describe('secondary', () => {
        it('renders as design system suggests', () => {
            const { container } = render(
                <Button variant="secondary" inverted>
                    Click
                </Button>
            );

            expect(container.firstChild).toHaveStyle(`
              background: transparent;
              color: ${SemanticColors.button.secondary.textInverted};
              border-color: ${SemanticColors.button.secondary.borderInverted};
            `);
            expect(container.firstChild).toMatchSnapshot();
        });
    });
});
