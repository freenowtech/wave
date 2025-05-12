import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Input } from './Input';

describe('Experimental: Input', () => {
    it('renders correctly', async () => {
        const user = userEvent.setup();
        const utils = render(<Input placeholder="Test" />);

        const input = await utils.findByPlaceholderText('Test');

        await user.type(input, 'Text');

        expect(input).toHaveValue('Text');
    });
});
