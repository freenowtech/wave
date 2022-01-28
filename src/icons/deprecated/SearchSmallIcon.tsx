import React from 'react';
import { Colors } from '../../essentials';
import { IconProps } from '../IconProps';
import { withDeprecatedMessage } from '../../utils/withDeprecatedMessage';
import { MagnifyingGlassIcon } from '../';
type Props = IconProps;

const SearchSmallIcon: React.FC<Props> = withDeprecatedMessage('SearchSmallIcon', MagnifyingGlassIcon, { size: 20 });

SearchSmallIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default SearchSmallIcon;
