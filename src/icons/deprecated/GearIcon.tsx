import React from 'react';
import { IconProps } from '../IconProps';
import { withDeprecatedMessage } from '../../utils/withDeprecatedMessage';
import CogIcon from '../options/CogIcon';
type Props = IconProps;

const GearIcon: React.FC<Props> = withDeprecatedMessage('GearIcon', CogIcon);

export default GearIcon;
