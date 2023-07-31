import React from 'react';
import { IconProps } from '../IconProps';
import { withDeprecatedMessage } from '../../utils/withDeprecatedMessage';
import ListIcon from '../options/ListIcon';
type Props = IconProps;

const ListUnorderedIcon: React.FC<Props> = withDeprecatedMessage('ListUnorderedIcon', ListIcon);

export default ListUnorderedIcon;
