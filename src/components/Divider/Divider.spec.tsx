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

    it('renders horizontal divider with 1rem top and bottom offset by default', () => {
        render(<Divider />);
        const dividerInstance = screen.getByTestId('horizontal-divider');
        const dividerStyle = window.getComputedStyle(dividerInstance);

        expect(dividerStyle.marginTop).toBe('1rem');
        expect(dividerStyle.marginBottom).toBe('1rem');
    });

    it('renders vertical divider with 1rem left and right offset by default', () => {
        render(<Divider vertical />);
        const dividerInstance = screen.getByTestId('vertical-divider');
        const dividerStyle = window.getComputedStyle(dividerInstance);

        expect(dividerStyle.marginLeft).toBe('1rem');
        expect(dividerStyle.marginRight).toBe('1rem');
    });
});
