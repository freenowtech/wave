import React from 'react';
import { IconProps } from '../IconProps';
import { withDeprecatedMessage } from '../../utils/withDeprecatedMessage';
import CalendarCheckedIcon from '../options/CalendarCheckedIcon';

type Props = IconProps;

const PrebookingIcon: React.FC<Props> = withDeprecatedMessage('PrebookingIcon', CalendarCheckedIcon);

export default PrebookingIcon;
