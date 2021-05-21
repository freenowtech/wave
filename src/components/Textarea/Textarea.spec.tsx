import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { Textarea } from './Textarea';

describe('Textarea', () => {
    it('renders', () => {
        expect(render(<Textarea />).container.firstChild).toMatchSnapshot();
    });

    it('renders the inverted style', () => {
        expect(render(<Textarea inverted />).container.firstChild).toMatchSnapshot();
    });

    it('renders the label', () => {
        expect(render(<Textarea label="Name" />).container.firstChild).toMatchSnapshot();
    });

    it('renders the label and the placeholder', () => {
        expect(render(<Textarea label="Name" placeholder="FREE NOW" />).container.firstChild).toMatchSnapshot();
    });

    it('renders the error state', () => {
        expect(render(<Textarea error />).container.firstChild).toMatchSnapshot();
    });

    it('renders the error state with label and placeholder', () => {
        expect(render(<Textarea label="Name" placeholder="FREE NOW" error />).container.firstChild).toMatchSnapshot();
    });

    it('renders with custom height and width', () => {
        expect(
            render(<Textarea label="Name" placeholder="FREE NOW" height="10rem" width="10rem" />).container.firstChild
        ).toMatchSnapshot();
    });

    it('renders the disabled state with label and placeholder', () => {
        expect(
            render(<Textarea label="Name" placeholder="FREE NOW" disabled />).container.firstChild
        ).toMatchSnapshot();
    });

    describe('link textarea with the label', () => {
        it('uses `id` prop value if passed', () => {
            render(<Textarea id="test-input-id" label="Simple Label" />);

            expect(screen.getByLabelText('Simple Label')).toHaveAttribute('id', 'test-input-id');
            expect(screen.getByText('Simple Label')).toHaveAttribute('for', 'test-input-id');
        });

        it('generate id automatically if `id` prop is empty', () => {
            render(<Textarea label="Simple Label" />);
            const generatedId = 'random';

            expect(screen.getByLabelText('Simple Label')).toHaveAttribute('id', generatedId);
            expect(screen.getByText('Simple Label')).toHaveAttribute('for', generatedId);
        });
    });
});
