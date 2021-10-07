import { FC } from 'react';
import * as React from 'react';
import { DatepickerRangeInput } from '../DatepickerRangeInput';

export const ControlledDatepickerRangeInput: FC = props => {
    const [startValue, setStartValue] = React.useState<Date>();
    const [endValue, setEndValue] = React.useState<Date>();

    return (
        <DatepickerRangeInput
            value={{ startDate: startValue, endDate: endValue }}
            onChange={date => {
                setStartValue(date.startDate);
                setEndValue(date.endDate);
            }}
            {...props}
        />
    );
};
