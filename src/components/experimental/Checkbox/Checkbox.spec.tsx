import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as React from 'react';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
    it('selects/unselects the checkbox on clicking the label', async () => {
        const user = userEvent.setup();
        const labelText = 'Click Me!';
        const onChangeCallback = jest.fn();

        render(<Checkbox label={labelText} onChange={isSelected => onChangeCallback(isSelected)} />);

        const label = screen.getByText(labelText);

        await user.click(label);
        expect(onChangeCallback).toHaveBeenCalledWith(true);

        await user.click(label);
        expect(onChangeCallback).toHaveBeenCalledWith(false);
    });

    it('renders with default selected state', () => {
        render(<Checkbox label="Test Checkbox" defaultSelected />);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeChecked();
    });

    it('renders in disabled state', async () => {
        const user = userEvent.setup();
        const onChangeCallback = jest.fn();

        render(<Checkbox label="Disabled Checkbox" isDisabled onChange={onChangeCallback} />);

        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeDisabled();

        await user.click(checkbox);
        expect(onChangeCallback).not.toHaveBeenCalled();
    });

    it('renders in invalid state', () => {
        render(<Checkbox label="Invalid Checkbox" isInvalid />);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toHaveAttribute('aria-invalid', 'true');
    });

    it('renders in indeterminate state', () => {
        render(<Checkbox label="Indeterminate Checkbox" isIndeterminate />);
        const checkbox = screen.getByRole('checkbox');
        const container = checkbox.closest('[data-indeterminate="true"]');
        expect(container).toBeInTheDocument();
    });
});
