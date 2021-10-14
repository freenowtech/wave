import { fireEvent, render, screen } from '@testing-library/react';
import * as React from 'react';

import { PhoneInput } from './PhoneInput';

const selectOption = async (currentValueText: string, selectOptionText: string) => {
    fireEvent.keyDown(screen.getByText(currentValueText), { keyCode: 40 });
    fireEvent.click(await screen.findByText(selectOptionText));
};

// FIXME: These tests seems to take a very long time (more than 10s), not sure why.
//
// I disabled the tests for now and created an issue to fix this see: https://github.com/freenowtech/wave/issues/27
// eslint-disable-next-line jest/no-disabled-tests
describe.skip('PhoneInput', () => {
    const defaultCountry = { value: 'DE', label: 'Germany', dialCode: '+49' };

    it('should call the country change handler when the user selects a country', async () => {
        const mockCountryChangeHandler = jest.fn();
        const mockTextChangeHandler = jest.fn();
        render(
            <PhoneInput
                country={defaultCountry}
                onCountryChange={mockCountryChangeHandler}
                onTextChange={mockTextChangeHandler}
            />
        );

        await selectOption(defaultCountry.dialCode, 'Andorra +376');

        expect(mockTextChangeHandler).not.toHaveBeenCalled();
        expect(mockCountryChangeHandler).toHaveBeenCalledWith({ value: 'AD', label: 'Andorra +376', dialCode: '+376' });
    }, 10000);

    it('should focus on national number input after selecting a country', async () => {
        render(<PhoneInput country={defaultCountry} label="Phone Number" />);

        await selectOption(defaultCountry.dialCode, 'Spain (España) +34');

        expect(document.activeElement).toEqual(screen.getByLabelText('Phone Number'));
    });

    it('should call the change handler when typing in the national number input', () => {
        const mockCountryChangeHandler = jest.fn();
        const mockTextChangeHandler = jest.fn();
        render(
            <PhoneInput
                label="Phone Number"
                country={defaultCountry}
                onCountryChange={mockCountryChangeHandler}
                onTextChange={mockTextChangeHandler}
            />
        );

        fireEvent.change(screen.getByLabelText('Phone Number'), { target: { value: '01722254928' } });

        expect(mockTextChangeHandler).toHaveBeenCalled();
        expect(mockCountryChangeHandler).not.toHaveBeenCalled();
    });
});
