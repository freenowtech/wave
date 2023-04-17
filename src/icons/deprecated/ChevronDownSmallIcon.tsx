// @deprecated
import React from 'react';
import { Colors } from '../../essentials';
import { IconProps } from '../IconProps';
import ChevronDownIcon from '../arrows/ChevronDownIcon';
import { withDeprecatedMessage } from '../../utils/withDeprecatedMessage';

type Props = IconProps;

const ChevronDownSmallIcon: React.FC<Props> = withDeprecatedMessage('ChevronDownSmallIcon', ChevronDownIcon, {
    size: 20
});

ChevronDownSmallIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default ChevronDownSmallIcon;
