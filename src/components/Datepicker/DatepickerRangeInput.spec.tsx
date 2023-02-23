import { act, fireEvent, render, waitFor } from '@testing-library/react';
import { endOfDay, format, startOfDay } from 'date-fns';
import userEvent from '@testing-library/user-event';
import { advanceTo, clear } from 'jest-date-mock';
import * as React from 'react';
import { DatepickerRangeInput, DatepickerRangeInputProps, DateRange } from './DatepickerRangeInput';

const ControlledRangeInput: React.FC<DatepickerRangeInputProps> = ({
    onChange,
    ...rest
}: DatepickerRangeInputProps) => {
    const [range, setRange] = React.useState<DateRange>();

    return (
        <DatepickerRangeInput
            value={range}
            onChange={(...dates) => {
                onChange?.(...dates);
                setRange(dates[0]);
            }}
            {...rest}
        />
    );
};

describe('DatepickerRangeInput', () => {
    const today = new Date(1999, 1, 2);

    beforeAll(() => {
        advanceTo(today);
    });

    afterAll(() => {
        clear();
    });

    it('renders the default props', () => {
        expect(render(<DatepickerRangeInput />).container).toMatchSnapshot();
    });

    it('can be disabled', () => {
        const { getAllByRole } = render(<DatepickerRangeInput disabled />);
        const inputs = getAllByRole('textbox');
        expect(inputs).toHaveLength(2);
        inputs.forEach(input => {
            expect(input).toBeDisabled();
        });
    });

    describe('should call onClose function', () => {
        it('when clicking outside', async () => {
            const mockCloseHandler = jest.fn();
            const { getByTestId } = render(<DatepickerRangeInput onClose={mockCloseHandler} />);

            // Open datepicker
            userEvent.click(getByTestId('start-date-input'));

            // Click outside
            fireEvent.blur(getByTestId('start-date-input'));

            await waitFor(() => expect(mockCloseHandler).toHaveBeenCalled());
        });
        it('exactly once after non initial date selection', () => {
            const mockCloseHandler = jest.fn();
            const { getByTestId, getAllByText } = render(<ControlledRangeInput onClose={mockCloseHandler} />);
            const selectDate = day => {
                // Open datepicker
                userEvent.click(getByTestId('start-date-input'));

                const buttons = getAllByText(day);
                // Select the first date
                act(() => userEvent.click(buttons[0]));
                // Select the second date
                act(() => userEvent.click(buttons[1]));
            };

            // initial date selection
            selectDate('01');
            expect(mockCloseHandler).toBeCalledTimes(1);

            selectDate('02');

            expect(mockCloseHandler).toBeCalledTimes(2);
        });
    });

    it('should call onChange function after the date selection', async () => {
        const mockChangeHandler = jest.fn();

        const { getByTestId, getAllByText } = render(<ControlledRangeInput onChange={mockChangeHandler} />);

        // Open datepicker
        userEvent.click(getByTestId('start-date-input'));

        const buttons = getAllByText('01');

        // Select the first date
        userEvent.click(buttons[0]);

        // Select the second date
        userEvent.click(buttons[1]);
        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();

        await waitFor(() =>
            expect(mockChangeHandler).toHaveBeenCalledWith({
                startDate: startOfDay(new Date(currentYear, currentMonth, 1)),
                endDate: endOfDay(new Date(currentYear, currentMonth + 1, 1))
            })
        );
    });

    it('calls onChange function after update input value', () => {
        const mockChangeHandler = jest.fn();
        const { getByTestId } = render(<ControlledRangeInput onChange={mockChangeHandler} />);
        const startInput = getByTestId('start-date-input');
        const endInput = getByTestId('end-date-input');

        // Focus on datepicker
        userEvent.click(startInput);

        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();
        const intendedRange = {
            start: new Date(currentYear, currentMonth, 1),
            end: new Date(currentYear, currentMonth, 2)
        };
        const formattedDateStart = format(intendedRange.start, 'dd/MM/yyyy');
        const formattedDateEnd = format(intendedRange.end, 'dd/MM/yyyy');

        // Simulate an input change
        userEvent.type(startInput, formattedDateStart);
        userEvent.type(endInput, formattedDateEnd);

        expect(mockChangeHandler).toHaveBeenCalledTimes(2);
        expect(mockChangeHandler).toHaveBeenNthCalledWith(2, {
            startDate: startOfDay(intendedRange.start),
            endDate: endOfDay(intendedRange.end)
        });
    });

    it('allows to set a range with a single day', () => {
        const mockChangeHandler = jest.fn();
        const { getByTestId } = render(<ControlledRangeInput onChange={mockChangeHandler} />);
        const startInput = getByTestId('start-date-input');
        const endInput = getByTestId('end-date-input');

        // Focus on datepicker
        userEvent.click(startInput);

        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();
        const intendedRange = {
            start: new Date(currentYear, currentMonth, 1),
            end: new Date(currentYear, currentMonth, 1)
        };
        const formattedDateStart = format(intendedRange.start, 'dd/MM/yyyy');
        const formattedDateEnd = format(intendedRange.end, 'dd/MM/yyyy');

        // Simulate an input change
        userEvent.type(startInput, formattedDateStart);
        userEvent.type(endInput, formattedDateEnd);

        expect(mockChangeHandler).toHaveBeenCalledTimes(2);
        expect(mockChangeHandler).toHaveBeenNthCalledWith(2, {
            startDate: startOfDay(intendedRange.start),
            endDate: endOfDay(intendedRange.end)
        });
    });

    it('renders an error feedback if gets filled with invalid value', () => {
        const mockChangeHandler = jest.fn();
        const { getByTestId } = render(<ControlledRangeInput onChange={mockChangeHandler} />);
        const startInput = getByTestId('start-date-input');
        const endInput = getByTestId('end-date-input');

        // Focus on datepicker
        userEvent.click(startInput);

        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();
        const intendedRange = {
            start: new Date(currentYear, currentMonth, 2),
            end: new Date(currentYear, currentMonth, 1)
        };
        const formattedDateStart = format(intendedRange.start, 'dd/MM/yyyy');
        const formattedDateEnd = format(intendedRange.end, 'dd/MM/yyyy');

        // Simulate an input change
        userEvent.type(startInput, formattedDateStart);
        userEvent.type(endInput, formattedDateEnd);

        expect(startInput).toHaveAttribute('data-error', 'false');
        expect(endInput).toHaveAttribute('data-error', 'true');
        // Cause when error is thrown there is no actual parsing of date
        expect(mockChangeHandler).toHaveBeenCalledTimes(1);
    });

    it('on error calls errorHandler as a fn if a callback is provided', () => {
        const mockChangeHandler = jest.fn();
        const mockErrorTextHandler = jest.fn();
        const { getByTestId } = render(
            <ControlledRangeInput onChange={mockChangeHandler} errorHandler={mockErrorTextHandler} />
        );
        const startInput = getByTestId('start-date-input');
        const endInput = getByTestId('end-date-input');

        // Focus on datepicker
        userEvent.click(startInput);

        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();
        const intendedRange = {
            start: new Date(currentYear, currentMonth, 2),
            end: new Date(currentYear, currentMonth, 1)
        };
        const formattedDateStart = format(intendedRange.start, 'dd/MM/yyyy');
        const formattedDateEnd = format(intendedRange.end, 'dd/MM/yyyy');

        // Simulate an input change
        userEvent.type(startInput, formattedDateStart);
        userEvent.type(endInput, formattedDateEnd);

        // Error is explicitly called after blur the input so we avoid calls while user type
        fireEvent.blur(startInput);

        expect(mockErrorTextHandler).toHaveBeenCalledTimes(1);
    });

    it('closes the calendar of the first datepicker and opens the calendar of the second', () => {
        const { getAllByTestId, getAllByText } = render(
            <>
                <DatepickerRangeInput />
                <DatepickerRangeInput />
            </>
        );

        const inputs = getAllByTestId('start-date-input');
        expect(inputs).toHaveLength(2);

        userEvent.click(inputs[0]);
        expect(getAllByText('01')).toHaveLength(2);

        userEvent.click(inputs[1]);
        expect(getAllByText('01')).toHaveLength(2);
    });
});
