// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const ProfileOutlineIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24">
            <path
                d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm3 15H9a2 2 0 00-1.886 1.334l-.259-.208A7.968 7.968 0 0012 20a7.965 7.965 0 004.873-1.655l.012-.01A1.998 1.998 0 0015 17zM12 4a8 8 0 00-6.37 12.84A4.004 4.004 0 019 15h6c1.414 0 2.657.734 3.368 1.842A8 8 0 0012 4zm-.025 2c2.196 0 3.975 1.79 3.975 4s-1.78 4-3.975 4C9.78 14 8 12.21 8 10s1.78-4 3.975-4zm0 2A1.988 1.988 0 0010 10c0 1.107.887 2 1.975 2a1.988 1.988 0 001.975-2c0-1.107-.887-2-1.975-2z"
                fill="currentColor"
            />
        </svg>
    );
};

ProfileOutlineIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default ProfileOutlineIcon;
