import React from 'react';
import { IconProps } from '../IconProps';
import { withDeprecatedMessage } from '../../utils/withDeprecatedMessage';
import MagnifyingGlassIcon from '../actions/MagnifyingGlassIcon';
type Props = IconProps;

const SearchIcon: React.FC<Props> = withDeprecatedMessage('SearchIcon', MagnifyingGlassIcon);

export default SearchIcon;
