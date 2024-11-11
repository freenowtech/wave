import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Experimental: Button', () => {
    it('renders the button component', () => {
        const onPress = jest.fn();
        render(<Button onPress={onPress} />);
        expect(screen.getByTestId('button-container')).toBeInTheDocument();
    });

    it('calls onPress when clicked', () => {
        const onPress = jest.fn();
        render(<Button onPress={onPress} />);
        screen.getByTestId('button-container').click();
        expect(onPress).toHaveBeenCalledTimes(1);
    });

    it('does not call onPress when disabled', () => {
        const onPress = jest.fn();
        render(<Button onPress={onPress} isDisabled />);
        screen.getByTestId('button-container').click();
        expect(onPress).toHaveBeenCalledTimes(0);
    });

    it('does not call onPress when is loading', () => {
        const onPress = jest.fn();
        render(<Button onPress={onPress} isLoading />);
        screen.getByTestId('button-container').click();
        expect(onPress).toHaveBeenCalledTimes(0);
    });

    it('spinner is rendered when loading', () => {
        const onPress = jest.fn();
        render(<Button onPress={onPress} isLoading />);
        expect(screen.getByTestId('button-spinner')).toBeInTheDocument();
    });
});
