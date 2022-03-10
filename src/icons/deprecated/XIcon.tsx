import React from 'react';
import { Colors } from '../../essentials';
import { IconProps } from '../IconProps';
import { withDeprecatedMessage } from '../../utils/withDeprecatedMessage';
import { CloseIcon } from '../';
type Props = IconProps;

const XIcon: React.FC<Props> = withDeprecatedMessage('XIcon', CloseIcon);

XIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default XIcon;
