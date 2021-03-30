import * as React from 'react';
import { COUNTRIES } from '../constants';
import { PhoneInput } from '../PhoneInput';

const ControlledPhoneInput = props => {
    const [nationalNumber, setNationalNumber] = React.useState('');
    const [country, setCountry] = React.useState(COUNTRIES.find(it => it.value == 'DE'));

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
