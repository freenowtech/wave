import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import { Password } from './Password';

const ControlledPassword = props => {
    const [value, setValue] = useState('');
    const handleChange = e => {
        setValue(e.target.value);
    };

    return <Password {...props} id="password-id" value={value} onChange={handleChange} />;
};

describe('Password', () => {
    describe('in initial render', () => {
        it('is in hidden password mode', () => {
            render(<Password label="password" id="id" />);

            expect(screen.getByLabelText('password')).toHaveAttribute('type', 'password');
            expect(screen.getByRole('button', { name: 'show' })).toBeInTheDocument();
        });
    });

    describe('when toggle button is clicked', () => {
        it('when mode is hide password, changes the mode to show', () => {
            render(<ControlledPassword label="password" id="id" />);
            const input = screen.getByLabelText('password') as HTMLInputElement;
            const toggleButton = screen.getByRole('button');

            expect(input).toHaveAttribute('type', 'password');
            expect(toggleButton.innerHTML).toBe('show');

            const passwordText = 'my-very-secure-password';
            user.type(input, passwordText);
            user.click(toggleButton);

            expect(input).toHaveAttribute('type', 'text');
            expect(input).toHaveAttribute('value', passwordText);
            expect(toggleButton.innerHTML).toBe('hide');
        });
        it.todo('when mode is show password, changes the mode to hide');
    });
});
