import { fireEvent, render, waitFor, screen } from '@testing-library/react';
import { format } from 'date-fns';
import userEvent from '@testing-library/user-event';
import { advanceTo, clear } from 'jest-date-mock';
import * as React from 'react';
import { DatepickerSingleInput } from './DatepickerSingleInput';

describe('DatepickerSingleInput', () => {
    const today = new Date(1999, 1, 2);

    beforeAll(() => {
        advanceTo(today);
    });

    afterAll(() => {
        clear();
    });

    it('renders the default props', () => {
        expect(render(<DatepickerSingleInput />).container).toMatchSnapshot();
    });

    describe('should call onClose function', () => {
        it('when clicking outside', async () => {
            const mockCloseHandler = jest.fn();
            const { getByTestId } = render(<DatepickerSingleInput onClose={mockCloseHandler} />);

            // Open datepicker
            userEvent.click(getByTestId('start-date-input'));

            // Сlick outside
            fireEvent.blur(getByTestId('start-date-input'));

            await waitFor(() => expect(mockCloseHandler).toHaveBeenCalled());
        });
    });

    it('should call onChange function after the date selection', async () => {
        const mockChangeHandler = jest.fn();
        const { getByTestId, getByText } = render(<DatepickerSingleInput onChange={mockChangeHandler} />);

        // Open datepicker
        userEvent.click(getByTestId('start-date-input'));

        // Select the first date
        fireEvent.click(getByText('01'));

        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();

        await waitFor(() => expect(mockChangeHandler).toHaveBeenCalledWith(new Date(currentYear, currentMonth, 1)));
    });

    it('calls errorHandler as a fn if a callback is provided', async () => {
        const mockChangeHandler = jest.fn();
        const mockErrorTextHandler = jest.fn();
        const { getByTestId } = render(
            <DatepickerSingleInput onChange={mockChangeHandler} errorHandler={mockErrorTextHandler} />
        );
        const input = getByTestId('start-date-input');

        const intendedDate = new Date(2020, 5, 1);
        // force to use WRONG FORMAT to test the error
        const formattedDate = format(intendedDate, 'dd/MM/yy');

        // Simulate an input change
        await userEvent.type(input, formattedDate);

        expect(mockErrorTextHandler).toHaveBeenCalledTimes(1);
    });

    it('calls onChange function after update input value', async () => {
        const mockChangeHandler = jest.fn();
        const { getByTestId } = render(<DatepickerSingleInput onChange={mockChangeHandler} />);
        const input = getByTestId('start-date-input');

        // Focus on datepicker
        userEvent.click(input);

        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();
        const intendedDate = new Date(currentYear, currentMonth, 1);
        const formattedDate = format(intendedDate, 'dd/MM/yyyy');

        // Simulate an input change
        await userEvent.type(input, formattedDate);

        expect(mockChangeHandler).toHaveBeenCalledWith(intendedDate);
    });

    it('renders an error feedback if gets filled with invalid value', async () => {
        const mockChangeHandler = jest.fn();
        const { getByTestId } = render(<DatepickerSingleInput onChange={mockChangeHandler} />);
        const input = getByTestId('start-date-input');

        // Focus on datepicker
        userEvent.click(input);

        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();
        const intendedDate = new Date(currentYear, currentMonth, 1);
        // force to use WRONG FORMAT to test the error
        const formattedDate = format(intendedDate, 'dd/MM/yy');

        // Simulate an input change
        await userEvent.type(input, formattedDate);

        expect(mockChangeHandler).not.toHaveBeenCalled();
        expect(input).toHaveAttribute('data-error', 'true');

        // Simulate an input empty again so error state should disappear
        fireEvent.change(input, { target: { value: '' } });
        expect(input).toHaveAttribute('data-error', 'false');
    });

    it('closes the calendar of the first datepicker and opens the calendar of the second', async () => {
        const { getAllByTestId, getAllByText } = render(
            <>
                <DatepickerSingleInput />
                <DatepickerSingleInput />
            </>
        );

        const inputs = getAllByTestId('start-date-input');
        expect(inputs).toHaveLength(2);

        userEvent.click(inputs[0]);
        expect(getAllByText('01')).toHaveLength(1);

        userEvent.click(inputs[1]);
        expect(getAllByText('01')).toHaveLength(1);
    });

    it('localizes selected date correctly', async () => {
        const date = new Date(2020, 11, 15);
        render(<DatepickerSingleInput value={date} locale="de-DE" displayFormat="dd MMMM yyyy" />);

        const localizedCurrentMonth = 'Dezember';
        const currentYear = date.getFullYear();

        await screen.findByDisplayValue(`15 ${localizedCurrentMonth} ${currentYear}`);
    });

    it('localizes datepicker calendar month and weekdays', async () => {
        const date = new Date(2020, 11, 15);
        render(<DatepickerSingleInput value={date} locale="de-DE" />);

        // Open datepicker
        userEvent.click(screen.getByTestId('start-date-input'));

        const localizedCurrentMonth = 'Dezember';
        const currentYear = date.getFullYear();

        await screen.findByText(`${localizedCurrentMonth} ${currentYear}`);
        await screen.findByText('Do');
    });
});
