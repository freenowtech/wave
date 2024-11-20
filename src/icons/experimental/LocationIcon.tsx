// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const LocationIcon: React.FC<Props> = ({ size = 'medium', color = 'inherit', ...rest }) => {
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
                d="M10 10c.458 0 .85-.163 1.177-.49.326-.326.49-.718.49-1.177 0-.458-.164-.85-.49-1.177A1.605 1.605 0 0010 6.666c-.458 0-.85.164-1.177.49-.327.327-.49.719-.49 1.177 0 .459.163.851.49 1.177.326.327.719.49 1.177.49zm0 6.125c1.694-1.556 2.951-2.969 3.77-4.24C14.59 10.615 15 9.486 15 8.5c0-1.514-.483-2.753-1.448-3.719-.965-.965-2.15-1.448-3.552-1.448-1.403 0-2.587.483-3.552 1.448C5.483 5.747 5 6.986 5 8.5c0 .986.41 2.115 1.23 3.385.819 1.271 2.075 2.684 3.77 4.24zm0 2.208c-2.236-1.902-3.906-3.67-5.01-5.302C3.884 11.4 3.332 9.89 3.332 8.5c0-2.083.67-3.743 2.01-4.98C6.685 2.286 8.237 1.668 10 1.668c1.764 0 3.316.618 4.656 1.854 1.34 1.236 2.01 2.896 2.01 4.979 0 1.389-.552 2.9-1.656 4.531-1.104 1.632-2.774 3.4-5.01 5.302z"
                fill="#FCFCFC"
            />
        </svg>
    );
};
export default LocationIcon;
