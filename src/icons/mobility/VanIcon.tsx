// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';

type Props = IconProps;
const VanIcon: React.FC<Props> = ({ size = 'medium', color = 'inherit', ...rest }) => {
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
            <path
                d="M16.33 3a3 3 0 012.953 2.463l.551 3.037H21.5v2H20V19h-2v2h-3v-2H9v2H6v-2H4v-8.5H2.5v-2h1.665l.553-3.037A3 3 0 017.669 3h8.662zM18 10.5H6V17h12v-6.5zM8.5 12a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm7 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm.83-7H7.67a1 1 0 00-.985.821L6.198 8.5h11.604l-.487-2.679A1 1 0 0016.33 5z"
                fill="currentColor"
            />
        </svg>
    );
};
export default VanIcon;
