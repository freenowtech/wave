import React from 'react';
import { render } from '@testing-library/react';
import { Button } from './Button';
import { Colors } from '../../essentials';

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
              background: ${Colors.AUTHENTIC_BLUE_900};
              color: ${Colors.WHITE};
            `);
            expect(container.firstChild).toMatchSnapshot();
        });
    });

    describe('secondary', () => {
        it('renders as design system suggests', () => {
            const { container } = render(<Button variant="secondary">Click</Button>);
            expect(container.firstChild).toHaveStyle(`
              background: ${Colors.WHITE};
              color: ${Colors.AUTHENTIC_BLUE_900};
              border-color: ${Colors.AUTHENTIC_BLUE_200};
            `);
            expect(container.firstChild).toMatchSnapshot();
        });
    });

    describe('danger', () => {
        it('renders as design system suggests', () => {
            const { container } = render(<Button variant="danger">Click</Button>);
            expect(container.firstChild).toHaveStyle(`
              background: ${Colors.NEGATIVE_ORANGE_900};
              color: ${Colors.WHITE};
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
              background: ${Colors.WHITE};
              color: ${Colors.ACTION_BLUE_900};
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
              color: ${Colors.WHITE};
              border-color: ${Colors.WHITE};
            `);
            expect(container.firstChild).toMatchSnapshot();
        });
    });
});
