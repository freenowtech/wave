// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const PersonSolidIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24">
            <path
                d="M15 11a4 4 0 014 4v7H5v-7a4 4 0 014-4h6zm-3.025-9c2.196 0 3.975 1.79 3.975 4s-1.78 4-3.975 4C9.78 10 8 8.21 8 6s1.78-4 3.975-4z"
                fill="currentColor"
                fillRule="nonzero"
            />
        </svg>
    );
};

PersonSolidIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default PersonSolidIcon;
