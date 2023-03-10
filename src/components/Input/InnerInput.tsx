import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { extractClassNameProps, extractWidthProps, extractWrapperMarginProps } from '../../utils/extractProps';
import { useGeneratedId } from '../../utils/hooks/useGeneratedId';
import { BottomLinedInput } from './BottomLinedInput';
import { BottomLinedInputLabel } from './BottomLinedInputLabel';
import { BoxedInput } from './BoxedInput';
import { BoxedInputLabel } from './BoxedInputLabel';
import { InputProps } from './InputProps';
import { InputWrapper, InputWrapperProps } from './InputWrapper';

const InnerInput = forwardRef<HTMLDivElement, InputWrapperProps & InputProps>(
    (props: InputWrapperProps & InputProps, ref) => {
        const { classNameProps, restProps: withoutClassName } = extractClassNameProps(props);
        const { marginProps, restProps: withoutMargin } = extractWrapperMarginProps(withoutClassName);
        const { widthProps, restProps } = extractWidthProps(withoutMargin);
        // TODO replace with ref when implementing https://github.com/freenowtech/wave/issues/169
        const inputRef = useRef<HTMLInputElement>();

        const { label, onChange, size, id: providedId, variant, ...rest } = restProps;
        const id = useGeneratedId(providedId);

        const [hasValue, setHasValue] = useState(rest?.value?.toString().length > 0);
        const hasUncontrolledValue = inputRef?.current?.value?.length > 0;

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
                        ref={inputRef}
                        variant={variant}
                        id={id}
                        size={size}
                        hasValue={hasValue || hasUncontrolledValue}
                        onChange={handleChange}
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
