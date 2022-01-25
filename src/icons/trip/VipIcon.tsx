// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const VipIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24" fill="none">
            <path d="M3 4h18v18h2V4a2 2 0 00-2-2H3a2 2 0 00-2 2v16a2 2 0 002 2h16v-2H3V4z" fill="currentColor" />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20 10a3 3 0 00-3-3h-3v10h2v-3h1a3 3 0 003-3v-1zm-4-1h1a1 1 0 011 1v1l-.007.117A1 1 0 0117 12h-1V9z"
                fill="currentColor"
            />
            <path
                d="M12.75 17V7h-2v10h2zM7 14.633L5.76 7H4l1.622 10h2.756l1.623-10H8.239l-1.24 7.633z"
                fill="currentColor"
            />
        </svg>
    );
};

VipIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default VipIcon;
