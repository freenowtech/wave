import React from 'react';
import { Colors } from '../../essentials';
import { IconProps } from '../IconProps';
import { withDeprecatedMessage } from '../../utils/withDeprecatedMessage';
import CalendarCheckedIcon from '../options/CalendarCheckedIcon';

type Props = IconProps;

const PrebookingIcon: React.FC<Props> = withDeprecatedMessage('PrebookingIcon', CalendarCheckedIcon);

PrebookingIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default PrebookingIcon;
