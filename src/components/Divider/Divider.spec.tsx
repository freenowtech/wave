import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { Divider } from './Divider';

describe('Divider', () => {
    it('renders horizontal divider by default when not passing any props', () => {
        render(<Divider />);
        expect(screen.getByTestId('horizontal-divider')).toBeInTheDocument();
        expect(screen.queryByTestId('vertical-divider')).not.toBeInTheDocument();
    });

    it('renders vertical divider when passing vertical prop', () => {
        render(<Divider vertical />);
        expect(screen.getByTestId('vertical-divider')).toBeInTheDocument();
        expect(screen.queryByTestId('horizontal-divider')).not.toBeInTheDocument();
    });
});
