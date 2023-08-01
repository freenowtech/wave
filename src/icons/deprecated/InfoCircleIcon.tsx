import React from 'react';
import { IconProps } from '../IconProps';
import InfoCircleOutlineIcon from '../options/InfoCircleOutlineIcon';
import { withDeprecatedMessage } from '../../utils/withDeprecatedMessage';
type Props = IconProps;

const InfoCircleIcon: React.FC<Props> = withDeprecatedMessage('InfoCircleIcon', InfoCircleOutlineIcon);

export default InfoCircleIcon;
