import { render, screen } from '@testing-library/react';
import React from 'react';
import { Select } from './Select';
import userEvent from '@testing-library/user-event';

describe('Select', () => {
    it('renders with default props', () => {
        expect(render(<Select />).container.firstChild).toMatchSnapshot();
    });

    describe('variant "boxed"', () => {
        it('renders with default props', () => {
            expect(render(<Select variant="boxed" />).container.firstChild).toMatchSnapshot();
        });

        it('renders with a label', () => {
            expect(render(<Select variant="boxed" label="label" />).container.firstChild).toMatchSnapshot();
        });

        it('renders the error styles', () => {
            expect(render(<Select variant="boxed" label="error" error />).container.firstChild).toMatchSnapshot();
        });

        it('renders the inverted styles', () => {
            expect(render(<Select variant="boxed" label="inverted" inverted />).container.firstChild).toMatchSnapshot();
        });

        it('renders the disabled styles', () => {
            expect(render(<Select variant="boxed" label="disabled" disabled />).container.firstChild).toMatchSnapshot();
        });

        it('renders the inverted disabled styles', () => {
            expect(
                render(<Select variant="boxed" label="inverted disabled" inverted disabled />).container.firstChild
            ).toMatchSnapshot();
        });

        it('renders passed options', () => {
            expect(
                render(
                    <Select defaultValue="2">
                        <option value="1">test 1</option>
                        <option value="2">test 2</option>
                    </Select>
                ).container.firstChild
            ).toMatchSnapshot();
        });
    });

    describe('variant "bottom-lined"', () => {
        it('renders with default props', () => {
            expect(render(<Select variant="bottom-lined" />).container.firstChild).toMatchSnapshot();
        });

        it('renders with a label', () => {
            expect(render(<Select variant="bottom-lined" label="label" />).container.firstChild).toMatchSnapshot();
        });

        it('renders the error styles', () => {
            expect(
                render(<Select variant="bottom-lined" label="error" error />).container.firstChild
            ).toMatchSnapshot();
        });

        it('renders the inverted styles', () => {
            expect(
                render(<Select variant="bottom-lined" label="inverted" inverted />).container.firstChild
            ).toMatchSnapshot();
        });

        it('renders the disabled styles', () => {
            expect(
                render(<Select variant="bottom-lined" label="disabled" disabled />).container.firstChild
            ).toMatchSnapshot();
        });

        it('renders the inverted disabled styles', () => {
            expect(
                render(<Select variant="bottom-lined" label="inverted disabled" inverted disabled />).container
                    .firstChild
            ).toMatchSnapshot();
        });

        it('renders passed options', () => {
            expect(
                render(
                    <Select defaultValue="2">
                        <option value="1">test 1</option>
                        <option value="2">test 2</option>
                    </Select>
                ).container.firstChild
            ).toMatchSnapshot();
        });

        // this test gets used to visualize testing in the docs, please update docs in case of updating the test
        it('can be selected by label', () => {
            render(
                <Select defaultValue="2" label="Example" id="test">
                    <option value="1">test 1</option>
                    <option value="2">test 2</option>
                </Select>
            );

            userEvent.selectOptions(screen.getByLabelText('Example'), '1');

            expect(screen.getByLabelText('Example')).toHaveDisplayValue('test 1');
        });
    });
});
