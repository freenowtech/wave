import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Toggle } from './Toggle';

describe('Toggle', () => {
    it('forwards the ref to the checkbox input', () => {
        let inputElement: HTMLInputElement | null = null;
        render(
            <Toggle
                ref={element => {
                    inputElement = element;
                }}
                label="Notifications"
            />
        );

        expect(inputElement).toBe(screen.getByRole('checkbox', { hidden: true }));
    });

    it('toggles when the label is clicked', async () => {
        const onChange = jest.fn();
        render(<Toggle label="Notifications" onChange={onChange} />);

        await userEvent.click(screen.getByText('Notifications'));

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(screen.getByRole('checkbox', { hidden: true })).toBeChecked();
    });
});
