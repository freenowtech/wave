// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const WroclawIcon: React.FC<Props> = ({ size = 'medium', color = 'inherit', ...rest }) => {
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
                d="M18.52 1.073L22 6.84V22H2V6.833l3.566-5.76L9 6.843v5.383l3.099-2.528L15 12.168V6.837l3.52-5.764zM5.531 4.926L4 7.402V20h3V7.394L5.532 4.926zm12.977 0L17 7.397V20h3V7.397l-1.491-2.47zm-6.438 7.375L9 14.808V20h2v-3a1 1 0 112 0v3h2v-5.205l-2.929-2.494zm-6.571 3.7a.5.5 0 01.5.5V18H5v-1.5a.5.5 0 01.5-.5zm13 0a.5.5 0 01.5.5V18h-1v-1.5a.5.5 0 01.5-.5zm-13-4a.5.5 0 01.5.5V14H5v-1.5a.5.5 0 01.5-.5zm13 0a.5.5 0 01.5.5V14h-1v-1.5a.5.5 0 01.5-.5zm-13-4a.5.5 0 01.5.5V10H5V8.5a.5.5 0 01.5-.5zm13 0a.5.5 0 01.5.5V10h-1V8.5a.5.5 0 01.5-.5z"
                fill="currentColor"
            />
        </svg>
    );
};
export default WroclawIcon;
