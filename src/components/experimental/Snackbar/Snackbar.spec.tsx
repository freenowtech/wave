import React from 'react';
import { render, screen } from '@testing-library/react';
import { Snackbar } from './Snackbar';

test('renders the Snackbar component with children', () => {
    render(
        <Snackbar>
            <span>Test Snackbar</span>
        </Snackbar>
    );
    expect(screen.getByText('Test Snackbar')).toBeInTheDocument();
});

test('clickable component inside Snackbar can be clicked', () => {
    const handleClick = jest.fn();
    render(
        <Snackbar>
            <button type="button" onClick={handleClick}>
                Click Me
            </button>
        </Snackbar>
    );
    screen.getByText('Click Me').click();
    expect(handleClick).toHaveBeenCalledTimes(1);
});
