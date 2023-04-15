import React from 'react';
import { Colors } from '../../essentials';
import { IconProps } from '../IconProps';
import LeafSolidIcon from '../service-type/LeafSolidIcon';
import { withDeprecatedMessage } from '../../utils/withDeprecatedMessage';
type Props = IconProps;

const EcoIcon: React.FC<Props> = withDeprecatedMessage('EcoIcon', LeafSolidIcon);

EcoIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default EcoIcon;
