import React from 'react';
import { Colors } from '../../essentials';
import { IconProps } from '../IconProps';
import { withDeprecatedMessage } from '../../utils/withDeprecatedMessage';
import { MagnifyingGlassIcon } from '../';
type Props = IconProps;

const SearchIcon: React.FC<Props> = withDeprecatedMessage('SearchIcon', MagnifyingGlassIcon);

SearchIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default SearchIcon;
