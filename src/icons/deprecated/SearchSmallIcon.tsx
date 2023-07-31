import React from 'react';
import { IconProps } from '../IconProps';
import { withDeprecatedMessage } from '../../utils/withDeprecatedMessage';
import MagnifyingGlassIcon from '../actions/MagnifyingGlassIcon';
type Props = IconProps;

const SearchSmallIcon: React.FC<Props> = withDeprecatedMessage('SearchSmallIcon', MagnifyingGlassIcon, { size: 20 });

export default SearchSmallIcon;
