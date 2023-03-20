import React, { ComponentPropsWithoutRef, FC, MouseEventHandler, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { MarginProps } from 'styled-system';
import { Colors, MediaQueries } from '../../essentials';
import { CheckCircleOutlineIcon, ShareIcon } from '../../icons';
import { get } from '../../utils/themeGet';
import { Box, BoxProps } from '../Box/Box';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';
import { shrinkFileName } from './utils/format';

interface FilePickerProps extends MarginProps, ComponentPropsWithoutRef<'input'> {
    /**
     * Sets the name property of input element in the DOM.
     * https://developer.mozilla.org/en-US/docs/Web/API/Element/name
     */
    name: string;
    /**
     * One or more unique file type identifiers describing
     * files types to allow.
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file
     */
    accept?: string;
    /**
     * What source to use for capturing image or video data.
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file
     */
    capture?: boolean | 'user' | 'environment';
    /**
     * Text to provide a clear description of what the user should upload
     */
    label: string;
    /**
     * Text to display within component button, it describes the main action,
     * it works better when short
     */
    buttonText: string;
    /**
     * Keep the action button displayed instead of showing the success state.
     */
    alwaysShowActionButton?: boolean;
    /**
     * Whether the component should render an error state
     */
    error?: boolean;
    /**
     * Callback to be used when the input receives a new file
     */
    onFileChange?: (file: File, event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputButton = styled(Button)`
    font-size: ${get('fontSizes.1')};
    line-height: 1;
    font-weight: 400;
    height: auto;
    min-width: auto;
    padding: 0.5rem 0.75rem;
    white-space: nowrap;
`;

const ICON_FILE_FEEDBACK_COLOR = Colors.POSITIVE_GREEN_900;

interface OutlinerProps extends BoxProps {
    disabled: boolean;
    error: boolean;
    hasValidFile: boolean;
}

// NOTE: we want to affect the color of only one icon SVG and not the ICON_FILE_FEEDBACK_COLOR
const Outliner = styled(Box)<OutlinerProps>`
    border: 0.0625rem solid ${Colors.AUTHENTIC_BLUE_200};
    box-sizing: border-box;
    cursor: pointer;
    position: relative;
    transition: background-color ease 200ms, border-color ease 200ms;

    ${Text} {
        cursor: pointer;
    }

    ${({ disabled }) =>
        disabled &&
        css`
            opacity: 0.5;

            &,
            ${InputButton}, ${Text} {
                cursor: not-allowed;
            }
        `}

    ${({ error }) =>
        error &&
        css`
            box-shadow: inset 0 0 0 0.0625rem ${Colors.NEGATIVE_ORANGE_900};
            border-color: ${Colors.NEGATIVE_ORANGE_900};
        `}

    ${({ hasValidFile }) =>
        hasValidFile &&
        css`
            ${MediaQueries.medium} {
                &:hover {
                    background-color: ${Colors.ACTION_BLUE_50};
                    border-color: ${Colors.ACTION_BLUE_50};

                    svg:not([color='${Colors.POSITIVE_GREEN_900}']) path {
                        fill: ${Colors.ACTION_BLUE_900};
                    }
                }
            }
        `}
`;

const Input = styled.input`
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 100%;
    outline: none;

    &:focus + ${Outliner} {
        border-color: ${Colors.ACTION_BLUE_900};
        box-shadow: inset 0 0 0 0.0625rem ${Colors.ACTION_BLUE_900};
    }
`;

const FilePicker: FC<FilePickerProps> = ({
    name,
    accept = '*',
    capture,
    label,
    buttonText,
    error = false,
    onFileChange = () => undefined,
    onChange = () => undefined,
    disabled = false,
    alwaysShowActionButton = false,
    ...nonInputProps
}: FilePickerProps) => {
    const inputEl = useRef<HTMLInputElement>(null);
    const [file, setFile] = useState<File | null>();
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const eventFile = e.target.files?.[0];

        onChange(e);
        onFileChange(eventFile, e);
        setFile(eventFile);
    };
    const onClickHandler: MouseEventHandler = e => {
        // Avoid label trigger file selection twice
        e.preventDefault();
        // Avoid button trigger file selection twice
        e.stopPropagation();
        // Allow other spaces of the component trigger file selection
        inputEl.current.click();
    };
    const validFileSelected = file && !error;

    return (
        <Box position="relative" {...nonInputProps}>
            <Input
                accept={accept}
                capture={capture}
                disabled={disabled}
                id={name}
                multiple={false}
                name={name}
                onChange={onInputChange}
                ref={inputEl}
                type="file"
            />
            <Outliner
                minHeight="5.125rem"
                alignItems="stretch"
                data-testid="filepicker-outliner"
                display="flex"
                disabled={disabled}
                hasValidFile={validFileSelected}
                error={error}
                justifyContent="space-between"
                onClick={onClickHandler}
                px={2}
                py={validFileSelected ? '1.25rem' : 3}
            >
                <Box display="flex" flexDirection="column" justifyContent="center" pr={2}>
                    <Text as="label" htmlFor={name} fontSize={1}>
                        {label}
                    </Text>
                    <Text weak fontSize={1}>
                        {file && shrinkFileName(file)}
                    </Text>
                </Box>
                <Box display={{ _: 'none', medium: 'flex' }} alignItems="center" justifyContent="top">
                    {!alwaysShowActionButton && validFileSelected ? (
                        <CheckCircleOutlineIcon color={ICON_FILE_FEEDBACK_COLOR} />
                    ) : (
                        <InputButton variant="secondary" type="button" tabIndex={-1} onClick={onClickHandler}>
                            {buttonText}
                        </InputButton>
                    )}
                </Box>
                <Box display={{ _: 'flex', medium: 'none' }} alignItems="top">
                    {!alwaysShowActionButton && validFileSelected ? (
                        <CheckCircleOutlineIcon color={ICON_FILE_FEEDBACK_COLOR} />
                    ) : (
                        <ShareIcon />
                    )}
                </Box>
            </Outliner>
        </Box>
    );
};

export { FilePicker, FilePickerProps };
