import React from 'react';
import {
    NumberField as BaseNumberField,
    NumberFieldProps as BaseNumberFieldProps,
    FieldError,
    Group
} from 'react-aria-components';
import styled from 'styled-components';
import { Label } from '../Field/Label';
import { Footer } from '../Field/Footer';
import { FakeInput } from '../Field/FakeInput';
import { InnerWrapper } from '../Field/InnerWrapper';
import { Wrapper } from '../Field/Wrapper';
import { Input } from '../Field/Field';
import { FieldProps } from '../Field/Props';
import { Button } from '../Field/Button';
import DropupSelectIcon from '../../../icons/arrows/DropupSelectIcon';
import DropdownSelectIcon from '../../../icons/arrows/DropdownSelectIcon';
import { getSemanticValue } from '../../../essentials/experimental';

type NumberFieldProps = Omit<FieldProps, 'actionIcon' | 'leadingIcon'> & BaseNumberFieldProps;

const GroupControl = styled(Group)`
    display: flex;
    flex-direction: column;
    height: 1.5rem;

    ${Button} {
        position: relative;
        top: -50%;
        color: ${getSemanticValue('on-surface-variant')};

        &[data-hovered] {
            color: ${getSemanticValue('interactive')};
        }

        &[data-disabled] {
            opacity: 0.38;
        }

        svg {
            position: relative;
            pointer-events: none;
        }

        &:first-of-type svg {
            top: 8px;
        }

        &:last-of-type svg {
            bottom: 8px;
        }
    }
`;

const NumberField = React.forwardRef<HTMLDivElement, NumberFieldProps>(
    ({ label, description, errorMessage, isVisuallyFocused = false, ...props }, forwardedRef) => (
        <Wrapper>
            <BaseNumberField {...props} ref={forwardedRef}>
                {({ isInvalid }) => (
                    <>
                        <FakeInput $isVisuallyFocused={isVisuallyFocused}>
                            <InnerWrapper>
                                <Label $flying>{label}</Label>
                                <Input />
                            </InnerWrapper>
                            <GroupControl>
                                <Button slot="increment">
                                    <DropupSelectIcon />
                                </Button>
                                <Button slot="decrement">
                                    <DropdownSelectIcon />
                                </Button>
                            </GroupControl>
                        </FakeInput>
                        <Footer>{isInvalid ? <FieldError>{errorMessage}</FieldError> : description}</Footer>
                    </>
                )}
            </BaseNumberField>
        </Wrapper>
    )
);

export { NumberField, NumberFieldProps };
