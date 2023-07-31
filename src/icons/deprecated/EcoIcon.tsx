import React from 'react';
import { IconProps } from '../IconProps';
import LeafSolidIcon from '../service-type/LeafSolidIcon';
import { withDeprecatedMessage } from '../../utils/withDeprecatedMessage';
type Props = IconProps;

const EcoIcon: React.FC<Props> = withDeprecatedMessage('EcoIcon', LeafSolidIcon);

export default EcoIcon;
