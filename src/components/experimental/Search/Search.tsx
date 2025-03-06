import React, { ReactElement } from 'react';
import { SearchFieldProps } from 'react-aria-components';
import XCrossCircleIcon from '../../../icons/actions/XCrossCircleIcon';

import * as Styled from './Search.styled';

interface SearchProps extends SearchFieldProps {
    placeholder: string;
}

export const Search = ({ placeholder, ...rest }: SearchProps): ReactElement => (
    <Styled.SearchField aria-label={placeholder} {...rest}>
        {({ state }) => (
            <>
                <Styled.Icon size={20} />
                <Styled.Input placeholder={placeholder} />
                {state.value !== '' && (
                    <Styled.Button>
                        <XCrossCircleIcon size={20} />
                    </Styled.Button>
                )}
            </>
        )}
    </Styled.SearchField>
);
