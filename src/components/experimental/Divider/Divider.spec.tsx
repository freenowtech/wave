import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Divider } from './Divider';

describe('Experimental: Divider', () => {
    it('renders a horizontal divider by default when not passing any props', () => {
        render(<Divider />);
        expect(screen.getByTestId('horizontal-divider-experimental')).toBeInTheDocument();
        expect(screen.queryByTestId('vertical-divider-experimental')).not.toBeInTheDocument();
    });

    it('renders a vertical divider when passing vertical prop', () => {
        render(<Divider vertical />);
        expect(screen.getByTestId('vertical-divider-experimental')).toBeInTheDocument();
        expect(screen.queryByTestId('horizontal-divider-experimental')).not.toBeInTheDocument();
    });

    it('renders horizontal divider with 1rem top and bottom offset', () => {
        render(<Divider mt="1rem" mb="1rem" />);
        const dividerInstance = screen.getByTestId('horizontal-divider-experimental');
        const dividerStyle = window.getComputedStyle(dividerInstance);

        expect(dividerStyle.marginTop).toBe('1rem');
        expect(dividerStyle.marginBottom).toBe('1rem');
    });

    it('renders vertical divider with 1rem left and right offset', () => {
        render(<Divider vertical ml="1rem" mr="1rem" />);
        const dividerInstance = screen.getByTestId('vertical-divider-experimental');
        const dividerStyle = window.getComputedStyle(dividerInstance);

        expect(dividerStyle.marginLeft).toBe('1rem');
        expect(dividerStyle.marginRight).toBe('1rem');
    });

    it('renders vertical divider with 1rem top and bottom offset when variant is middle-inset', () => {
        render(<Divider vertical variant="middle-inset" />);
        const dividerInstance = screen.getByTestId('vertical-divider-experimental');
        const dividerStyle = window.getComputedStyle(dividerInstance);

        expect(dividerStyle.marginTop).toBe('1rem');
        expect(dividerStyle.marginBottom).toBe('1rem');
    });

    it('renders vertical divider with 1rem offset when variant is inset', () => {
        render(<Divider vertical variant="inset" />);
        const dividerInstance = screen.getByTestId('vertical-divider-experimental');
        const dividerStyle = window.getComputedStyle(dividerInstance);

        expect(dividerStyle.marginTop).toBe('1rem');
        expect(dividerStyle.marginBottom).toBe('');
    });

    it('renders horizontal divider with 1rem left offset when variant is inset', () => {
        render(<Divider variant="inset" />);
        const dividerInstance = screen.getByTestId('horizontal-divider-experimental');
        const dividerStyle = window.getComputedStyle(dividerInstance);

        expect(dividerStyle.marginRight).toBe('');
        expect(dividerStyle.marginLeft).toBe('1rem');
    });

    it('renders horizontal divider with overridden offset when variant is inset', () => {
        render(<Divider variant="inset" ml="2rem" />);
        const dividerInstance = screen.getByTestId('horizontal-divider-experimental');
        const dividerStyle = window.getComputedStyle(dividerInstance);

        expect(dividerStyle.marginRight).toBe('');
        expect(dividerStyle.marginLeft).toBe('2rem');
    });

    it('renders horizontal divider with 1rem left and right offset when variant is middle-inset', () => {
        render(<Divider variant="middle-inset" />);
        const dividerInstance = screen.getByTestId('horizontal-divider-experimental');
        const dividerStyle = window.getComputedStyle(dividerInstance);

        expect(dividerStyle.marginRight).toBe('1rem');
        expect(dividerStyle.marginLeft).toBe('1rem');
    });

    it('renders horizontal divider with overridden offset when variant is middle-inset', () => {
        render(<Divider variant="middle-inset" mr="2rem" />);
        const dividerInstance = screen.getByTestId('horizontal-divider-experimental');
        const dividerStyle = window.getComputedStyle(dividerInstance);

        expect(dividerStyle.marginRight).toBe('2rem');
        expect(dividerStyle.marginLeft).toBe('1rem');
    });
});
