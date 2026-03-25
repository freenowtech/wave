import React, { type FC, type ReactElement } from 'react';
import { components, type SingleValueProps } from 'react-select';
import { styled } from 'styled-components';
import { Flag } from '../../../icons';
import { Text } from '../../Text/Text';
import { type PhoneAreaCodeCountry } from '../types/PhoneAreaCodeCountry';
import { isFlagAvailable } from '../util/isFlagAvailable';

// Styled wrapper for content inside react-select's SingleValue.
// We avoid wrapping components.SingleValue directly with styled() because
// styled-components v6 strips the `theme` prop, which react-select needs internally.
const SingleValueContent = styled.div`
    display: inline-flex;
    max-width: 100%;

    svg {
        min-width: 1.5rem;
        margin-right: 0.5rem;
    }
`;

const SingleValue: FC<SingleValueProps<any>> = (props: SingleValueProps<PhoneAreaCodeCountry>) => {
    if (!props.hasValue) {
        return props.children as ReactElement;
    }

    const selectedOption: PhoneAreaCodeCountry = props.getValue()[0];

    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <components.SingleValue {...props}>
            <SingleValueContent>
                <Flag code={isFlagAvailable(selectedOption.value) ? selectedOption.value : 'WW'} />
                <Text>{selectedOption.dialCode}</Text>
            </SingleValueContent>
        </components.SingleValue>
    );
};

export { SingleValue };
