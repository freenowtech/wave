import { createContext } from 'react';

/* eslint-disable @typescript-eslint/no-unused-vars */

const datepickerContextDefaultValue = {
    // todo: check if this can be changed to undefined, could be breaking clients
    // eslint-disable-next-line unicorn/no-null
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

/* eslint-enable @typescript-eslint/no-unused-vars */

export const DatepickerContext = createContext(datepickerContextDefaultValue);
