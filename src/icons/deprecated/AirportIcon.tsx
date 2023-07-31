import React from 'react';
import { IconProps } from '../IconProps';
import { withDeprecatedMessage } from '../../utils/withDeprecatedMessage';
import PlaneIcon from '../navigation/PlaneIcon';
type Props = IconProps;

const AirportIcon: React.FC<Props> = withDeprecatedMessage('AirportIcon', PlaneIcon);

export default AirportIcon;
