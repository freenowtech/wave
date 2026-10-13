import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DatePicker } from './DatePicker';

const JANUARY_2024 = new Date(2024, 0, 1);

const openCalendar = async () => {
    await userEvent.click(screen.getByRole('button', { name: 'Date: open calendar' }));
    return screen.getByRole('dialog', { name: 'Date' });
};

describe('Experimental: DatePicker', () => {
    it('picks a single date from the calendar and closes it', async () => {
        const onChange = jest.fn();
        render(<DatePicker label="Date" initialMonth={JANUARY_2024} onChange={onChange} />);

        const dialog = await openCalendar();
        expect(within(dialog).getByRole('grid', { name: 'January 2024' })).toBeInTheDocument();

        await userEvent.click(within(dialog).getByRole('button', { name: /January 10th, 2024/ }));

        expect(onChange).toHaveBeenLastCalledWith(new Date(2024, 0, 10));
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('picks a range and shows it in the field', async () => {
        const onChange = jest.fn();
        render(<DatePicker label="Date" mode="range" initialMonth={JANUARY_2024} onChange={onChange} />);

        const dialog = await openCalendar();
        expect(within(dialog).getAllByRole('grid')).toHaveLength(2);

        await userEvent.click(within(dialog).getByRole('button', { name: /January 10th, 2024/ }));
        await userEvent.click(within(dialog).getByRole('button', { name: /January 15th, 2024/ }));

        expect(onChange).toHaveBeenLastCalledWith({ from: new Date(2024, 0, 10), to: new Date(2024, 0, 15) });
        // the open popover hides the rest of the page from the accessibility tree
        expect(screen.getByRole('combobox', { hidden: true })).toHaveValue('10 / 01 / 2024 – 15 / 01 / 2024');
    });

    it('picks multiple dates and lists them as chips', async () => {
        const onChange = jest.fn();
        render(<DatePicker label="Date" mode="multiple" initialMonth={JANUARY_2024} onChange={onChange} />);

        const dialog = await openCalendar();
        await userEvent.click(within(dialog).getByRole('button', { name: /January 12th, 2024/ }));
        await userEvent.click(within(dialog).getByRole('button', { name: /January 10th, 2024/ }));

        expect(onChange).toHaveBeenLastCalledWith([new Date(2024, 0, 10), new Date(2024, 0, 12)]);
        expect(screen.getByLabelText('Selected dates')).toHaveTextContent('10 / 01 / 2024');
        expect(screen.getByLabelText('Selected dates')).toHaveTextContent('12 / 01 / 2024');
    });

    it('disables days outside minDate and maxDate', async () => {
        render(
            <DatePicker
                label="Date"
                initialMonth={JANUARY_2024}
                minDate={new Date(2024, 0, 5)}
                maxDate={new Date(2024, 0, 20)}
            />
        );

        const dialog = await openCalendar();

        expect(within(dialog).getByRole('button', { name: /January 4th, 2024/ })).toBeDisabled();
        expect(within(dialog).getByRole('button', { name: /January 5th, 2024/ })).toBeEnabled();
        expect(within(dialog).getByRole('button', { name: /January 20th, 2024/ })).toBeEnabled();
        expect(within(dialog).getByRole('button', { name: /January 21st, 2024/ })).toBeDisabled();
    });
});
