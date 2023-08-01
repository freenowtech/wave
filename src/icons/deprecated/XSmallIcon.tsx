import React from 'react';
import CloseIcon from '../actions/CloseIcon';
import { IconProps } from '../IconProps';
import { withDeprecatedMessage } from '../../utils/withDeprecatedMessage';

type Props = IconProps;

const XSmallIcon: React.FC<Props> = withDeprecatedMessage('XSmallIcon', CloseIcon, { size: 20 });

export default XSmallIcon;
