import { render, screen, fireEvent } from '@testing-library/react';
import * as React from 'react';

import user from '@testing-library/user-event';

import { Search } from './Search';

describe('Search', () => {
    it('is enabled by default', () => {
        render(<Search />);
        expect(screen.getByRole('searchbox')).toBeEnabled();
    });
    it('can be disabled', () => {
        render(<Search disabled />);
        expect(screen.getByRole('searchbox')).toBeDisabled();
    });

    describe('Clear Search Icon', () => {
        it('is not rendered by default', () => {
            render(<Search />);
            expect(screen.queryByLabelText('clear-search')).not.toBeInTheDocument();
        });
        it('is rendered when user types on search box', () => {
            render(<Search />);
            user.type(screen.getByRole('searchbox'), 'A');
            expect(screen.queryByLabelText('clear-search')).toBeInTheDocument();
        });
    });

    describe('has properties', () => {
        it('rendered as expected', () => {
            const placeholder = 'Placeholder';
            const defaultValue = 'Michael';

            render(<Search placeholder={placeholder} value={defaultValue} />);
            expect(screen.queryByPlaceholderText(placeholder)).toBeInTheDocument();
            expect(screen.queryByDisplayValue(defaultValue)).toBeInTheDocument();
        });
    });

    describe('emits', () => {
        it('onInputChange on typing inside', () => {
            const mockOnChange = jest.fn();
            render(<Search onInputChange={mockOnChange} />);
            expect(mockOnChange).not.toHaveBeenCalled();
            user.type(screen.getByRole('searchbox'), 'A');
            expect(mockOnChange).toHaveBeenCalled();
        });

        it('onClear on clicking the clear button', () => {
            const mockOnClear = jest.fn();
            render(<Search onClear={mockOnClear} value="default" />);
            expect(mockOnClear).not.toHaveBeenCalled();
            user.click(screen.getByLabelText('clear-search'));
            expect(mockOnClear).toHaveBeenCalled();
        });

        it('onChangeSelection on arrow down', () => {
            const namesArray = ['Adam', 'Barry', 'Charles', 'David'];
            const mockOnChangeSelection = jest.fn();

            render(<Search results={namesArray} onChangeSelection={mockOnChangeSelection} />);

            expect(mockOnChangeSelection).not.toHaveBeenCalled();
            const searchBox = screen.getByRole('searchbox');
            user.type(searchBox, '{arrowdown}');
            expect(mockOnChangeSelection).toHaveBeenLastCalledWith(1);

            user.type(searchBox, '{arrowdown}');
            expect(mockOnChangeSelection).toHaveBeenLastCalledWith(2);
        });

        it('onChangeSelection on arrow up', () => {
            const namesArray = ['Adam', 'Barry', 'Charles', 'David'];
            const mockOnChangeSelection = jest.fn();

            render(<Search results={namesArray} onChangeSelection={mockOnChangeSelection} />);

            expect(mockOnChangeSelection).not.toHaveBeenCalled();
            const searchBox = screen.getByRole('searchbox');
            user.type(searchBox, '{arrowup}');
            expect(mockOnChangeSelection).toHaveBeenLastCalledWith(namesArray.length - 1);

            user.type(searchBox, '{arrowup}');
            expect(mockOnChangeSelection).toHaveBeenLastCalledWith(namesArray.length - 2);
        });

        it('onEnter on enter after selecting item', () => {
            const mockOnClick = jest.fn();
            const mockOnEnter = jest.fn();
            const item = <div onClick={mockOnClick}>Barry</div>;

            render(<Search results={['Adam', item]} onEnter={mockOnEnter} />);

            expect(mockOnClick).not.toHaveBeenCalled();
            expect(mockOnEnter).not.toHaveBeenCalled();
            const searchBox = screen.getByRole('searchbox');
            user.type(searchBox, '{arrowdown}');
            user.type(searchBox, '{enter}');

            expect(mockOnClick).toHaveBeenCalled();
            expect(mockOnEnter).toHaveBeenCalled();
        });
    });

    describe('User interaction', () => {
        it('on arrow up/down should show the selected item', () => {
            const namesArray = ['Adam', 'Barry', 'Charles', 'David'];
            render(<Search results={namesArray} />);

            //  Type in searchbox to show the list of results
            const searchBox = screen.getByRole('searchbox');
            user.type(searchBox, 'A');

            const firstItem = screen.getByText(namesArray[0]);
            const secondItem = screen.getByText(namesArray[1]);

            // The first item of the list is selected by default
            expect(firstItem).toHaveAttribute('aria-selected', 'true');
            expect(secondItem).toHaveAttribute('aria-selected', 'false');

            // After key ArrowDown second item is the selected one
            user.type(searchBox, '{arrowdown}');
            expect(firstItem).toHaveAttribute('aria-selected', 'false');
            expect(secondItem).toHaveAttribute('aria-selected', 'true');

            // After key ArrowUp first item is the selected one
            user.type(searchBox, '{arrowup}');
            expect(firstItem).toHaveAttribute('aria-selected', 'true');
            expect(secondItem).toHaveAttribute('aria-selected', 'false');
        });
    });
});
