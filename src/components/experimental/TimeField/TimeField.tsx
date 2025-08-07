import React from 'react';
import { TimeValue } from 'react-aria';
import { FieldError, TimeField as BaseTimeField, TimeFieldProps as BaseTimeFieldProps } from 'react-aria-components';
import { Label } from '../Field/Label';
import { Footer } from '../Field/Footer';
import { FakeInput } from '../Field/FakeInput';
import { InnerWrapper } from '../Field/InnerWrapper';
import { DateInput } from '../Field/Field';
import { DateSegment } from '../Field/DateSegment';
import { Wrapper } from '../Field/Wrapper';
import { FieldProps } from '../Field/Props';
import { VisuallyHidden } from '../../VisuallyHidden/VisuallyHidden';

type TimeFieldProps = Omit<FieldProps, 'label'> &
    BaseTimeFieldProps<TimeValue> & {
        label: string;
        hideLabel?: boolean;
    };

const TimeField = React.forwardRef<HTMLDivElement, TimeFieldProps>(
    (
        {
            label,
            hideLabel = false,
            description,
            errorMessage,
            leadingIcon,
            actionIcon,
            isVisuallyFocused = false,
            hideTimeZone = true,
            ...props
        },
        forwardedRef
    ) => (
        <Wrapper>
            <BaseTimeField {...props} hideTimeZone={hideTimeZone} ref={forwardedRef}>
                {({ isInvalid }) => (
                    <>
                        <FakeInput $isVisuallyFocused={isVisuallyFocused}>
                            {leadingIcon}
                            <InnerWrapper hideLabel={hideLabel}>
                                {hideLabel ? (
                                    <VisuallyHidden>
                                        <Label>{label}</Label>
                                    </VisuallyHidden>
                                ) : (
                                    <Label $flying>{label}</Label>
                                )}
                                <DateInput>{segment => <DateSegment segment={segment} />}</DateInput>
                            </InnerWrapper>
                            {actionIcon}
                        </FakeInput>
                        <Footer>{isInvalid ? <FieldError>{errorMessage}</FieldError> : description}</Footer>
                    </>
                )}
            </BaseTimeField>
        </Wrapper>
    )
);

export { TimeField, TimeFieldProps };
