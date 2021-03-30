import { render } from '@testing-library/react';
import * as React from 'react';
import { Toggle } from './Toggle';

describe('Toggle', () => {
    it('renders with default props', () => {
        expect(render(<Toggle />).container.firstChild).toMatchSnapshot();
    });

    it('renders the checked style', () => {
        expect(render(<Toggle defaultChecked />).container.firstChild).toMatchSnapshot();
    });

    it('renders the error style', () => {
        expect(render(<Toggle error />).container.firstChild).toMatchSnapshot();
    });

    it('renders the error checked style', () => {
        expect(render(<Toggle error disabled />).container.firstChild).toMatchSnapshot();
    });

    it('renders the disabled style', () => {
        expect(render(<Toggle disabled />).container.firstChild).toMatchSnapshot();
    });

    it('renders the disabled checked style', () => {
        expect(render(<Toggle disabled defaultChecked />).container.firstChild).toMatchSnapshot();
    });
});
