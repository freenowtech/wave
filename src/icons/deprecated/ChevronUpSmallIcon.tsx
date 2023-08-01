import React from 'react';
import { IconProps } from '../IconProps';
import { withDeprecatedMessage } from '../../utils/withDeprecatedMessage';
import ChevronUpIcon from '../arrows/ChevronUpIcon';
type Props = IconProps;

const ChevronUpSmallIcon: React.FC<Props> = withDeprecatedMessage('ChevronUpSmallIcon', ChevronUpIcon, { size: 20 });

export default ChevronUpSmallIcon;
