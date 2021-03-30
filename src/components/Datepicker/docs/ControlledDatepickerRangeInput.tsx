import * as React from 'react';
import { DatepickerRangeInput } from '../DatepickerRangeInput';

export const ControlledDatepickerRangeInput = props => {
    const [startValue, setStartValue] = React.useState();
    const [endValue, setEndValue] = React.useState();

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
