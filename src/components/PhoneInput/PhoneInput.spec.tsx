import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import * as React from 'react';

import { PhoneInput } from './PhoneInput';

const selectOption = async (currentValueText, selectOptionText) => {
    fireEvent.keyDown(screen.getByText(currentValueText), { keyCode: 40 });
    await waitFor(() => screen.getByText(selectOptionText));
    fireEvent.click(screen.getByText(selectOptionText));
};

describe('PhoneInput', () => {
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
    });

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
