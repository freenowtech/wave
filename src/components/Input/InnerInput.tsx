import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { extractClassNameProps, extractWidthProps, extractWrapperMarginProps } from '../../utils/extractProps';
import { useGeneratedId } from '../../utils/hooks/useGeneratedId';
import { BottomLinedInput } from './BottomLinedInput';
import { BottomLinedInputLabel } from './BottomLinedInputLabel';
import { BoxedInput } from './BoxedInput';
import { BoxedInputLabel } from './BoxedInputLabel';
import { InputProps } from './InputProps';
import { InputWrapper, InputWrapperProps } from './InputWrapper';

const InnerInput = forwardRef<HTMLInputElement, InputWrapperProps & InputProps>(
    (props: InputWrapperProps & InputProps, ref) => {
        const { classNameProps, restProps: withoutClassName } = extractClassNameProps(props);
        const { marginProps, restProps: withoutMargin } = extractWrapperMarginProps(withoutClassName);
        const { widthProps, restProps } = extractWidthProps(withoutMargin);

        const { label, onChange, size, id: providedId, variant, ...rest } = restProps;
        const id = useGeneratedId(providedId);

        const innerRef = useRef<HTMLInputElement>();
        useImperativeHandle(ref, () => innerRef.current, []);

        const [hasValue, setHasValue] = useState(rest?.value?.toString().length > 0);
        const hasUncontrolledValue = innerRef?.current?.value?.length > 0;

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setHasValue(event.target.value.length > 0);
            if (onChange) {
                onChange(event);
            }
        };

        useEffect(() => {
            setHasValue(rest?.value?.toString().length > 0);
        }, [rest.value]);

        if (variant === 'boxed') {
            return (
                <InputWrapper ref={ref} {...classNameProps} {...marginProps} {...widthProps}>
                    <BoxedInput
                        {...rest}
                        ref={innerRef}
                        variant={variant}
                        id={id}
                        size={size}
                        hasValue={hasValue || hasUncontrolledValue}
                        onChange={handleChange}
                        aria-invalid={rest.error}
                    />
                    {label && (
                        <BoxedInputLabel htmlFor={id} size={size}>
                            {label}
                        </BoxedInputLabel>
                    )}
                </InputWrapper>
            );
        }

        if (variant === 'bottom-lined') {
            return (
                <InputWrapper ref={ref} {...classNameProps} {...marginProps} {...widthProps}>
                    <BottomLinedInput
                        {...rest}
                        variant={variant}
                        id={id}
                        size={size}
                        hasValue={hasValue || hasUncontrolledValue}
                        onChange={handleChange}
                        aria-invalid={rest.error}
                    />
                    {label && (
                        <BottomLinedInputLabel htmlFor={id} size={size}>
                            {label}
                        </BottomLinedInputLabel>
                    )}
                </InputWrapper>
            );
        }

        return undefined;
    }
);

InnerInput.defaultProps = {
    size: 'medium',
    variant: 'boxed',
    type: 'text'
};

export { InnerInput, InputProps };
