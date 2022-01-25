import React from 'react';
import { Colors } from '../../essentials';
import { IconProps } from '../IconProps';
import { withDeprecatedMessage } from '../../utils/withDeprecatedMessage';
import { HouseIcon } from '../';
type Props = IconProps;

const HomeIcon: React.FC<Props> = withDeprecatedMessage('HomeIcon', HouseIcon);

HomeIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default HomeIcon;
