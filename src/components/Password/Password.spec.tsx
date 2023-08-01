import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Password } from './Password';

const ControlledPassword = props => {
    const [value, setValue] = useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return <Password {...props} id="password-id" value={value} onChange={handleChange} />;
};

describe('Password', () => {
    it('initially renders in hidden password mode', () => {
        render(<Password label="password" id="id" />);

        expect(screen.getByLabelText('password')).toHaveAttribute('type', 'password');
        expect(screen.getByRole('button', { name: /show/i })).toBeInTheDocument();
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

    it('focus moves from the input to the button', async () => {
        const user = userEvent.setup();
        render(<Password label="password" id="id" />);

        expect(document.body).toHaveFocus();

        await user.tab();
        expect(screen.getByLabelText('password')).toHaveFocus();

        await user.tab();
        expect(screen.getByRole('button')).toHaveFocus();

        await user.tab();
        expect(document.body).toHaveFocus();
    });

    describe('when toggle button is clicked', () => {
        it('changes the mode to show if the current mode is hide', async () => {
            const user = userEvent.setup();
            render(<ControlledPassword label="password" id="id" />);
            const input = screen.getByLabelText('password');
            const toggleButton = screen.getByRole('button');

            expect(input).toHaveAttribute('type', 'password');
            expect(toggleButton).toHaveAttribute('aria-label', 'Show password');

            const passwordText = 'my-very-secure-password';
            await user.type(input, passwordText);
            await user.click(toggleButton);

            expect(input).toHaveAttribute('type', 'text');
            expect(input).toHaveAttribute('value', passwordText);
            expect(toggleButton).toHaveAttribute('aria-label', 'Hide password');
        });

        it('changes the mode to hide if the current mode is show', async () => {
            const user = userEvent.setup();
            render(<ControlledPassword label="password" id="id" />);
            const input = screen.getByLabelText('password');
            const toggleButton = screen.getByRole('button');

            expect(input).toHaveAttribute('type', 'password');

            // show password as plain text
            await user.click(toggleButton);
            expect(input).toHaveAttribute('type', 'text');

            // hide password again
            await user.click(toggleButton);
            expect(input).toHaveAttribute('type', 'password');
            expect(toggleButton).toHaveAttribute('aria-label', 'Show password');
        });
    });
});
