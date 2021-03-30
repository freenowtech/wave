import React from 'react';
import { Colors } from '../../essentials';
import { IconProps } from '../IconProps';
import { withDeprecatedMessage } from '../../utils/withDeprecatedMessage';
import { CogIcon } from '../basic';
type Props = IconProps;

const GearIcon: React.FC<Props> = withDeprecatedMessage('GearIcon', CogIcon);

GearIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default GearIcon;
