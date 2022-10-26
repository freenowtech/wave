// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const People9Icon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24">
            <g clipPath="url(#People9Icon__clip0_2898_236156)" fill="currentColor">
                <path d="M12 11a4 4 0 014 4v7h-2v-7a2 2 0 00-2-2H6a2 2 0 00-2 2v5h8v2H2v-7a4 4 0 014-4h6zM8.975 2c2.196 0 3.975 1.79 3.975 4s-1.78 4-3.975 4C6.78 10 5 8.21 5 6s1.78-4 3.975-4zm0 2A1.988 1.988 0 007 6c0 1.107.887 2 1.975 2a1.988 1.988 0 001.975-2c0-1.107-.887-2-1.975-2zM21 1h-2a2 2 0 00-2 2v2a2 2 0 002 2h2v2h-4v2h4a2 2 0 002-2V3a2 2 0 00-2-2zm0 4h-2V3h2v2z" />
            </g>
            <defs>
                <clipPath id="People9Icon__clip0_2898_236156">
                    <path fill="#fff" d="M0 0h24v24H0z" />
                </clipPath>
            </defs>
        </svg>
    );
};

People9Icon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default People9Icon;
