import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { IconButton } from './IconButton';
import { TrashIcon } from '../../../icons';

describe('Experimental: IconButton', () => {
    it('renders an icon button with the provided icon', () => {
        const onClick = jest.fn();
        render(<IconButton onClick={onClick} Icon={TrashIcon} />);
        expect(screen.getByTestId('icon-container')).toBeInTheDocument();
    });

    it('calls onClick when clicked', () => {
        const onClick = jest.fn();
        render(<IconButton Icon={TrashIcon} onClick={onClick} />);
        screen.getByTestId('icon-container').click();
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('does not call onClick when disabled', () => {
        const onClick = jest.fn();
        render(<IconButton Icon={TrashIcon} onClick={onClick} disabled />);
        screen.getByTestId('icon-container').click();
        expect(onClick).toHaveBeenCalledTimes(0);
    });

    it('sets the right sizes for standard variant', () => {
        const onClick = jest.fn();
        render(<IconButton Icon={TrashIcon} onClick={onClick} />);
        const iconContainerInstance = screen.getByTestId('icon-container');
        const containerStyle = window.getComputedStyle(iconContainerInstance);
        expect(containerStyle.width).toBe('2.5rem');
        expect(containerStyle.height).toBe('2.5rem');
        expect(containerStyle.padding).toBe('0.25rem');
        expect(containerStyle.borderRadius).toBe('100%');
    });

    it('sets the right sizes for tonal variant', () => {
        const onClick = jest.fn();
        render(<IconButton Icon={TrashIcon} onClick={onClick} variant="tonal" />);
        const iconContainerInstance = screen.getByTestId('icon-container');
        const containerStyle = window.getComputedStyle(iconContainerInstance);
        expect(containerStyle.width).toBe('3.5rem');
        expect(containerStyle.height).toBe('3.5rem');
        expect(containerStyle.padding).toBe('0.25rem');
        expect(containerStyle.borderRadius).toBe('100%');
    });
});
