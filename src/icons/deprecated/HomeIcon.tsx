import React from 'react';
import { IconProps } from '../IconProps';
import { withDeprecatedMessage } from '../../utils/withDeprecatedMessage';
import HouseIcon from '../navigation/HouseIcon';
type Props = IconProps;

const HomeIcon: React.FC<Props> = withDeprecatedMessage('HomeIcon', HouseIcon);

export default HomeIcon;
