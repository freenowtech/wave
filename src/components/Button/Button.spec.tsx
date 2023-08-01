import React from 'react';
import { render } from '@testing-library/react';
import { Button } from './Button';

describe('standard button', () => {
    it('renders by default the primary variant', () => {
        const { container: primaryTree } = render(<Button variant="primary">Click</Button>);
        const { container: defaultTree } = render(<Button>Click</Button>);

        expect(primaryTree).toEqual(defaultTree);
    });
});
