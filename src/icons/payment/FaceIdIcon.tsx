// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const FaceIdIcon: React.FC<Props> = ({ size = 'medium', color = 'inherit', ...rest }) => {
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
                d="M21 16.25a.75.75 0 01.75.75v1A3.75 3.75 0 0118 21.75h-1a.75.75 0 010-1.5h1A2.25 2.25 0 0020.25 18v-1a.75.75 0 01.75-.75zm-18 0a.75.75 0 01.75.75v1A2.25 2.25 0 006 20.25h1a.75.75 0 010 1.5H6A3.75 3.75 0 012.25 18v-1a.75.75 0 01.75-.75zm5.995-1.245a4.25 4.25 0 006.01 0 .75.75 0 011.06 1.06 5.75 5.75 0 01-8.13 0 .75.75 0 011.06-1.06zM12 8.25a.75.75 0 01.75.75v3.5A1.75 1.75 0 0111 14.25a.75.75 0 010-1.5.25.25 0 00.25-.25V9a.75.75 0 01.75-.75zm4 0a.75.75 0 01.75.75v2a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm-8 0a.75.75 0 01.75.75v2a.75.75 0 01-1.5 0V9A.75.75 0 018 8.25zm-1-6a.75.75 0 010 1.5H6A2.25 2.25 0 003.75 6v1a.75.75 0 01-1.5 0V6A3.75 3.75 0 016 2.25h1zm11 0A3.75 3.75 0 0121.75 6v1a.75.75 0 01-1.5 0V6A2.25 2.25 0 0018 3.75h-1a.75.75 0 010-1.5h1z"
                fill="currentColor"
            />
        </svg>
    );
};
export default FaceIdIcon;
