import React from 'react';
import { TimeValue } from 'react-aria';
import { TimeField as BaseTimeField, TimeFieldProps as BaseTimeFieldProps } from 'react-aria-components';
import { Label } from '../Field/Label';
import { Footer } from '../Field/Footer';
import { FakeInput } from '../Field/FakeInput';
import { InnerWrapper } from '../Field/InnerWrapper';
import { DateInput } from '../Field/Field';
import { DateSegment } from '../Field/DateSegment';
import { Wrapper } from '../Field/Wrapper';
import { Message } from '../Field/Message';
import { FieldProps } from '../Field/Props';

type TimeFieldProps = FieldProps & BaseTimeFieldProps<TimeValue>;

const TimeField = React.forwardRef<HTMLDivElement, TimeFieldProps>(
    (
        { label, description, errorMessage, leadingIcon, actionIcon, isVisuallyFocused = false, ...props },
        forwardedRef
    ) => (
        <BaseTimeField {...props} ref={forwardedRef}>
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
        </BaseTimeField>
    )
);

export { TimeField, TimeFieldProps };
