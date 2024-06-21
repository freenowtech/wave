// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const DoubleArrowUpIcon: React.FC<Props> = ({ size = 'medium', color = 'inherit', ...rest }) => {
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
                d="M19.2 12.7l-7-6.176-7 6.175v-2.676l7-6.222 7 6.222V12.7zm0 7.5l-7-6.176-7 6.175v-2.676l7-6.222 7 6.222V20.2z"
                fill="currentColor"
            />
        </svg>
    );
};
export default DoubleArrowUpIcon;
