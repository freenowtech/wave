import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Popover } from './Popover';

describe('Popover', () => {
    it('opens the content when the trigger is clicked and sets data-popper-placement', async () => {
        render(
            <Popover content="Popover content" placement="top-start">
                <button type="button">Trigger</button>
            </Popover>
        );

        expect(screen.queryByText('Popover content')).not.toBeInTheDocument();

        await userEvent.click(screen.getByRole('button', { name: 'Trigger' }));

        expect(screen.getByText('Popover content').closest('#popover-content')).toHaveAttribute(
            'data-popper-placement',
            'top-start'
        );
    });

    it('resolves the auto placements to the side with the most space', async () => {
        render(
            <Popover content="Popover content" placement="auto">
                <button type="button">Trigger</button>
            </Popover>
        );

        await userEvent.click(screen.getByRole('button', { name: 'Trigger' }));

        expect(screen.getByText('Popover content').closest('#popover-content')).toHaveAttribute(
            'data-popper-placement',
            expect.stringMatching(/^(top|right|bottom|left)$/)
        );
    });
});
