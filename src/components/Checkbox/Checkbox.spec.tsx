import { render } from '@testing-library/react';
import user from '@testing-library/user-event';

import * as React from 'react';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
    it('renders with default props', () => {
        expect(render(<Checkbox />).container.firstChild).toMatchSnapshot();
    });

    it('renders the checked style', () => {
        expect(render(<Checkbox defaultChecked />).container.firstChild).toMatchSnapshot();
    });

    it('renders the error style', () => {
        expect(render(<Checkbox error />).container.firstChild).toMatchSnapshot();
    });

    it('renders the error checked style', () => {
        expect(render(<Checkbox error disabled />).container.firstChild).toMatchSnapshot();
    });

    it('renders the disabled style', () => {
        expect(render(<Checkbox disabled />).container.firstChild).toMatchSnapshot();
    });

    it('renders the disabled checked style', () => {
        expect(render(<Checkbox disabled defaultChecked />).container.firstChild).toMatchSnapshot();
    });

    it('renders small checkbox', () => {
        expect(render(<Checkbox size="small" />).container.firstChild).toMatchSnapshot();
    });

    it('renders medium checkbox', () => {
        expect(render(<Checkbox size="medium" />).container.firstChild).toMatchSnapshot();
    });

    it('renders large checkbox', () => {
        expect(render(<Checkbox size="large" />).container.firstChild).toMatchSnapshot();
    });

    it('selects/unselects the checkbox on clicking the label', () => {
        const labelText = 'Click Me!';
        const onClickCallback = jest.fn();
        const checkbox = render(<Checkbox label={labelText} onChange={e => onClickCallback(e.target.checked)} />);
        const label = checkbox.getByText(labelText);

        user.click(label);
        expect(onClickCallback).toBeCalledWith(true);

        user.click(label);
        expect(onClickCallback).toBeCalledWith(false);
    });
});
