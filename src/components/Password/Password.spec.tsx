import React from 'react';
import { render, screen } from '@testing-library/react';

import { Password } from './Password';

describe('Password', () => {
    it('is in hidden password mode and button to toggle', () => {
        render(<Password label="password" id="id" />);

        expect(screen.getByLabelText('password')).toHaveAttribute('type', 'password');
        expect(screen.getByRole('button', { name: 'show' })).toBeInTheDocument();
    });

    describe('when toggle button is clicked', () => {
        it.todo('when mode is hide password, changes the mode to show');
        it.todo('when mode is show password, changes the mode to hide');
    });
});
