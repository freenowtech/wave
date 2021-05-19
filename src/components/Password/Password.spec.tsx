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
    it('initially renders in hidden password mode', () => {
        render(<Password label="password" id="id" />);

        expect(screen.getByLabelText('password')).toHaveAttribute('type', 'password');
        expect(screen.getByRole('button', { name: 'show' })).toBeInTheDocument();
    });

    describe('`purpose` property', () => {
        it('has autocomplete off when set to "login"', () => {
            render(<Password label="password" id="id" purpose="login" />);
            expect(screen.getByLabelText('password')).toHaveAttribute('autocomplete', 'off');
        });

        it('has autocomplete new-password when set to "new-password', () => {
            render(<Password label="password" id="id" purpose="new-password" />);
            expect(screen.getByLabelText('password')).toHaveAttribute('autocomplete', 'new-password');
        });
    });

    it('focus moves from the input to the button', () => {
        render(<Password label="password" id="id" />);

        expect(document.body).toHaveFocus();

        user.tab();
        expect(screen.getByLabelText('password')).toHaveFocus();

        user.tab();
        expect(screen.getByRole('button')).toHaveFocus();

        user.tab();
        expect(document.body).toHaveFocus();
    });

    describe('when toggle button is clicked', () => {
        it('changes the mode to show if the current mode is hide', () => {
            render(<ControlledPassword label="password" id="id" />);
            const input = screen.getByLabelText('password');
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

        it('changes the mode to hide if the current mode is show', () => {
            render(<ControlledPassword label="password" id="id" />);
            const input = screen.getByLabelText('password');
            const toggleButton = screen.getByRole('button');

            expect(input).toHaveAttribute('type', 'password');

            // show password as plain text
            user.click(toggleButton);
            expect(input).toHaveAttribute('type', 'text');

            // hide password again
            user.click(toggleButton);
            expect(input).toHaveAttribute('type', 'password');
            expect(toggleButton.innerHTML).toBe('show');
        });
    });
});
