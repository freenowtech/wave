import React from 'react';
import { DateValue } from 'react-aria';
import { DateField as BaseDateField, DateFieldProps as BaseDateFieldProps, FieldError } from 'react-aria-components';
import { Label } from '../Field/Label';
import { Footer } from '../Field/Footer';
import { FakeInput } from '../Field/FakeInput';
import { InnerWrapper } from '../Field/InnerWrapper';
import { Wrapper } from '../Field/Wrapper';
import { DateInput, Input } from '../Field/Field';
import { DateSegment } from '../Field/DateSegment';
import { FieldProps } from '../Field/Props';

type TextOnlyKeys = 'value' | 'onChange' | 'placeholder' | 'inputProps';

export type SegmentedProps = Omit<FieldProps, TextOnlyKeys> &
    BaseDateFieldProps<DateValue> & {
        variant: 'segments';
    };

export type TextProps = FieldProps & {
    variant: 'text';
    value: string;
    onChange: (v: string) => void;
    placeholder?: string;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    // allow passing autoFocus at the top level
    autoFocus?: boolean;
    id?: string;
    name?: string;
    isVisuallyFocused?: boolean;
    leadingIcon?: React.ReactNode;
    actionIcon?: React.ReactNode;
    errorMessage?: React.ReactNode;
    description?: React.ReactNode;
    isInvalid?: boolean;
    isDisabled?: boolean;
};

export type DateFieldProps = SegmentedProps | TextProps;

// overloads to preserve good inference with forwardRef
export interface DateFieldOverloads {
    (props: SegmentedProps & React.RefAttributes<HTMLDivElement>): JSX.Element;
    (props: TextProps & React.RefAttributes<HTMLDivElement>): JSX.Element;
}

const inputStyle: React.CSSProperties = {
    border: 0,
    outline: 0,
    background: 'transparent',
    width: '100%',
    font: 'inherit',
    color: 'inherit',
    padding: 0
};

const DateFieldInner = React.forwardRef<HTMLDivElement, DateFieldProps>((props, forwardedRef) => {
    if (props.variant === 'text') {
        const {
            label,
            description,
            errorMessage,
            isInvalid,
            leadingIcon,
            actionIcon,
            isVisuallyFocused = false,
            value,
            onChange,
            placeholder,
            inputProps,
            autoFocus,
            isDisabled
        } = props;

        const inputRef = React.useRef<HTMLInputElement | null>(null);

        React.useEffect(() => {
            if (autoFocus && !isDisabled) queueMicrotask(() => inputRef.current?.focus());
        }, [autoFocus, isDisabled]);

        return (
            <Wrapper ref={forwardedRef}>
                <FakeInput $isVisuallyFocused={isVisuallyFocused}>
                    {leadingIcon}
                    <InnerWrapper>
                        {label && <Label $flying>{label}</Label>}
                        <Input
                            ref={inputRef}
                            value={value}
                            onChange={e => {
                                if (isDisabled) return;
                                onChange(e.target.value);
                            }}
                            placeholder={placeholder}
                            style={inputStyle}
                            disabled={isDisabled}
                            aria-disabled={isDisabled}
                            {...inputProps}
                        />
                    </InnerWrapper>
                    {actionIcon}
                </FakeInput>
                <Footer>{isInvalid ? <FieldError>{errorMessage}</FieldError> : description}</Footer>
            </Wrapper>
        );
    }

    // default segmented behavior (react-aria)
    const { label, description, errorMessage, leadingIcon, actionIcon, isVisuallyFocused = false, ...rest } = props;
    return (
        <Wrapper ref={forwardedRef}>
            <BaseDateField {...rest}>
                {({ isInvalid }) => (
                    <>
                        <FakeInput $isVisuallyFocused={isVisuallyFocused}>
                            {leadingIcon}
                            <InnerWrapper>
                                {label && <Label $flying>{label}</Label>}
                                <DateInput>{segment => <DateSegment segment={segment} />}</DateInput>
                            </InnerWrapper>
                            {actionIcon}
                        </FakeInput>
                        <Footer>{isInvalid ? <FieldError>{errorMessage}</FieldError> : description}</Footer>
                    </>
                )}
            </BaseDateField>
        </Wrapper>
    );
});

// we cast to an overload interface to keep better call signatures
// with variant-discriminated props when using forwardRef.
export const DateField = DateFieldInner as unknown as DateFieldOverloads;
