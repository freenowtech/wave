import { FC } from 'react';
import * as React from 'react';
import { COUNTRIES } from '../constants';
import { PhoneInput, PhoneInputProps } from '../PhoneInput';

const ControlledPhoneInput: FC<PhoneInputProps> = (props: PhoneInputProps) => {
    const [nationalNumber, setNationalNumber] = React.useState('');
    const [country, setCountry] = React.useState(COUNTRIES.find(it => it.value === 'DE'));

    return (
        <PhoneInput
            id="phone-input-example"
            text={nationalNumber}
            country={country}
            onCountryChange={c => setCountry(c)}
            onTextChange={event => setNationalNumber(event.target.value)}
            {...props}
        />
    );
};

export { ControlledPhoneInput };
