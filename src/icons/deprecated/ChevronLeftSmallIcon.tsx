import React from 'react';
import { Colors } from '../../essentials';
import { IconProps } from '../IconProps';
import { withDeprecatedMessage } from '../../utils/withDeprecatedMessage';
import ChevronLeftIcon from '../arrows/ChevronLeftIcon';
type Props = IconProps;

const ChevronLeftSmallIcon: React.FC<Props> = withDeprecatedMessage('ChevronLeftSmallIcon', ChevronLeftIcon, {
    size: 20
});

ChevronLeftSmallIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default ChevronLeftSmallIcon;
