// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const CrosshairOnIcon: React.FC<Props> = ({ size = 'medium', color = 'inherit', ...rest }) => {
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
            <path d="M9 9h6v6H9V9z" fill="currentColor" />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13 1h-2v2h1a9 9 0 00-9 9v-1H1v2h2v-1a9 9 0 009 9h-1v2h2v-2h-1a9 9 0 009-9v1h2v-2h-2v1a9 9 0 00-9-9h1V1zm6 11a7 7 0 11-14 0 7 7 0 0114 0z"
                fill="currentColor"
            />
        </svg>
    );
};
export default CrosshairOnIcon;
