import React from 'react';
import { Colors } from '../../essentials';
import { IconProps } from '../IconProps';
import { withDeprecatedMessage } from '../../utils/withDeprecatedMessage';
import { ForwardLastIcon } from '../';
type Props = IconProps;

const ForwardSmallIcon: React.FC<Props> = withDeprecatedMessage('ForwardSmallIcon', ForwardLastIcon, { size: 20 });

ForwardSmallIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default ForwardSmallIcon;
