import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Snackbar } from './Snackbar';

test('renders the Snackbar component with children', () => {
    render(
        <Snackbar>
            <span>Test Snackbar</span>
        </Snackbar>
    );
    expect(screen.getByText('Test Snackbar')).toBeInTheDocument();
});

test('renders the dismiss button when hasDismissButton is true and calls onDismiss when clicked', () => {
    const onDismiss = jest.fn();
    render(
        <Snackbar hasDismissButton onDismiss={onDismiss}>
            <span>Test Snackbar</span>
        </Snackbar>
    );
    const dismissButton = screen.getByTestId('snackbar-close-icon');
    fireEvent.click(dismissButton);
    expect(onDismiss).toHaveBeenCalledTimes(1);
});
