import { render } from '@testing-library/react';
import React from 'react';
import { Skeleton } from './Skeleton';

describe('Skeleton', () => {
    it('should render default', () => {
        const { container } = render(<Skeleton />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('should render animated version', () => {
        const { container } = render(<Skeleton animated />);

        expect(container.firstChild).toMatchSnapshot();
    });
});
