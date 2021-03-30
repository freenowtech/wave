import { getInputValue } from '@datepicker-react/hooks';

const isValidDateText = (parsedDate: Date, inputValue: string, displayFormat: string) => {
    if (!parsedDate) {
        return false;
    }

    return !isNaN(parsedDate.getTime()) && getInputValue(parsedDate, displayFormat, '') == inputValue;
};

export { isValidDateText };
