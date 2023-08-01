import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react';
import { ElementRef } from 'react';
import { Input } from './Input';

describe('Input', () => {
    describe('variant "boxed"', () => {
        it('renders boxed input by default', () => {
            const defaultRender = render(<Input label="Name" id="tst" />).container;
            const withVariantProp = render(<Input variant="boxed" label="Name" id="tst" />).container;

            expect(defaultRender).toEqual(withVariantProp);
        });

        it('has accessible label', () => {
            render(<Input variant="boxed" label="Name" />);
            expect(screen.getByLabelText('Name')).toBeInTheDocument();
        });
    });

    describe('variant "bottom-lined"', () => {
        it('has accessible label', () => {
            render(<Input variant="boxed" label="Name" />);
            expect(screen.getByLabelText('Name')).toBeInTheDocument();
        });
    });

    describe('link input with the label', () => {
        it('uses `id` prop value if passed', () => {
            render(<Input id="test-input-id" label="Simple Label" />);

            expect(screen.getByLabelText('Simple Label')).toHaveAttribute('id', 'test-input-id');
            expect(screen.getByText('Simple Label')).toHaveAttribute('for', 'test-input-id');
        });

        it('generate id automatically if `id` prop is empty', () => {
            render(<Input label="Simple Label" />);

            const input = screen.getByLabelText('Simple Label');
            const label = screen.getByText<ElementRef<'label'>>('Simple Label');
            expect(input).toHaveAttribute('id');
            expect(label).toHaveAttribute('for');
            expect(input.id).toEqual(label.htmlFor);
        });
    });

    it('allows to be tested using accessible queries', async () => {
        const user = userEvent.setup();
        const spySubmit = jest.fn();
        const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            spySubmit({ username: formData.get('username-name'), password: formData.get('password-name') });
        };

        render(
            <form onSubmit={onSubmit}>
                <Input id="username-id" name="username-name" label="username" />
                <Input id="password-id" type="password" name="password-name" label="password" />
                <button type="submit">Submit</button>
            </form>
        );

        const usernameInput = screen.getByRole('textbox', { name: 'username' });
        const passwordInput = screen.getByLabelText('password');
        const submitBtn = screen.getByRole('button', { name: /submit/i });

        await user.type(usernameInput, 'jaimito');
        await user.type(passwordInput, 'tontoelquelolea');
        await user.click(submitBtn);

        expect(spySubmit).toHaveBeenCalledWith({ username: 'jaimito', password: 'tontoelquelolea' });
        // Because input type password doesn't have implicit roles (type is passing as prop as expected) https://www.w3.org/TR/html-aria/#docconformance
        expect(screen.queryByRole('textbox', { name: 'password' })).not.toBeInTheDocument();
    });
});
