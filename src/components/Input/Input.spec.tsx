import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react';
import { Input } from './Input';

describe('Input', () => {
    describe('variant "boxed"', () => {
        it('renders', () => {
            expect(render(<Input variant="boxed" />).container.firstChild).toMatchSnapshot();
        });

        it('renders the small size', () => {
            expect(render(<Input variant="boxed" size="small" />).container.firstChild).toMatchSnapshot();
        });

        it('renders the inverted style', () => {
            expect(render(<Input variant="boxed" inverted />).container.firstChild).toMatchSnapshot();
        });

        it('renders the label', () => {
            expect(render(<Input variant="boxed" label="Name" />).container.firstChild).toMatchSnapshot();
        });

        it('renders the label and the placeholder', () => {
            expect(
                render(<Input variant="boxed" label="Name" placeholder="FREE NOW" />).container.firstChild
            ).toMatchSnapshot();
        });

        it('renders the error state', () => {
            expect(render(<Input variant="boxed" error />).container.firstChild).toMatchSnapshot();
        });

        it('renders the error state with label and placeholder', () => {
            expect(
                render(<Input variant="boxed" label="Name" placeholder="FREE NOW" error />).container.firstChild
            ).toMatchSnapshot();
        });
    });

    describe('variant "bottom-lined"', () => {
        it('renders', () => {
            expect(render(<Input variant="bottom-lined" />).container.firstChild).toMatchSnapshot();
        });

        it('renders the small size', () => {
            expect(render(<Input variant="bottom-lined" size="small" />).container.firstChild).toMatchSnapshot();
        });

        it('renders the inverted style', () => {
            expect(render(<Input variant="bottom-lined" inverted />).container.firstChild).toMatchSnapshot();
        });

        it('renders the label', () => {
            expect(render(<Input variant="bottom-lined" label="Name" />).container.firstChild).toMatchSnapshot();
        });

        it('renders the label and the placeholder', () => {
            expect(
                render(<Input variant="bottom-lined" label="Name" placeholder="FREE NOW" />).container.firstChild
            ).toMatchSnapshot();
        });

        it('renders the error state', () => {
            expect(render(<Input variant="bottom-lined" error />).container.firstChild).toMatchSnapshot();
        });

        it('renders the error state with label and placeholder', () => {
            expect(
                render(<Input variant="bottom-lined" label="Name" placeholder="FREE NOW" error />).container.firstChild
            ).toMatchSnapshot();
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
            const generatedId = 'random';

            expect(screen.getByLabelText('Simple Label')).toHaveAttribute('id', generatedId);
            expect(screen.getByText('Simple Label')).toHaveAttribute('for', generatedId);
        });
    });

    it('allows to be tested using accessible queries', () => {
        const spySubmit = jest.fn();
        const onSubmit = e => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
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

        userEvent.type(usernameInput, 'jaimito');
        userEvent.type(passwordInput, 'tontoelquelolea');
        userEvent.click(submitBtn);

        expect(spySubmit).toHaveBeenCalledWith({ username: 'jaimito', password: 'tontoelquelolea' });
        // Because input type password doesn't have implicit roles (type is passing as prop as expected) https://www.w3.org/TR/html-aria/#docconformance
        expect(screen.queryByRole('textbox', { name: 'password' })).not.toBeInTheDocument();
    });
});
