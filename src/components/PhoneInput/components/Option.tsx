import React, { type FC } from 'react';
import { components, type OptionProps } from 'react-select';
import styled from 'styled-components';
import { Flag } from '../../../icons';
import { type PhoneAreaCodeCountry } from '../types/PhoneAreaCodeCountry';
import { isFlagAvailable } from '../util/isFlagAvailable';

// Styled wrapper for content inside react-select's Option.
// We avoid wrapping components.Option directly with styled() because
// styled-components v6 strips the `theme` prop, which react-select needs internally.
const OptionContent = styled.div`
    display: inline-flex;

    svg {
        min-width: 1.5rem;
        margin-right: 0.75rem;
    }
`;

const Option: FC<OptionProps<any>> = (props: OptionProps<PhoneAreaCodeCountry>) => {
    const { data } = props;

    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <components.Option {...props}>
            <OptionContent>
                <Flag code={isFlagAvailable(data.value) ? data.value : 'WW'} />
                {data.label}
            </OptionContent>
        </components.Option>
    );
};

export { Option };
