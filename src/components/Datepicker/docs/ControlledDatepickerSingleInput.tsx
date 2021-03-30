import * as React from 'react';
import { DatepickerSingleInput } from '../DatepickerSingleInput';

export const ControlledDatepickerSingleInput = props => {
    const [value, setValue] = React.useState();

    return <DatepickerSingleInput value={value} onChange={setValue} {...props} />;
};
