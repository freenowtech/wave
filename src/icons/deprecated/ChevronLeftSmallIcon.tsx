import React from 'react';
import { IconProps } from '../IconProps';
import { withDeprecatedMessage } from '../../utils/withDeprecatedMessage';
import ChevronLeftIcon from '../arrows/ChevronLeftIcon';
type Props = IconProps;

const ChevronLeftSmallIcon: React.FC<Props> = withDeprecatedMessage('ChevronLeftSmallIcon', ChevronLeftIcon, {
    size: 20
});

export default ChevronLeftSmallIcon;
