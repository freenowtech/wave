import React, { FC, ReactElement } from 'react';
import { components, SingleValueProps } from 'react-select';
import styled from 'styled-components';
import { Flag } from '../../../icons';
import { Text } from '../../Text/Text';
import { PhoneAreaCodeCountry } from '../types/PhoneAreaCodeCountry';
import { isFlagAvailable } from '../util/isFlagAvailable';

const StyledSingleValue = styled(components.SingleValue)`
    display: inline-flex;

    svg {
        min-width: 1.5rem;
        margin-right: 0.5rem;
    }
    max-width: 100%;
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SingleValue: FC<SingleValueProps<any>> = (props: SingleValueProps<PhoneAreaCodeCountry>) => {
    if (!props.hasValue) {
        return props.children as ReactElement;
    }

    const selectedOption: PhoneAreaCodeCountry = props.getValue()[0];

    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <StyledSingleValue {...props}>
            <Flag code={isFlagAvailable(selectedOption.value) ? selectedOption.value : 'WW'} />
            <Text>{selectedOption.dialCode}</Text>
        </StyledSingleValue>
    );
};

export { SingleValue };
