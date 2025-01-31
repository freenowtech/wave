import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { IconButton } from './IconButton';
import { TrashIcon } from '../../../icons';

describe('Experimental: IconButton', () => {
    it('renders an icon button with the provided icon', () => {
        const onPress = jest.fn();
        render(<IconButton onPress={onPress} Icon={TrashIcon} label="Icon label" />);
        expect(screen.getByRole("button", { name: "Icon label"})).toBeInTheDocument();
    });

    it('calls onPress when clicked', () => {
        const onPress = jest.fn();
        render(<IconButton Icon={TrashIcon} onPress={onPress} label="Icon label"/>);
        screen.getByRole("button", { name: "Icon label"}).click();
        expect(onPress).toHaveBeenCalledTimes(1);
    });

    it('does not call onPress when disabled', () => {
        const onPress = jest.fn();
        render(<IconButton Icon={TrashIcon} onPress={onPress} isDisabled label="Icon label"/>);
        screen.getByRole("button", { name: "Icon label"}).click();
        expect(onPress).toHaveBeenCalledTimes(0);
    });

    it('does not call onPress when is loading', () => {
        const onPress = jest.fn();
        render(<IconButton Icon={TrashIcon} onPress={onPress} isLoading label="Icon label"/>);
        screen.getByRole("button", { name: "Icon label"}).click();
        expect(onPress).toHaveBeenCalledTimes(0);
    });

    it('sets the right sizes for standard variant', () => {
        const onPress = jest.fn();
        render(<IconButton Icon={TrashIcon} onPress={onPress} label="Icon label"/>);
        const iconContainerInstance = screen.getByRole("button", { name: "Icon label"});
        const containerStyle = window.getComputedStyle(iconContainerInstance);
        expect(containerStyle.width).toBe('2.5rem');
        expect(containerStyle.height).toBe('2.5rem');
        expect(containerStyle.borderRadius).toBe('100%');
    });

    it('sets the right sizes for tonal variant', () => {
        const onPress = jest.fn();
        render(<IconButton Icon={TrashIcon} onPress={onPress} variant="tonal" label="Icon label"/>);
        const iconContainerInstance = screen.getByRole("button", { name: "Icon label"});
        const containerStyle = window.getComputedStyle(iconContainerInstance);
        expect(containerStyle.width).toBe('3.5rem');
        expect(containerStyle.height).toBe('3.5rem');
        expect(containerStyle.borderRadius).toBe('100%');
    });

    it('spinner is rendered when loading', () => {
        const onPress = jest.fn();
        render(<IconButton Icon={TrashIcon} onPress={onPress} isLoading label="Icon label"/>);
        expect(screen.getByTestId('iconbutton-spinner')).toBeInTheDocument();
    });
});
