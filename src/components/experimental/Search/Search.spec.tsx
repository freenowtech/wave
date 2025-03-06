import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Search } from './Search';

describe('Experimental: Search', () => {
    it('renders correctly', async () => {
        const user = userEvent.setup();
        const utils = render(<Search placeholder="Test" />);

        const searchField = await utils.findByRole('searchbox', {
            name: 'Test'
        });

        await user.type(searchField, 'Text');

        const clearButton = utils.queryByRole('button', {
            name: 'Clear search'
        });

        expect(searchField).toHaveValue('Text');
        expect(clearButton).toBeVisible();

        await user.click(clearButton);

        expect(searchField).toHaveValue('');
        expect(clearButton).not.toBeInTheDocument();
    });
});
