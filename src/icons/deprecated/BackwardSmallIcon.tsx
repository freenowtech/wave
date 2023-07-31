import React from 'react';
import { IconProps } from '../IconProps';
import { withDeprecatedMessage } from '../../utils/withDeprecatedMessage';
import BackwardLastIcon from '../arrows/BackwardLastIcon';
type Props = IconProps;

const BackwardSmallIcon: React.FC<Props> = withDeprecatedMessage('BackwardSmallIcon', BackwardLastIcon, { size: 20 });

export default BackwardSmallIcon;
