import * as React from 'react';
import { FC } from 'react';
import { DatepickerSingleInput } from '../DatepickerSingleInput';

export const ControlledDatepickerSingleInput: FC = props => {
    const [value, setValue] = React.useState<Date>();

    return <DatepickerSingleInput value={value} onChange={setValue} {...props} />;
};
