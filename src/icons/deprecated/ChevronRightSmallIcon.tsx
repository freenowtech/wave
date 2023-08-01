import React from 'react';
import { IconProps } from '../IconProps';
import { withDeprecatedMessage } from '../../utils/withDeprecatedMessage';
import ChevronRightIcon from '../arrows/ChevronRightIcon';
type Props = IconProps;

const ChevronRightSmallIcon: React.FC<Props> = withDeprecatedMessage('ChevronRightSmallIcon', ChevronRightIcon, {
    size: 20
});

export default ChevronRightSmallIcon;
