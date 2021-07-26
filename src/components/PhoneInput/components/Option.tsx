import React, { FC } from 'react';
import { components, OptionProps } from 'react-select';
import styled from 'styled-components';
import { Flag } from '../../../icons';
import { PhoneAreaCodeCountry } from '../types/PhoneAreaCodeCountry';
import { isFlagAvailable } from '../util/isFlagAvailable';

const OptionWithFlag = styled(components.Option).attrs({ role: 'option' })`
    display: inline-flex !important;

    svg {
        min-width: 1.5rem;
        margin-right: 0.75rem;
    }
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Option: FC<OptionProps<any>> = (props: OptionProps<PhoneAreaCodeCountry>) => {
    const data = props.data as PhoneAreaCodeCountry;

    return (
        <OptionWithFlag {...props}>
            <Flag code={isFlagAvailable(data.value) ? data.value : 'WW'} />
            {data.label}
        </OptionWithFlag>
    );
};

export { Option };
