// @deprecated
import React from 'react';
import { IconProps } from '../IconProps';
import ChevronDownIcon from '../arrows/ChevronDownIcon';
import { withDeprecatedMessage } from '../../utils/withDeprecatedMessage';

type Props = IconProps;

const ChevronDownSmallIcon: React.FC<Props> = withDeprecatedMessage('ChevronDownSmallIcon', ChevronDownIcon, {
    size: 20
});

export default ChevronDownSmallIcon;
