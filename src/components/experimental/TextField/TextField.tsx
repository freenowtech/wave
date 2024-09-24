import React, { ReactElement, RefObject } from 'react';
import { TextField as BaseTextField, TextFieldProps as BaseTextFieldProps, Text } from 'react-aria-components';
import styled, { css } from 'styled-components';
import { get } from '../../../utils/experimental/themeGet';
import { getSemanticValue } from '../../../essentials/experimental/cssVariables';
import { textStyles } from '../Text/Text';
import { VisuallyHidden } from '../../VisuallyHidden/VisuallyHidden';
import { ClearButton } from './ClearButton';
import { Label, flyingLabelStyles } from './Label';
import { TextArea, Input } from './Field';

const defaultAriaStrings = {
    clearFieldButton: 'Clear field',
    messageFieldIsCleared: 'The field is cleared'
};

const InnerWrapper = styled.div<{ $autoResize: boolean }>`
    width: 100%;
    padding-top: ${get('space.4')};

    position: relative;
    overflow: hidden;

    ${props =>
        props.$autoResize &&
        css`
            display: grid;

            &::after {
                /* Styling should be the same */
                ${textStyles.variants.body1}

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
        `}
`;

const TopLine = styled.div`
    box-sizing: content-box;
    cursor: text;

    color: ${getSemanticValue('on-surface-variant')};
    background-color: ${getSemanticValue('surface')};
    border-width: 0.0625rem;
    border-style: solid;
    border-color: ${getSemanticValue('outline-variant')};
    border-radius: ${get('radii.4')};

    padding: ${get('space.2')} ${get('space.3')} ${get('space.2')} ${get('space.4')};
    display: flex;
    align-items: start;
    gap: ${get('space.3')};

    /* stylelint-disable selector-type-case, selector-type-no-unknown */
    & > :not(${InnerWrapper}) {
        flex-shrink: 0;
        padding-top: ${get('space.2')};
    }

    &:hover {
        border-color: ${getSemanticValue('outline')};
        color: ${getSemanticValue('on-surface')};
    }

    &:focus-within {
        color: ${getSemanticValue('interactive')};
        outline: ${getSemanticValue('interactive')} solid 0.125rem;
        outline-offset: -0.125rem;

        ${Label} {
            ${flyingLabelStyles}
        }
    }
`;

const BottomLine = styled.footer`
    display: grid;
    grid-template-areas: '. counter';
    justify-content: space-between;
    gap: ${get('space.2')};

    padding: ${get('space.1')} ${get('space.3')} ${get('space.0')};

    color: ${getSemanticValue('on-surface-variant')};

    ${textStyles.variants.label2}

    &:empty {
        display: none;
    }
`;

const Counter = styled.span`
    grid-area: counter;
`;

const Wrapper = styled(BaseTextField)`
    padding: ${get('space.2')} ${get('space.0')};

    &[data-disabled] {
        opacity: 0.38;

        ${TopLine} {
            pointer-events: none;
        }
    }

    &[data-invalid] {
        ${Label},
        ${BottomLine} {
            color: ${getSemanticValue('negative')};
        }

        ${TopLine} {
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
}

function TextField({
    label,
    description,
    errorMessage,
    placeholder,
    leadingIcon,
    actionIcon,
    multiline = false,
    ariaStrings = defaultAriaStrings,
    ...props
}: TextFieldProps): ReactElement {
    const [text, setText] = React.useState(props.defaultValue || props.value || '');
    const inputRef = React.useRef<HTMLInputElement | HTMLTextAreaElement>(null);

    const handleChange = (value: string) => {
        setText(value);
        props.onChange?.(value);
    };

    return (
        <Wrapper {...props} value={text} onChange={handleChange}>
            <TopLine onClick={() => inputRef.current?.focus()}>
                {leadingIcon}
                <InnerWrapper $autoResize={multiline} data-replicated-value={text}>
                    <Label $flying={Boolean(placeholder || text.length > 0)}>{label}</Label>
                    {multiline ? (
                        <TextArea placeholder={placeholder} ref={inputRef as RefObject<HTMLTextAreaElement>} />
                    ) : (
                        <Input placeholder={placeholder} ref={inputRef as RefObject<HTMLInputElement>} />
                    )}
                </InnerWrapper>
                {actionIcon ||
                    (text.length > 0 ? (
                        <ClearButton
                            aria-controls={inputRef.current?.id}
                            aria-label={ariaStrings.clearFieldButton}
                            onPress={() => {
                                inputRef.current.value = '';
                                setText('');
                            }}
                        />
                    ) : (
                        <VisuallyHidden aria-live="polite">{ariaStrings.messageFieldIsCleared}</VisuallyHidden>
                    ))}
            </TopLine>
            <BottomLine>
                {(description || errorMessage) && (
                    <Text slot={description ? 'description' : 'errorMessage'}>{errorMessage || description}</Text>
                )}
                {Boolean(props.maxLength) && <Counter>{`${text.length} / ${props.maxLength}`}</Counter>}
            </BottomLine>
        </Wrapper>
    );
}

export { TextField };
