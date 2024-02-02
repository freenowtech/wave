import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Select } from './Select';

describe('Select', () => {
    it('can be selected using accessible queries', async () => {
        const user = userEvent.setup();
        render(
            <Select defaultValue="2" label="Wave" id="test">
                <option value="1">test 1</option>
                <option value="2">test 2</option>
            </Select>
        );

        await user.selectOptions(screen.getByRole('combobox', { name: /wave/i }), '1');

        expect(screen.getByLabelText('Wave')).toHaveDisplayValue('test 1');
    });

    it('should render an empty placeholder options when provided', async () => {
        const user = userEvent.setup();
        const onChangeMock = jest.fn();

        render(
            <Select
                label="Select"
                placeholder="placeholder"
                defaultValue="1"
                onChange={e => onChangeMock(e.target.value)}
            >
                <option value="1">test 1</option>
            </Select>
        );

        await user.selectOptions(screen.getByLabelText('Select'), '');

        expect(screen.getByLabelText('Select')).toHaveDisplayValue('placeholder');
        expect(onChangeMock).toHaveBeenCalledWith('');
    });
});
