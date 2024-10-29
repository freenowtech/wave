import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { IconButton } from './IconButton';
import { TrashIcon } from '../../../icons';

describe('Experimental: IconButton', () => {
    it('renders an icon button with the provided icon', () => {
        const onPress = jest.fn();
        render(<IconButton onPress={onPress} Icon={TrashIcon} />);
        expect(screen.getByTestId('standard-icon-container')).toBeInTheDocument();
    });

    it('calls onPress when clicked', () => {
        const onPress = jest.fn();
        render(<IconButton Icon={TrashIcon} onPress={onPress} />);
        screen.getByTestId('standard-icon-container').click();
        expect(onPress).toHaveBeenCalledTimes(1);
    });

    it('does not call onPress when disabled', () => {
        const onPress = jest.fn();
        render(<IconButton Icon={TrashIcon} onPress={onPress} isDisabled />);
        screen.getByTestId('standard-icon-container').click();
        expect(onPress).toHaveBeenCalledTimes(0);
    });

    it('sets the right sizes for standard variant', () => {
        const onPress = jest.fn();
        render(<IconButton Icon={TrashIcon} onPress={onPress} />);
        const iconContainerInstance = screen.getByTestId('standard-icon-container');
        const containerStyle = window.getComputedStyle(iconContainerInstance);
        expect(containerStyle.width).toBe('5rem');
        expect(containerStyle.height).toBe('5rem');
        expect(containerStyle.borderRadius).toBe('100%');
        const svgInstance = screen.getByTestId('iconbutton-icon');
        const svgStyle = window.getComputedStyle(svgInstance);
        expect(svgStyle.padding).toBe('1rem');
    });

    it('sets the right sizes for tonal variant', () => {
        const onPress = jest.fn();
        render(<IconButton Icon={TrashIcon} onPress={onPress} variant="tonal" />);
        const iconContainerInstance = screen.getByTestId('tonal-icon-container');
        const containerStyle = window.getComputedStyle(iconContainerInstance);
        expect(containerStyle.width).toBe('7rem');
        expect(containerStyle.height).toBe('7rem');
        expect(containerStyle.borderRadius).toBe('100%');
        const svgInstance = screen.getByTestId('iconbutton-icon');
        const svgStyle = window.getComputedStyle(svgInstance);
        expect(svgStyle.padding).toBe('2rem');
    });
});
