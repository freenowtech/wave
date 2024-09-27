import React from 'react';
import { DateValue } from 'react-aria';
import { DateField as BaseDateField, DateFieldProps as BaseDateFieldProps } from 'react-aria-components';
import { Label } from '../Field/Label';
import { Footer } from '../Field/Footer';
import { FakeInput } from '../Field/FakeInput';
import { InnerWrapper } from '../Field/InnerWrapper';
import { Wrapper } from '../Field/Wrapper';
import { DateInput } from '../Field/Field';
import { DateSegment } from '../Field/DateSegment';
import { Message } from '../Field/Message';
import { FieldProps } from '../Field/Props';

type DateFieldProps = FieldProps & BaseDateFieldProps<DateValue>;

const DateField = React.forwardRef<HTMLDivElement, DateFieldProps>(
    (
        { label, description, errorMessage, leadingIcon, actionIcon, isVisuallyFocused = false, ...props },
        forwardedRef
    ) => (
        <BaseDateField {...props} ref={forwardedRef}>
            <Wrapper>
                <FakeInput $isVisuallyFocused={isVisuallyFocused}>
                    {leadingIcon}
                    <InnerWrapper>
                        <Label $flying>{label}</Label>
                        <DateInput>{segment => <DateSegment segment={segment} />}</DateInput>
                    </InnerWrapper>
                    {actionIcon}
                </FakeInput>
                <Footer>
                    <Message description={description} errorMessage={errorMessage} />
                </Footer>
            </Wrapper>
        </BaseDateField>
    )
);

export { DateField, DateFieldProps };
