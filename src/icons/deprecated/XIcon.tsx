import React from 'react';
import { IconProps } from '../IconProps';
import { withDeprecatedMessage } from '../../utils/withDeprecatedMessage';
import CloseIcon from '../actions/CloseIcon';
type Props = IconProps;

const XIcon: React.FC<Props> = withDeprecatedMessage('XIcon', CloseIcon);

export default XIcon;
