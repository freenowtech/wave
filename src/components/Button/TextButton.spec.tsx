import React from 'react';
import { render } from '@testing-library/react';
import { TextButton } from './TextButton';
import { Colors } from '../../essentials';

describe('standard text button', () => {
    it('renders a primary colored text as default', () => {
        const { container } = render(<TextButton>Click</TextButton>);

        expect(container.firstChild).toHaveStyle(`
          background: transparent;
          color: ${Colors.ACTION_BLUE_900};
        `);
        expect(container.firstChild).toMatchSnapshot();
    });

    describe('danger', () => {
        it('renders as design system suggests', () => {
            const { container } = render(<TextButton variant="danger">Click</TextButton>);

            expect(container.firstChild).toHaveStyle(`
              background: transparent;
              color: ${Colors.NEGATIVE_ORANGE_900}
            `);
            expect(container.firstChild).toMatchSnapshot();
        });
    });
});

describe('inverted text button', () => {
    it('renders a white colored text as default', () => {
        const { container } = render(<TextButton inverted>Click</TextButton>);

        expect(container.firstChild).toHaveStyle(`
          background: transparent;
          color: ${Colors.WHITE}
        `);
        expect(container.firstChild).toMatchSnapshot();
    });
});
