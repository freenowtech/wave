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
`;

const SingleValue: FC<SingleValueProps<PhoneAreaCodeCountry>> = (props: SingleValueProps<PhoneAreaCodeCountry>) => {
    if (!props.hasValue) {
        return props.children as ReactElement;
    }

    const selectedOption = props.getValue()[0] as PhoneAreaCodeCountry;

    return (
        <StyledSingleValue {...props}>
            <Flag code={isFlagAvailable(selectedOption.value) ? selectedOption.value : 'WW'} />
            <Text>{selectedOption.dialCode}</Text>
        </StyledSingleValue>
    );
};

export { SingleValue };
