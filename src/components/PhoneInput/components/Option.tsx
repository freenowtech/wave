import React from 'react';
import { components } from 'react-select';
import styled from 'styled-components';
import { Flag } from '../../../icons';
import { isFlagAvailable } from '../util/isFlagAvailable';

const OptionWithFlag = styled(components.Option)`
    display: inline-flex !important;

    svg {
        min-width: 1.5rem;
        margin-right: 0.75rem;
    }
`;

const Option = props => {
    const data = props.data;

    return (
        <OptionWithFlag {...props} role="option">
            <Flag code={isFlagAvailable(data.value) ? data.value : 'WW'} />
            {data.label}
        </OptionWithFlag>
    );
};

export { Option };
