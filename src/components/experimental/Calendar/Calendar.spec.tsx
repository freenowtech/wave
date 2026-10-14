import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { Calendar } from './Calendar';

const JANUARY_2024 = new Date(2024, 0, 1);

const getDay = (name: RegExp | string) => screen.getByRole('button', { name });

describe('Experimental: Calendar', () => {
    it('renders the month grid with weeks starting on Monday', () => {
        render(<Calendar defaultMonth={JANUARY_2024} />);

        const grid = screen.getByRole('grid', { name: 'January 2024' });
        const weekdays = within(grid)
            .getAllByRole('columnheader', { hidden: true })
            .map(header => header.textContent);

        expect(weekdays).toEqual(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']);
        // outside days are hidden, so only January's days are buttons
        expect(within(grid).getAllByRole('button')).toHaveLength(31);
        expect(getDay(/January 1st, 2024/)).toHaveTextContent('01');
    });

    it('renders as many months as visibleMonths', () => {
        render(<Calendar defaultMonth={JANUARY_2024} visibleMonths={2} />);

        expect(screen.getAllByRole('grid').map(grid => grid.getAttribute('aria-label'))).toEqual([
            'January 2024',
            'February 2024'
        ]);
    });

    it('navigates to the next and previous month', () => {
        render(<Calendar defaultMonth={JANUARY_2024} />);

        fireEvent.click(screen.getByRole('button', { name: /next month/i }));
        expect(screen.getByRole('grid', { name: 'February 2024' })).toBeInTheDocument();

        fireEvent.click(screen.getByRole('button', { name: /previous month/i }));
        fireEvent.click(screen.getByRole('button', { name: /previous month/i }));
        expect(screen.getByRole('grid', { name: 'December 2023' })).toBeInTheDocument();
    });

    it('selects a single day', () => {
        const onSelect = jest.fn();
        const { rerender } = render(<Calendar defaultMonth={JANUARY_2024} onSelect={onSelect} />);

        fireEvent.click(getDay(/January 10th, 2024/));
        expect(onSelect).toHaveBeenCalledWith(
            new Date(2024, 0, 10),
            expect.any(Date),
            expect.anything(),
            expect.anything()
        );

        rerender(<Calendar defaultMonth={JANUARY_2024} selected={new Date(2024, 0, 10)} onSelect={onSelect} />);
        expect(getDay(/January 10th, 2024/)).toHaveAttribute('data-selected-single', 'true');
    });

    it('selects multiple days', () => {
        const onSelect = jest.fn();
        render(
            <Calendar
                selectionType="multiple"
                defaultMonth={JANUARY_2024}
                selected={[new Date(2024, 0, 10)]}
                onSelect={onSelect}
            />
        );

        expect(getDay(/January 10th, 2024/)).toHaveAttribute('data-selected-multiple', 'true');

        fireEvent.click(getDay(/January 12th, 2024/));
        expect(onSelect).toHaveBeenCalledWith(
            [new Date(2024, 0, 10), new Date(2024, 0, 12)],
            expect.any(Date),
            expect.anything(),
            expect.anything()
        );
    });

    it('marks the start, middle and end of a selected range', () => {
        const onSelect = jest.fn();
        render(
            <Calendar
                selectionType="range"
                defaultMonth={JANUARY_2024}
                selected={{ from: new Date(2024, 0, 10), to: new Date(2024, 0, 12) }}
                onSelect={onSelect}
            />
        );

        expect(getDay(/January 10th, 2024/)).toHaveAttribute('data-range-start', 'true');
        expect(getDay(/January 11th, 2024/)).toHaveAttribute('data-range-middle', 'true');
        expect(getDay(/January 12th, 2024/)).toHaveAttribute('data-range-end', 'true');

        fireEvent.click(getDay(/January 15th, 2024/));
        expect(onSelect).toHaveBeenCalledWith(
            { from: new Date(2024, 0, 10), to: new Date(2024, 0, 15) },
            expect.any(Date),
            expect.anything(),
            expect.anything()
        );
    });

    it('does not select disabled days', () => {
        const onSelect = jest.fn();
        render(
            <Calendar defaultMonth={JANUARY_2024} disabled={[{ before: new Date(2024, 0, 5) }]} onSelect={onSelect} />
        );

        expect(getDay(/January 4th, 2024/)).toBeDisabled();
        expect(getDay(/January 5th, 2024/)).toBeEnabled();

        fireEvent.click(getDay(/January 4th, 2024/));
        expect(onSelect).not.toHaveBeenCalled();
    });
});
