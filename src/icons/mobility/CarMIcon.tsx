// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const CarMIcon: React.FC<Props> = ({ size = 'medium', color = 'inherit', ...rest }) => {
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.164 7H9.13a5 5 0 00-3.017 1.013L4.161 9.491l-1.252.189a1.796 1.796 0 00-1.514 1.55l-.38 3.021a1.796 1.796 0 001.781 2.02h.96a2.75 2.75 0 005.148-.11l6.865-.057a2.751 2.751 0 005.225.009h1.04A1.5 1.5 0 0023.52 14.4l-.243-1.706a3 3 0 00-2.022-2.422L18.032 9.2l-2.936-1.768a3 3 0 00-1.547-.43h-2.385V7zm-.06 2H9.131a3 3 0 00-1.81.608l-2.359 1.784-1.602.242-.332 2.637h.71a2.751 2.751 0 015.1-.109l7.044-.059a2.75 2.75 0 015.006.01h.57l-.162-1.135a1 1 0 00-.674-.807l-3.432-1.144-3.125-1.882A1 1 0 0013.549 9h-2.444V9zM7.06 15.248a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm11.323.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
                fill="currentColor"
            />
        </svg>
    );
};
export default CarMIcon;
