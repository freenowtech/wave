import React, { ReactElement } from 'react';
import { SearchFieldProps, SearchField } from 'react-aria-components';
import XCrossCircleIcon from '../../../icons/actions/XCrossCircleIcon';
import SearchIcon from '../../../icons/experimental/SearchIcon';
import { Input } from '../Input/Input';
import { Button } from '../Field/Button';
import { getSemanticValue } from '../../../essentials/experimental';

interface SearchProps extends SearchFieldProps {
    placeholder: string;
}

export const Search = ({ placeholder, ...rest }: SearchProps): ReactElement => (
    <SearchField aria-label={placeholder} {...rest}>
        {({ state }) => (
            <Input
                leadingIcon={<SearchIcon />}
                placeholder={placeholder}
                actionIcon={
                    state.value !== '' && (
                        <Button>
                            <XCrossCircleIcon size={20} color={getSemanticValue('on-surface')} />
                        </Button>
                    )
                }
            />
        )}
    </SearchField>
);
