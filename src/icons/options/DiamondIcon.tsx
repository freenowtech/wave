// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const DiamondIcon: React.FC<Props> = ({ size = 'medium', color = 'inherit', ...rest }) => {
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
                d="M17 2.5l5.495 6.494L22.5 9l-1.257 1.571-.007-.007L12 22 2.763 10.563l-.006.008L1.5 9 7 2.5h10zM14.505 10h-5.01L12 16.929 14.505 10zm-7.034 0H4.867l4.883 6.038L7.471 10zm11.661 0h-2.605l-2.277 6.037L19.132 10zm-9.073-5.5H7.916L4.942 8h2.597l2.52-3.5zm1.94.174L9.705 8h4.588l-2.294-3.326zm4.084-.174H13.94L16.461 8h2.596l-2.974-3.5z"
                fill="currentColor"
            />
        </svg>
    );
};
export default DiamondIcon;
