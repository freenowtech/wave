import React from 'react';
import { DateValue } from 'react-aria';
import { DateField as BaseDateField, DateFieldProps as BaseDateFieldProps, FieldError } from 'react-aria-components';
import { Label } from '../Field/Label';
import { Footer } from '../Field/Footer';
import { FakeInput } from '../Field/FakeInput';
import { InnerWrapper } from '../Field/InnerWrapper';
import { Wrapper } from '../Field/Wrapper';
import { DateInput } from '../Field/Field';
import { DateSegment } from '../Field/DateSegment';
import { FieldProps } from '../Field/Props';

type SegmentedProps = FieldProps &
    BaseDateFieldProps<DateValue> & {
        variant?: 'segments';
    };

type TextProps = FieldProps & {
    variant: 'text';
    value: string;
    onChange: (v: string) => void;
    placeholder?: string;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    id?: string;
    name?: string;
    isVisuallyFocused?: boolean;
    leadingIcon?: React.ReactNode;
    actionIcon?: React.ReactNode;
    errorMessage?: React.ReactNode;
    description?: React.ReactNode;
    isInvalid?: boolean;
};

export type DateFieldProps = SegmentedProps | TextProps;

const inputStyle: React.CSSProperties = {
    border: 0,
    outline: 0,
    background: 'transparent',
    width: '100%',
    font: 'inherit',
    color: 'inherit',
    padding: 0
};

const DateField = React.forwardRef<HTMLDivElement, DateFieldProps>((props, forwardedRef) => {
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
            inputProps
        } = props;

        return (
            <Wrapper ref={forwardedRef}>
                <FakeInput $isVisuallyFocused={isVisuallyFocused}>
                    {leadingIcon}
                    <InnerWrapper>
                        {label && <Label $flying>{label}</Label>}
                        {/* Plain input for free-typed date text */}
                        <input
                            value={value}
                            onChange={e => onChange(e.target.value)}
                            placeholder={placeholder}
                            style={inputStyle}
                            {...inputProps}
                        />
                    </InnerWrapper>
                    {actionIcon}
                </FakeInput>
                <Footer>{isInvalid ? <FieldError>{errorMessage}</FieldError> : description}</Footer>
            </Wrapper>
        );
    }

    // Default: keep original segmented DateField behavior
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

export { DateField };
