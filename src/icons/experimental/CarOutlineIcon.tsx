// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const CarOutlineIcon: React.FC<Props> = ({ size = 'medium', color = 'inherit', ...rest }) => {
    const props = { ...rest, color };
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg
            {...props}
            width={sizePx}
            height={sizePx}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M15.75 5a1.253 1.253 0 00-1.167-.833H5.417c-.584 0-1 .333-1.167.833L2.5 10v6.667c0 .416.417.833.833.833h.834c.5 0 .833-.417.833-.833v-.834h10v.834c0 .416.417.833.833.833h.834c.416 0 .833-.417.833-.833V10l-1.75-5zm-10.083.833h8.583l.917 2.5H4.833l.834-2.5zm10.166 8.334H4.167V10h11.666v4.167zM6.25 10.833c.667 0 1.25.584 1.25 1.25 0 .667-.583 1.25-1.25 1.25S5 12.75 5 12.083c0-.666.583-1.25 1.25-1.25zm7.5 0c.667 0 1.25.584 1.25 1.25 0 .667-.583 1.25-1.25 1.25s-1.25-.583-1.25-1.25c0-.666.583-1.25 1.25-1.25z"
                fill="#FCFCFC"
            />
        </svg>
    );
};
export default CarOutlineIcon;