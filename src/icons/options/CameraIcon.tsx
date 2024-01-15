// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';

type Props = IconProps;
const CameraIcon: React.FC<Props> = ({ size = 'medium', color = 'inherit', ...rest }) => {
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
                d="M15.5 3l2.738 2.666h1.035c1.988 0 3.619 1.533 3.722 3.474l.005.196v7.995C23 19.358 21.328 21 19.281 21H4.72C2.667 21 1 19.363 1 17.33V9.337c0-2.034 1.67-3.67 3.727-3.67h1.034L8.5 3h7zm-.804 2H9.303L6.577 7.667h-1.85C3.765 7.667 3 8.416 3 9.336v7.995C3 18.25 3.764 19 4.719 19H19.28c.95 0 1.719-.755 1.719-1.67V9.337c0-.919-.767-1.67-1.727-1.67h-1.85L14.697 5zM12 8.333c2.556 0 4.636 2.035 4.636 4.556 0 2.52-2.08 4.555-4.636 4.555S7.364 15.41 7.364 12.89 9.444 8.333 12 8.333zm0 2c-1.461 0-2.636 1.15-2.636 2.556 0 1.406 1.175 2.555 2.636 2.555s2.636-1.149 2.636-2.555c0-1.406-1.175-2.556-2.636-2.556z"
                fill="currentColor"
            />
        </svg>
    );
};
export default CameraIcon;
