import React, { ReactElement } from 'react';
import {
    Input,
    InputProps,
    Label,
    TextField as BaseTextField,
    TextFieldProps as BaseTextFieldProps,
    Text,
    TextArea
} from 'react-aria-components';
import styled, { css } from 'styled-components';
import { get } from '../../../utils/experimental/themeGet';
import { getSemanticValue } from '../../../essentials/experimental/cssVariables';
import { textStyles } from '../Text/Text';

// TODO
// [x] make a flying label (should be up if in focus, has placeholder or is filled)
// [x] style helper text
// [x] add counter
// [x] style error text
// [] add autogrow
// [] add clear control
// [] add arrow control
// [] add an optional icon

const StyledInputSource = styled.div`
    border: none;
    background-color: unset;
    outline: none;

    padding-top: ${get('space.6')};
    padding-bottom: ${get('space.2')};

    display: block;
    width: 100%;

    caret-color: ${getSemanticValue('interactive')};
    ${textStyles.variants.body1}

    &::placeholder {
        color: ${getSemanticValue('on-surface-variant')};
    }
`;

const StyledTextArea = styled(TextArea).attrs({ rows: 1 })`
    resize: none;
`;

const flyingStyles = css`
    top: ${get('space.1')};
    transform: translate3d(1px, 0, 0);

    ${textStyles.variants.label2}
`;

const StyledLabel = styled(Label)<{ $flying: boolean }>`
    position: absolute;
    left: ${get('space.4')};
    top: 50%;
    color: ${getSemanticValue('on-surface')};

    ${textStyles.variants.body1}

    transform: translate3d(0, calc(-${textStyles.variants.body1.lineHeight} / 2), 0);
    transform-origin: 0;

    transition: top 0.2s ease, font-size 0.2s ease, transform 0.2s ease;

    ${props => props.$flying && flyingStyles}
`;

const TopLine = styled.div`
    box-sizing: content-box;

    background-color: ${getSemanticValue('surface')};
    border-width: 0.0625rem;
    border-style: solid;
    border-color: ${getSemanticValue('outline-variant')};
    border-radius: ${get('radii.4')};

    padding-left: ${get('space.4')};
    padding-right: ${get('space.4')};
    display: flex;
    align-items: end;
    min-width: 315px;

    position: relative;
    overflow: hidden;

    &:hover {
        border-color: ${getSemanticValue('outline')};
    }

    &:focus-within {
        outline: ${getSemanticValue('interactive')} solid 0.125rem;
        outline-offset: -0.125rem;
    }

    &:focus-within ${StyledLabel} {
        color: ${getSemanticValue('interactive')};

        ${flyingStyles}
    }
`;

const BottomLine = styled.footer`
    display: grid;
    grid-template-areas: 'message counter';
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

    ${props =>
        props.isInvalid &&
        css`
            color: ${getSemanticValue('negative')};

            ${StyledLabel},
            ${BottomLine} {
                color: currentColor;
            }

            ${TopLine} {
                border-color: currentColor;
            }
        `}

    ${props =>
        props.isDisabled &&
        css`
            opacity: 0.38;
        `}
`;

export interface TextFieldProps extends BaseTextFieldProps {
    label: string;
    placeholder?: string;
    description?: string;
    errorMessage?: string;
    multiline?: boolean;
}

function TextField({
    label,
    description,
    errorMessage,
    placeholder,
    multiline = false,
    ...props
}: TextFieldProps): ReactElement {
    const [text, setText] = React.useState('');

    const handleChange = (value: string) => {
        setText(value);
        props.onChange?.(value);
    };

    return (
        <Wrapper {...props} onChange={handleChange}>
            <TopLine>
                <StyledLabel $flying={Boolean(placeholder || text.length)}>{label}</StyledLabel>
                <StyledInputSource as={multiline ? StyledTextArea : Input} placeholder={placeholder} />
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
