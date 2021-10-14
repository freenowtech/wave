import { getInputValue } from '@datepicker-react/hooks';

const isValidDateText = (parsedDate: Date, inputValue: string, displayFormat: string): boolean => {
    if (!parsedDate) {
        return false;
    }

    return !Number.isNaN(parsedDate.getTime()) && getInputValue(parsedDate, displayFormat, '') === inputValue;
};

export { isValidDateText };
