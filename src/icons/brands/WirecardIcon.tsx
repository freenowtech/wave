// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';

type Props = Omit<IconProps, 'color'>;
const WirecardIcon: React.FC<Props> = ({ size = 'medium', ...props }) => {
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
                d="M18 8l-2.582 9.704h-.05L13.018 8H10l-2.34 9.704h-.051L5 8H2l4 13h3l2.474-9.66h.05L14 21h3l4-13h-3z"
                fill="#112031"
            />
            <path fillRule="evenodd" clipRule="evenodd" d="M18 6h3V3h-3v3z" fill="#D4232A" />
        </svg>
    );
};
export default WirecardIcon;
