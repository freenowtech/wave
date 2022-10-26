// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const DropdownSelectIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24">
            <path d="M12 16l-2.598-3-2.598-3h10.392l-2.598 3L12 16z" fill="currentColor" />
        </svg>
    );
};

DropdownSelectIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default DropdownSelectIcon;
