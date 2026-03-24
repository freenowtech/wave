import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { extractClassNameProps, extractWidthProps, extractWrapperMarginProps } from '../../utils/extractProps';
import { useGeneratedId } from '../../utils/hooks/useGeneratedId';
import { BottomLinedInput } from './BottomLinedInput';
import { BottomLinedInputLabel } from './BottomLinedInputLabel';
import { BoxedInput } from './BoxedInput';
import { BoxedInputLabel } from './BoxedInputLabel';
import { type InputProps } from './InputProps';
import { InputWrapper, type InputWrapperProps } from './InputWrapper';

const InnerInput = forwardRef<HTMLInputElement, InputWrapperProps & InputProps>(
    (props: InputWrapperProps & InputProps, ref) => {
        const { classNameProps, restProps: withoutClassName } = extractClassNameProps(props);
        const { marginProps, restProps: withoutMargin } = extractWrapperMarginProps(withoutClassName);
        const { widthProps, restProps } = extractWidthProps(withoutMargin);

        const {
            label,
            onChange,
            size = 'medium',
            id: providedId,
            variant = 'boxed',
            type = 'text',
            ...rest
        } = restProps;
        const id = useGeneratedId(providedId);

        const innerRef = useRef<HTMLInputElement | null>(null);
        useImperativeHandle(ref, () => innerRef.current!, []);

        const [hasValue, setHasValue] = useState((rest?.value?.toString()?.length ?? 0) > 0);
        const hasUncontrolledValue = (innerRef?.current?.value?.length ?? 0) > 0;

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setHasValue(event.target.value.length > 0);
            if (onChange) {
                onChange(event);
            }
        };

        useEffect(() => {
            setHasValue((rest?.value?.toString()?.length ?? 0) > 0);
        }, [rest.value]);

        if (variant === 'boxed') {
            return (
                <InputWrapper {...classNameProps} {...marginProps} {...widthProps}>
                    <BoxedInput
                        {...rest}
                        ref={innerRef}
                        type={type}
                        variant={variant}
                        id={id}
                        waveSize={size}
                        hasValue={hasValue || hasUncontrolledValue}
                        onChange={handleChange}
                        aria-invalid={rest.error}
                    />
                    {label && (
                        <BoxedInputLabel htmlFor={id} waveSize={size}>
                            {label}
                        </BoxedInputLabel>
                    )}
                </InputWrapper>
            );
        }

        if (variant === 'bottom-lined') {
            return (
                <InputWrapper {...classNameProps} {...marginProps} {...widthProps}>
                    <BottomLinedInput
                        {...rest}
                        ref={innerRef}
                        type={type}
                        variant={variant}
                        id={id}
                        waveSize={size}
                        hasValue={hasValue || hasUncontrolledValue}
                        onChange={handleChange}
                        aria-invalid={rest.error}
                    />
                    {label && (
                        <BottomLinedInputLabel htmlFor={id} waveSize={size}>
                            {label}
                        </BottomLinedInputLabel>
                    )}
                </InputWrapper>
            );
        }

        return undefined;
    }
);

export { InnerInput };

export { type InputProps } from './InputProps';
