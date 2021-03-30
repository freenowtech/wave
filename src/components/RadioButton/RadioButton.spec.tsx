import { render } from '@testing-library/react';
import * as React from 'react';
import { RadioButton } from './RadioButton';

describe('Checkbox', () => {
    it('renders with default props', () => {
        expect(render(<RadioButton />).container.firstChild).toMatchSnapshot();
    });

    it('renders the checked style', () => {
        expect(render(<RadioButton defaultChecked />).container.firstChild).toMatchSnapshot();
    });

    it('renders the error style', () => {
        expect(render(<RadioButton error />).container.firstChild).toMatchSnapshot();
    });

    it('renders the error checked style', () => {
        expect(render(<RadioButton error disabled />).container.firstChild).toMatchSnapshot();
    });

    it('renders the disabled style', () => {
        expect(render(<RadioButton disabled />).container.firstChild).toMatchSnapshot();
    });

    it('renders the disabled checked style', () => {
        expect(render(<RadioButton disabled defaultChecked />).container.firstChild).toMatchSnapshot();
    });
});
