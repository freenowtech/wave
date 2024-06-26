// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const BlockIcon: React.FC<Props> = ({ size = 'medium', color = 'inherit', ...rest }) => {
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
                d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm8 10c0-4.42-3.58-8-8-8-1.85 0-3.55.63-4.9 1.69L18.31 16.9A7.902 7.902 0 0020 12zm-8 8c1.85 0 3.55-.63 4.9-1.69L5.69 7.1A7.902 7.902 0 004 12c0 4.42 3.58 8 8 8z"
                fill="currentColor"
            />
        </svg>
    );
};
export default BlockIcon;
