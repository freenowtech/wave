import React from 'react';
import { IconProps } from '../IconProps';
import { withDeprecatedMessage } from '../../utils/withDeprecatedMessage';
import DownloadIcon from '../actions/DownloadIcon';
type Props = IconProps;

const DownloadSmallIcon: React.FC<Props> = withDeprecatedMessage('DownloadSmallIcon', DownloadIcon, { size: 20 });

export default DownloadSmallIcon;
