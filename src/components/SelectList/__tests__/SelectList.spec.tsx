import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { SelectList } from '../SelectList';

describe('SelectList', () => {
    it('renders 2 options', () => {
        render(
            <SelectList
                defaultMenuIsOpen
                options={[
                    { label: 'Option 1', value: 'option1' },
                    { label: 'Option 2', value: 'option2' }
                ]}
            />
        );

        expect(screen.getByText('Option 1')).toBeInTheDocument();
        expect(screen.getByText('Option 2')).toBeInTheDocument();
    });

    it('renders label', () => {
        render(<SelectList label="Label" />);

        expect(screen.getByText('Label')).toBeInTheDocument();
    });

    it('toggles the icon when the select is active/inactive', async () => {
        const user = userEvent.setup();
        render(
            <SelectList
                options={[
                    { label: 'Option 1', value: 'option1' },
                    { label: 'Option 2', value: 'option2' }
                ]}
            />
        );

        const selectInput = screen.getByRole('combobox');

        expect(screen.getByTestId('open-icon')).toBeInTheDocument();

        await user.click(selectInput);

        expect(screen.queryByTestId('open-icon')).not.toBeInTheDocument();
        expect(screen.queryByTestId('close-icon')).toBeInTheDocument();
    });
});
