/* tslint:disable:no-empty */
import { createContext } from 'react';

const datepickerContextDefaultValue = {
    focusedDate: null,
    isDateFocused: (date: Date) => false,
    isDateSelected: (date: Date) => false,
    isDateHovered: (date: Date) => false,
    isDateBlocked: (date: Date) => false,
    isFirstOrLastSelectedDate: (date: Date) => false,
    onDateFocus: (date: Date) => {},
    onDateHover: (date: Date) => {},
    onDateSelect: (date: Date) => {}
};

export const DatepickerContext = createContext(datepickerContextDefaultValue);
