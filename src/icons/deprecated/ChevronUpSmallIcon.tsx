import React from 'react';
import { Colors } from '../../essentials';
import { IconProps } from '../IconProps';
import { withDeprecatedMessage } from '../../utils/withDeprecatedMessage';
import { ChevronUpIcon } from '../';
type Props = IconProps;

const ChevronUpSmallIcon: React.FC<Props> = withDeprecatedMessage('ChevronUpSmallIcon', ChevronUpIcon, { size: 20 });

ChevronUpSmallIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default ChevronUpSmallIcon;
