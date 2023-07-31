import React from 'react';
import { IconProps } from '../IconProps';
import { withDeprecatedMessage } from '../../utils/withDeprecatedMessage';
import ForwardLastIcon from '../arrows/ForwardLastIcon';
type Props = IconProps;

const ForwardSmallIcon: React.FC<Props> = withDeprecatedMessage('ForwardSmallIcon', ForwardLastIcon, { size: 20 });

export default ForwardSmallIcon;
