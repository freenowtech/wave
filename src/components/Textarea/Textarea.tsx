import React, { ComponentPropsWithoutRef, FC, useEffect, useState } from 'react';
import styled, { CSSProperties } from 'styled-components';

import { compose, height, HeightProps, margin, MarginProps, ResponsiveValue, width, WidthProps } from 'styled-system';
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

type WrapperProps = MarginProps &
    WidthProps &
    HeightProps & {
        className?: string;
    };

const TextAreaWrapper: FC<WrapperProps> = styled.div.attrs({ theme })`
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    width: 21.5rem;
    height: 7.25rem;

    ${compose(margin, height, width)}
`;

const TextareaField: FC<TextAreaProps & Pick<InternalInputComponentProps, 'hasValue'>> = styled(BoxedInput).attrs({
    as: 'textarea'
})<TextAreaProps>`
    height: 100%;
    padding: 0.75rem;
    overflow: auto;

    resize: ${p => p.resize};
`;

interface TextAreaProps
    extends WrapperProps,
        Omit<ComponentPropsWithoutRef<'textarea'>, 'size' | 'width'>,
        Pick<CSSProperties, 'resize'> {
    variant?: ResponsiveValue<'boxed' | 'bottom-lined'>;
    size?: ResponsiveValue<'small' | 'medium'>;
    inverted?: boolean;
    label?: string;
    placeholder?: string;
    error?: boolean;
}

const Textarea: FC<WrapperProps & TextAreaProps> = ({ resize = 'both', ...props }: TextAreaProps) => {
    const { classNameProps, restProps: withoutClassName } = extractClassNameProps(props);
    const { marginProps, restProps: withoutMargin } = extractWrapperMarginProps(withoutClassName);
    const { widthProps, restProps: withoutWidth } = extractWidthProps(withoutMargin);
    const { heightProps, restProps } = extractHeightProps(withoutWidth);

    const { label, onChange, ...rest } = restProps;
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
        <TextAreaWrapper {...classNameProps} {...marginProps} {...widthProps} {...heightProps}>
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
        </TextAreaWrapper>
    );
};

export { Textarea, TextAreaProps };
