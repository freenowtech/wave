import React from 'react';
import { Colors } from '../../essentials';
import { IconProps } from '../IconProps';
import { withDeprecatedMessage } from '../../utils/withDeprecatedMessage';
import { ChevronRightIcon } from '../basic';
type Props = IconProps;

const ChevronRightSmallIcon: React.FC<Props> = withDeprecatedMessage('ChevronRightSmallIcon', ChevronRightIcon, {
    size: 20
});

ChevronRightSmallIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default ChevronRightSmallIcon;
