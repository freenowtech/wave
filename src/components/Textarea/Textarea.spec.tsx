import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { ElementRef } from 'react';
import { Textarea } from './Textarea';

describe('Textarea', () => {
    it('renders the label', () => {
        render(<Textarea label="Name" />);
        expect(screen.getByLabelText('Name')).toBeInTheDocument();
    });

    it('renders with custom height and width', () => {
        const { container } = render(
            <Textarea label="Name" placeholder="FREE NOW" height="10rem" width="10rem" />
        );
        expect(container.firstChild).toHaveStyle({
            height: '10rem',
            width: '10rem'
        });
    });

    it('renders the disabled state with label and placeholder', () => {
        render(<Textarea label="Name" placeholder="FREE NOW" disabled />);
        expect(screen.getByLabelText('Name')).toBeDisabled();
    });

    describe('link textarea with the label', () => {
        it('uses `id` prop value if passed', () => {
            render(<Textarea id="test-input-id" label="Simple Label" />);

            expect(screen.getByLabelText('Simple Label')).toHaveAttribute('id', 'test-input-id');
            expect(screen.getByText('Simple Label')).toHaveAttribute('for', 'test-input-id');
        });

        it('generate id automatically if `id` prop is empty', () => {
            render(<Textarea label="Simple Label" />);
            const textarea = screen.getByLabelText('Simple Label');
            const label = screen.getByText<ElementRef<'label'>>('Simple Label');
            expect(textarea).toHaveAttribute('id');
            expect(label).toHaveAttribute('for');
            expect(textarea.id).toEqual(label.htmlFor);
        });
    });
});
