import React from 'react';
import { IconProps } from '../IconProps';
import { withDeprecatedMessage } from '../../utils/withDeprecatedMessage';
import HeartSolidIcon from '../options/HeartSolidIcon';
type Props = IconProps;

const HeartIcon: React.FC<Props> = withDeprecatedMessage('HeartIcon', HeartSolidIcon);

export default HeartIcon;
