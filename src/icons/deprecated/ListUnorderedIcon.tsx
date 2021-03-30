import React from 'react';
import { Colors } from '../../essentials';
import { IconProps } from '../IconProps';
import { withDeprecatedMessage } from '../../utils/withDeprecatedMessage';
import { ListIcon } from '../basic';
type Props = IconProps;

const ListUnorderedIcon: React.FC<Props> = withDeprecatedMessage('ListUnorderedIcon', ListIcon);

ListUnorderedIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default ListUnorderedIcon;
