import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tooltip } from './Tooltip';

describe('Tooltip', () => {
    it('shows the content while the trigger is hovered', async () => {
        render(
            <Tooltip content="Tooltip content">
                <button type="button">Trigger</button>
            </Tooltip>
        );

        expect(screen.queryByText('Tooltip content')).not.toBeInTheDocument();

        await userEvent.hover(screen.getByRole('button'));
        expect(screen.getByText('Tooltip content')).toBeInTheDocument();

        await userEvent.unhover(screen.getByRole('button'));
        expect(screen.queryByText('Tooltip content')).not.toBeInTheDocument();
    });

    it('sets data-popper-placement on the tooltip', async () => {
        render(
            <Tooltip content="Tooltip content" placement="bottom-end" alwaysVisible>
                <button type="button">Trigger</button>
            </Tooltip>
        );

        expect(
            await screen.findByText('Tooltip content').then(text => text.closest('[data-popper-placement]'))
        ).toHaveAttribute('data-popper-placement', 'bottom-end');
    });

    it('resolves the auto placements to the side with the most space', async () => {
        render(
            <Tooltip content="Tooltip content" placement="auto-start" alwaysVisible>
                <button type="button">Trigger</button>
            </Tooltip>
        );

        expect(
            await screen.findByText('Tooltip content').then(text => text.closest('[data-popper-placement]'))
        ).toHaveAttribute('data-popper-placement', expect.stringMatching(/^(top|right|bottom|left)-start$/));
    });
});
