import React from 'react';
import { Colors } from '../../essentials';
import { IconProps } from '../IconProps';
import { withDeprecatedMessage } from '../../utils/withDeprecatedMessage';
import { HeartSolidIcon } from '../';
type Props = IconProps;

const HeartIcon: React.FC<Props> = withDeprecatedMessage('HeartIcon', HeartSolidIcon);

HeartIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default HeartIcon;
