import React from 'react';
import { TextField as BaseTextField, TextFieldProps as BaseTextFieldProps, Text } from 'react-aria-components';
import styled from 'styled-components';
import { get } from '../../../utils/experimental/themeGet';
import { getSemanticValue } from '../../../essentials/experimental/cssVariables';
import { VisuallyHidden } from '../../VisuallyHidden/VisuallyHidden';
import { ClearButton } from '../Field/ClearButton';
import { Label } from '../Field/Label';
import { TextArea, Input, fieldTextStyles } from '../Field/Field';
import { FakeInput } from '../Field/FakeInput';
import { Footer } from '../Field/Footer';
import { InnerWrapper } from '../Field/InnerWrapper';

const defaultAriaStrings = {
    clearFieldButton: 'Clear field',
    messageFieldIsCleared: 'The field is cleared'
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

const Wrapper = styled(BaseTextField)`
    padding: ${get('space.2')} ${get('space.0')};

    &[data-disabled] {
        opacity: 0.38;

        ${FakeInput} {
            pointer-events: none;
        }
    }

    &[data-invalid] {
        ${Label},
        ${BottomLine} {
            color: ${getSemanticValue('negative')};
        }

        ${FakeInput} {
            border-color: ${getSemanticValue('negative')};
        }
    }
`;

export interface TextFieldProps extends BaseTextFieldProps {
    label: string;
    leadingIcon?: React.ReactNode;
    actionIcon?: React.ReactNode;
    placeholder?: string;
    description?: string;
    errorMessage?: string;
    multiline?: boolean;
    /**
     * If you project supports multiple languages, it is recommended to pass translated labels to these properties
     */
    ariaStrings?: {
        clearFieldButton: string;
        messageFieldIsCleared: string;
    };
    /* If text field shouldn't lose visual focus */
    isVisuallyFocused?: boolean;
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
                <ClearButton
                    aria-controls={inputRef.current?.id}
                    aria-label={ariaStrings.clearFieldButton}
                    onPress={() => {
                        inputRef.current.value = '';
                        handleChange('');
                    }}
                />
            ) : (
                <VisuallyHidden aria-live="polite">{ariaStrings.messageFieldIsCleared}</VisuallyHidden>
            );

        const flyingLabel = <Label $flying={Boolean(placeholder || text.length > 0)}>{label}</Label>;

        return (
            <Wrapper {...props} ref={forwardedRef} value={text} onChange={handleChange}>
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
                            <Input placeholder={placeholder} ref={inputRef as React.RefObject<HTMLInputElement>} />
                        </InnerWrapper>
                    )}
                    {actionIcon === undefined ? clearField : actionIcon}
                </FakeInput>
                <BottomLine>
                    {(description || errorMessage) && (
                        <Text slot={description ? 'description' : 'errorMessage'}>{errorMessage || description}</Text>
                    )}
                    {Boolean(props.maxLength) && <Counter>{`${text.length} / ${props.maxLength}`}</Counter>}
                </BottomLine>
            </Wrapper>
        );
    }
);

export { TextField };
