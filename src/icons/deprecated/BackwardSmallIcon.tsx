import React from 'react';
import { Colors } from '../../essentials';
import { IconProps } from '../IconProps';
import { withDeprecatedMessage } from '../../utils/withDeprecatedMessage';
import { BackwardLastIcon } from '../basic';
type Props = IconProps;

const BackwardSmallIcon: React.FC<Props> = withDeprecatedMessage('BackwardSmallIcon', BackwardLastIcon, { size: 20 });

BackwardSmallIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default BackwardSmallIcon;
