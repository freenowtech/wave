// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';

type Props = IconProps;
const ClockIcon: React.FC<Props> = ({ size = 'medium', color = 'inherit', ...rest }) => {
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
                d="M12 20a8 8 0 100-16.001A8 8 0 0012 20zm0-18a10 10 0 110 20C6.47 22 2 17.5 2 12A10 10 0 0112 2zm.5 5v5.25l4.5 2.67-.75 1.23L11 13V7h1.5z"
                fill="currentColor"
            />
        </svg>
    );
};
export default ClockIcon;
