import React from 'react';
import { Colors } from '../../essentials';
import { IconProps } from '../IconProps';
import { withDeprecatedMessage } from '../../utils/withDeprecatedMessage';
import { DownloadIcon } from '../basic';
type Props = IconProps;

const DownloadSmallIcon: React.FC<Props> = withDeprecatedMessage('DownloadSmallIcon', DownloadIcon, { size: 20 });

DownloadSmallIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default DownloadSmallIcon;
