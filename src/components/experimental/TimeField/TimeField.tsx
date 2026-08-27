import React from 'react';
import styled from 'styled-components';
import { TimeValue } from 'react-aria';
import { FieldError, TimeField as BaseTimeField, TimeFieldProps as BaseTimeFieldProps } from 'react-aria-components';
import { useControlledState } from '@react-stately/utils';
import { now, getLocalTimeZone } from '@internationalized/date';
import { getSemanticValue } from '../../../essentials/experimental';
import { Label } from '../Field/Label';
import { Footer } from '../Field/Footer';
import { FakeInput } from '../Field/FakeInput';
import { InnerWrapper } from '../Field/InnerWrapper';
import { DateInput, fieldTextStyles } from '../Field/Field';
import { DateSegment } from '../Field/DateSegment';
import { Wrapper } from '../Field/Wrapper';
import { FieldProps } from '../Field/Props';
import { VisuallyHidden } from '../../VisuallyHidden/VisuallyHidden';

const TimeInputWrapper = styled.div`
    position: relative;
`;

const StyledDateInput = styled(DateInput)<{ $isHidden?: boolean }>`
    ${props => props.$isHidden && 'opacity: 0;'}
`;

const EmptyStateLabel = styled.span`
    ${fieldTextStyles}
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    pointer-events: none;
    color: ${getSemanticValue('on-surface-variant')};
`;

type TimeFieldProps = Omit<FieldProps, 'label'> &
    BaseTimeFieldProps<TimeValue> & {
        label: string;
        hideLabel?: boolean;
        emptyStateLabel?: string;
        getValueOnBlur?: (value: TimeValue) => TimeValue | null;
        getNow?: () => TimeValue;
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
            emptyStateLabel,
            getValueOnBlur,
            getNow = () => now(getLocalTimeZone()),
            value: valueProp,
            defaultValue,
            onChange,
            onFocusChange,
            ...props
        },
        forwardedRef
    ) => {
        const [value, setValue] = useControlledState<TimeValue | null>(valueProp, defaultValue ?? null, onChange);
        const [isFocused, setIsFocused] = React.useState(false);

        const handleFocusChange = (focused: boolean) => {
            if (focused && value == null && getValueOnBlur) {
                setValue(getNow());
            } else if (!focused && value != null && getValueOnBlur) {
                setValue(getValueOnBlur(value));
            }
            setIsFocused(focused);
            onFocusChange?.(focused);
        };

        const showEmptyStateLabel = !isFocused && value == null && !!emptyStateLabel;

        return (
            <Wrapper>
                <BaseTimeField
                    {...props}
                    value={value}
                    onChange={setValue}
                    onFocusChange={handleFocusChange}
                    hideTimeZone={hideTimeZone}
                    ref={forwardedRef}
                >
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
                                    <TimeInputWrapper>
                                        <StyledDateInput $isHidden={showEmptyStateLabel}>
                                            {segment => <DateSegment segment={segment} />}
                                        </StyledDateInput>
                                        {showEmptyStateLabel && (
                                            <EmptyStateLabel aria-hidden="true">{emptyStateLabel}</EmptyStateLabel>
                                        )}
                                    </TimeInputWrapper>
                                </InnerWrapper>
                                {actionIcon}
                            </FakeInput>
                            <Footer>{isInvalid ? <FieldError>{errorMessage}</FieldError> : description}</Footer>
                        </>
                    )}
                </BaseTimeField>
            </Wrapper>
        );
    }
);

export { TimeField, TimeFieldProps };
