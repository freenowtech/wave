import React from 'react';
import { components } from 'react-select';
import styled from 'styled-components';
import { Text } from '../../Text/Text';
import { Flag } from '../../../icons';
import { isFlagAvailable } from '../util/isFlagAvailable';

const StyledSingleValue = styled(components.SingleValue)`
    display: inline-flex;

    svg {
        min-width: 1.5rem;
        margin-right: 0.5rem;
    }
`;

const SingleValue = props => {
    if (!props.hasValue) {
        return props.children;
    }

    const selectedOption = props.getValue()[0];

    return (
        <StyledSingleValue {...props}>
            <Flag code={isFlagAvailable(selectedOption.value) ? selectedOption.value : 'WW'} />
            <Text>{selectedOption.dialCode}</Text>
        </StyledSingleValue>
    );
};

export { SingleValue };
