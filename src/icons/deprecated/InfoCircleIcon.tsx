import React from 'react';
import { Colors } from '../../essentials';
import { IconProps } from '../IconProps';
import InfoCircleOutlineIcon from '../options/InfoCircleOutlineIcon';
import { withDeprecatedMessage } from '../../utils/withDeprecatedMessage';
type Props = IconProps;

const InfoCircleIcon: React.FC<Props> = withDeprecatedMessage('InfoCircleIcon', InfoCircleOutlineIcon);

InfoCircleIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default InfoCircleIcon;
