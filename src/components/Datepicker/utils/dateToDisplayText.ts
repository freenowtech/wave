import { format } from 'date-fns';

const dateToDisplayText = (locale: Locale, displayFormat: string, value?: Date) => {
    if (!value) {
        return '';
    }

    return format(value, displayFormat, { locale });
};

export { dateToDisplayText };
