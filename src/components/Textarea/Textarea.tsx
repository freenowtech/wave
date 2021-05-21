import React, { FC, useEffect, useState } from 'react';
import styled, { CSSProperties } from 'styled-components';

import { compose, height, HeightProps, margin, MarginProps, width, WidthProps } from 'styled-system';
import { theme } from '../../essentials/theme';
import {
    extractClassNameProps,
    extractHeightProps,
    extractWidthProps,
    extractWrapperMarginProps
} from '../../utils/extractProps';
import { useGeneratedId } from '../../utils/hooks/useGeneratedId';

import { InternalInputComponentProps } from '../Input/BaseInput';
import { BoxedInput } from '../Input/BoxedInput';
import { BoxedInputLabel } from '../Input/BoxedInputLabel';
import { InputProps } from '../Input/InputProps';

type InputWrapperProps = MarginProps &
    WidthProps &
    HeightProps & {
        className?: string;
    };

const InputWrapper: FC<InputWrapperProps> = styled.div.attrs({ theme })`
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    width: 21.5rem;
    height: 7.25rem;

    ${compose(margin, height, width)}
`;

const TextareaField: FC<InternalInputComponentProps & Pick<CSSProperties, 'resize'>> = styled(BoxedInput).attrs({
    as: 'textarea'
})`
    height: 100%;
    padding: 0.75rem;
    overflow: auto;

    resize: ${p => {
        // @ts-ignore TODO: solve issue with unrecognize prop
        return p.resize;
    }};
`;

type TextAreaProps = Omit<InputProps, 'variant' | 'size'> & Pick<CSSProperties, 'resize'>;

const Textarea: FC<InputWrapperProps & TextAreaProps> = props => {
    const { classNameProps, restProps: withoutClassName } = extractClassNameProps(props);
    const { marginProps, restProps: withoutMargin } = extractWrapperMarginProps(withoutClassName);
    const { widthProps, restProps: withoutWidth } = extractWidthProps(withoutMargin);
    const { heightProps, restProps } = extractHeightProps(withoutWidth);

    const { label, onChange, resize, ...rest } = restProps;
    const id = useGeneratedId(props.id);

    const [hasValue, setHasValue] = useState(rest.value && rest.value.toString().length > 0);

    const handleChange = event => {
        if (onChange) {
            onChange(event);
        }
    };

    useEffect(() => {
        setHasValue(rest.value && rest.value.toString().length > 0);
    }, [rest.value]);

    return (
        <InputWrapper {...classNameProps} {...marginProps} {...widthProps} {...heightProps}>
            <TextareaField
                {...rest}
                resize={resize}
                id={id}
                variant="boxed"
                size="medium"
                hasValue={hasValue}
                onChange={handleChange}
            />
            {label && (
                <BoxedInputLabel htmlFor={id} size="medium">
                    {label}
                </BoxedInputLabel>
            )}
        </InputWrapper>
    );
};

Textarea.defaultProps = {
    resize: 'both'
};

export { Textarea, TextAreaProps };
