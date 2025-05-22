import React from 'react';
import { FieldError, TextField as BaseTextField, TextFieldProps as BaseTextFieldProps } from 'react-aria-components';
import styled from 'styled-components';
import XCrossCircleIcon from '../../../icons/actions/XCrossCircleIcon';
import { get } from '../../../utils/experimental/themeGet';
import { Button } from '../Field/Button';
import { Label } from '../Field/Label';
import { TextArea, Input, fieldTextStyles } from '../Field/Field';
import { FakeInput } from '../Field/FakeInput';
import { Footer } from '../Field/Footer';
import { InnerWrapper } from '../Field/InnerWrapper';
import { Wrapper } from '../Field/Wrapper';
import { FieldProps } from '../Field/Props';

const defaultAriaStrings = {
    clearFieldButton: 'Clear field'
};

const AutoResizingInnerWrapper = styled(InnerWrapper)`
    display: grid;

    &::after {
        /* Styling should be the same */
        ${fieldTextStyles};

        /* Note the weird space! Needed to prevent jumpy behavior */
        content: attr(data-replicated-value) ' ';

        /* This is how textarea text behaves */
        white-space: pre-wrap;

        /* Hidden from view, clicks, and screen readers */
        visibility: hidden;
    }

    &::after,
    ${TextArea} {
        overflow: hidden;

        /* Place on top of each other */
        grid-area: 1 / 1 / 2 / 2;
    }
`;

const BottomLine = styled(Footer)`
    display: grid;
    grid-template-areas: '. counter';
    justify-content: space-between;
    gap: ${get('space.2')};
`;

const Counter = styled.span`
    grid-area: counter;
`;

interface TextFieldProps extends FieldProps, BaseTextFieldProps {
    placeholder?: string;
    multiline?: boolean;
    /**
     * If your project supports multiple languages,
     * it is recommended to pass translated labels to these properties
     */
    ariaStrings?: {
        clearFieldButton: string;
    };
}

const TextField = React.forwardRef<HTMLDivElement, TextFieldProps>(
    (
        {
            label,
            description,
            errorMessage,
            placeholder,
            leadingIcon,
            actionIcon,
            multiline = false,
            ariaStrings = defaultAriaStrings,
            isVisuallyFocused = false,
            ...props
        },
        forwardedRef
    ) => {
        const [text, setText] = React.useState(props.defaultValue || props.value || '');
        const inputRef = React.useRef<HTMLInputElement | HTMLTextAreaElement>(null);

        React.useEffect(() => {
            if (props.value !== undefined) {
                setText(props.value);
            }
        }, [props.value]);

        const handleChange = (value: string) => {
            setText(value);
            props.onChange?.(value);
        };

        const clearField =
            text.length > 0 ? (
                <Button
                    aria-controls={inputRef.current?.id}
                    aria-label={ariaStrings.clearFieldButton}
                    onPress={() => {
                        inputRef.current.value = '';
                        handleChange('');
                    }}
                    excludeFromTabOrder
                    preventFocusOnPress
                >
                    <XCrossCircleIcon />
                </Button>
            ) : null;

        const flyingLabel = label && <Label $flying={Boolean(placeholder || text.length > 0)}>{label}</Label>;

        return (
            <Wrapper>
                <BaseTextField {...props} ref={forwardedRef} value={text} onChange={handleChange}>
                    {({ isInvalid }) => (
                        <>
                            <FakeInput $isVisuallyFocused={isVisuallyFocused} onClick={() => inputRef.current?.focus()}>
                                {leadingIcon}
                                {multiline ? (
                                    <AutoResizingInnerWrapper data-replicated-value={text}>
                                        {flyingLabel}
                                        <TextArea
                                            placeholder={placeholder}
                                            ref={inputRef as React.RefObject<HTMLTextAreaElement>}
                                        />
                                    </AutoResizingInnerWrapper>
                                ) : (
                                    <InnerWrapper>
                                        {flyingLabel}
                                        <Input
                                            placeholder={placeholder}
                                            ref={inputRef as React.RefObject<HTMLInputElement>}
                                        />
                                    </InnerWrapper>
                                )}
                                {actionIcon === undefined ? clearField : actionIcon}
                            </FakeInput>
                            <BottomLine>
                                {isInvalid ? <FieldError>{errorMessage}</FieldError> : description}
                                {Boolean(props.maxLength) && <Counter>{`${text.length} / ${props.maxLength}`}</Counter>}
                            </BottomLine>
                        </>
                    )}
                </BaseTextField>
            </Wrapper>
        );
    }
);

export { TextField, TextFieldProps };
