import React from 'react';
import { render as renderRtl, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FilePicker, FilePickerProps } from './FilePicker';
import { Colors } from '../../essentials';

const baseProps = {
    label: 'A picture of you',
    buttonText: 'Browse files',
    name: 'avatar',
    accept: 'image/png, image/jpeg'
};

/**
 * * Encourage the test of the component within the integration
 * of itself in the common target scenario that could be used.
 *
 * @param filePickerProps the filePicker accepted props
 * @param onFormSubmit a callback to handle a simulation of a form submit
 */
const render = (filePickerProps: FilePickerProps, onFormSubmit = jest.fn()) => {
    const Form = (props: FilePickerProps) => {
        return (
            <form onSubmit={onFormSubmit}>
                <FilePicker {...props} data-testid="file-picker" />
                <button type="submit">Submit</button>
            </form>
        );
    };

    return renderRtl(<Form {...filePickerProps} />);
};

test('renders a composition with an input type file', () => {
    render({ ...baseProps, onFileChange: jest.fn() });

    expect(screen.getByTestId('file-picker')).toMatchSnapshot();
});

test('when a file gets submitted component removes the initial button', () => {
    const file = new File(['(⌐□_□)'], 'carnet.png', { type: 'image/png' });
    const onFileChange = jest.fn();
    const buttonText = 'select file';

    render({ ...baseProps, onFileChange, buttonText });

    expect(screen.queryByText(buttonText)).toBeInTheDocument();

    // https://github.com/kentcdodds/react-testing-library-examples/pull/1/files
    const inputEl = screen.getByLabelText(/picture of you/);
    Object.defineProperty(inputEl, 'files', { value: [file] });

    fireEvent.change(inputEl);

    expect(screen.queryByText(buttonText)).not.toBeInTheDocument();
    expect(screen.getByTestId('file-picker')).toMatchSnapshot();
});

test('expose a way to handle errors', () => {
    const file = new File(['(⌐□_□)'], 'carnet.png', { type: 'image/png' });
    const onFormSubmit = jest.fn();
    const onError = jest.fn();
    const onFileChange = jest.fn().mockImplementation(eventFile => {
        try {
            if (eventFile.size > 0) {
                throw new Error('Oops! I need a file with no size');
            }
        } catch (error) {
            onError(eventFile);
        }
    });

    render({ ...baseProps, onFileChange }, onFormSubmit);

    // https://github.com/kentcdodds/react-testing-library-examples/pull/1/files
    const inputEl = screen.getByLabelText(/picture of you/);
    Object.defineProperty(inputEl, 'files', { value: [file] });

    fireEvent.change(inputEl);

    expect(onError).toHaveBeenCalledTimes(1);
});

test('expose a way to get selected file within the host composition', () => {
    const file = new File(['(⌐□_□)'], 'carnet.png', { type: 'image/png' });
    let submittedFile = null;
    const onFileChange = jest.fn();
    // emulate real environment and make sure FilePicker properly support forms
    const onFormSubmit = jest.fn().mockImplementation(e => {
        e.preventDefault();
        submittedFile = e.target.elements.avatar.files[0];
    });

    render({ ...baseProps, onFileChange }, onFormSubmit);

    // https://github.com/kentcdodds/react-testing-library-examples/pull/1/files
    const inputEl = screen.getByLabelText(/picture of you/);
    Object.defineProperty(inputEl, 'files', { value: [file] });

    fireEvent.change(inputEl);
    userEvent.click(screen.getByText(/submit/i));

    expect(onFileChange).toHaveBeenCalledTimes(1);
    // Assert over SyntheticEvent will lead to console errors
    expect(onFileChange).toHaveBeenCalledWith(file, expect.anything());
    expect(onFormSubmit).toHaveBeenCalledTimes(1);
    expect(submittedFile).toEqual(file);
});

test('expose a way to access the event using onChange input standard prop', () => {
    const file = new File(['(⌐□_□)'], 'carnet.png', { type: 'image/png' });
    const onFileChange = jest.fn();
    const onChange = jest.fn();
    renderRtl(<FilePicker {...baseProps} onFileChange={onFileChange} onChange={onChange} data-testid="file-picker" />);

    const inputEl = screen.getByLabelText(/picture of you/);
    Object.defineProperty(inputEl, 'files', { value: [file] });

    fireEvent.change(inputEl);

    expect(onFileChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledTimes(1);
    // Instead we expect the SyntheticEvent to be passed
    expect(onChange.mock.calls[0]).not.toEqual(file);
});

test('accepts an error prop that will change the component appareance', async () => {
    const file = new File(['(⌐□_□)'], 'carnet.png', { type: 'image/png' });
    const onFileChange = jest.fn();

    const { rerender } = renderRtl(<FilePicker {...baseProps} onFileChange={onFileChange} />);

    const inputEl = screen.getByLabelText(/picture of you/);
    const outliner = screen.getByTestId('filepicker-outliner');
    Object.defineProperty(inputEl, 'files', { value: [file] });

    fireEvent.change(inputEl);

    rerender(<FilePicker {...baseProps} onFileChange={onFileChange} error={true} />);

    expect(screen.queryByTitle(/check circle/i)).not.toBeInTheDocument();
    expect(outliner).toHaveStyle({
        'border-color': Colors.NEGATIVE_ORANGE_900
    });
});

test('accepts an disabled prop that will change the component appareance', async () => {
    const onFileChange = jest.fn();

    const { container } = renderRtl(<FilePicker {...baseProps} onFileChange={onFileChange} disabled />);

    const inputEl = screen.getByLabelText(/picture of you/);
    const outliner = screen.getByTestId('filepicker-outliner');

    expect(inputEl).toBeDisabled();
    expect(outliner).toHaveStyle({
        opacity: '0.5'
    });
    expect(container).toMatchSnapshot();
});
