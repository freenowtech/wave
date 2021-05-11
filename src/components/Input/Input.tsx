import React, { forwardRef, useEffect, useState } from 'react';
import { extractClassNameProps, extractWidthProps, extractWrapperMarginProps } from '../../utils/extractProps';
import { BottomLinedInput } from './BottomLinedInput';
import { BottomLinedInputLabel } from './BottomLinedInputLabel';
import { BoxedInput } from './BoxedInput';
import { BoxedInputLabel } from './BoxedInputLabel';
import { InputProps } from './InputProps';
import { InputWrapper, InputWrapperProps } from './InputWrapper';

const Input = forwardRef<HTMLDivElement, InputWrapperProps & InputProps>((props, ref) => {
    const { classNameProps, restProps: withoutClassName } = extractClassNameProps(props);
    const { marginProps, restProps: withoutMargin } = extractWrapperMarginProps(withoutClassName);
    const { widthProps, restProps } = extractWidthProps(withoutMargin);

    const { label, onChange, size, id, ...rest } = restProps;

    const [hasValue, setHasValue] = useState(rest.value && rest.value.toString().length > 0);

    const handleChange = event => {
        if (onChange) {
            onChange(event);
        }
    };

    useEffect(() => {
        setHasValue(rest.value && rest.value.toString().length > 0);
    }, [rest.value]);

    if (props.variant == 'boxed') {
        return (
            <InputWrapper ref={ref} {...classNameProps} {...marginProps} {...widthProps}>
                <BoxedInput {...rest} id={id} size={size} hasValue={hasValue} onChange={handleChange} />
                {label && (
                    <BoxedInputLabel htmlFor={id} size={size}>
                        {label}
                    </BoxedInputLabel>
                )}
            </InputWrapper>
        );
    }

    if (props.variant == 'bottom-lined') {
        return (
            <InputWrapper ref={ref} {...classNameProps} {...marginProps} {...widthProps}>
                <BottomLinedInput {...rest} id={id} size={size} hasValue={hasValue} onChange={handleChange} />
                {label && (
                    <BottomLinedInputLabel htmlFor={id} size={size}>
                        {label}
                    </BottomLinedInputLabel>
                )}
            </InputWrapper>
        );
    }
});

Input.defaultProps = {
    size: 'medium',
    variant: 'boxed',
    type: 'text'
};

export { Input, InputProps };
