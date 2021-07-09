import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Select } from './Select';

describe('Select', () => {
    it('renders with default props', () => {
        expect(render(<Select />).container.firstChild).toMatchSnapshot();
    });

    it('can be selected using accessible queries', () => {
        render(
            <Select defaultValue="2" label="Wave" id="test">
                <option value="1">test 1</option>
                <option value="2">test 2</option>
            </Select>
        );

        userEvent.selectOptions(screen.getByRole('combobox', { name: /wave/i }), '1');

        expect(screen.getByLabelText('Wave')).toHaveDisplayValue('test 1');
    });

    it('should render an empty placeholder options when provided', () => {
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

        userEvent.selectOptions(screen.getByLabelText('Select'), '');

        expect(screen.getByLabelText('Select')).toHaveDisplayValue('placeholder');
        expect(onChangeMock).toHaveBeenCalledWith('');
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
    });
});
