import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as React from 'react';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
    it('selects/unselects the checkbox on clicking the label', async () => {
        const user = userEvent.setup()
        const labelText = 'Click Me!';
        const onClickCallback = jest.fn();
        const checkbox = render(<Checkbox label={labelText} onChange={e => onClickCallback(e.target.checked)} />);
        const label = checkbox.getByText(labelText);

        await user.click(label);
        expect(onClickCallback).toBeCalledWith(true);

        await user.click(label);
        expect(onClickCallback).toBeCalledWith(false);
    });
});
