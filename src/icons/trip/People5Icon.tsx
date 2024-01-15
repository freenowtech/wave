// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';

type Props = IconProps;
const People5Icon: React.FC<Props> = ({ size = 'medium', color = 'inherit', ...rest }) => {
    const props = { ...rest, color };
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg
            {...props}
            width={sizePx}
            height={sizePx}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#People5Icon__clip0_2898_236172)" fill="currentColor">
                <path d="M12 11a4 4 0 014 4v7h-2v-7a2 2 0 00-2-2H6a2 2 0 00-2 2v5h8v2H2v-7a4 4 0 014-4h6zM8.975 2c2.196 0 3.975 1.79 3.975 4s-1.78 4-3.975 4C6.78 10 5 8.21 5 6s1.78-4 3.975-4zm0 2A1.988 1.988 0 007 6c0 1.107.887 2 1.975 2a1.988 1.988 0 001.975-2c0-1.107-.887-2-1.975-2zM23 9V7a2 2 0 00-2-2h-2V3h4V1h-6v6h4v2h-4v2h4a2 2 0 002-2z" />
            </g>
            <defs>
                <clipPath id="People5Icon__clip0_2898_236172">
                    <path fill="#fff" d="M0 0h24v24H0z" />
                </clipPath>
            </defs>
        </svg>
    );
};
export default People5Icon;
