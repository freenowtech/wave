import React from 'react';
import { Colors } from '../../essentials';
import { CloseIcon } from '../basic';
import { IconProps } from '../IconProps';
import { withDeprecatedMessage } from '../../utils/withDeprecatedMessage';

type Props = IconProps;

const XSmallIcon: React.FC<Props> = withDeprecatedMessage('XSmallIcon', CloseIcon, { size: 20 });

XSmallIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default XSmallIcon;
