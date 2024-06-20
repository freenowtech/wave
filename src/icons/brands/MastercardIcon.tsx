// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;
const MastercardIcon: React.FC<Props> = ({ size = 'medium', ...props }) => {
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
            <path d="M15.5 18a6 6 0 100-12 6 6 0 000 12z" fill="#F79E1B" />
            <path d="M8.5 18a6 6 0 100-12 6 6 0 000 12z" fill="#EB001B" />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 7.127A5.992 5.992 0 0114.5 12a5.992 5.992 0 01-2.5 4.873A5.988 5.988 0 019.5 12a5.99 5.99 0 012.39-4.792l.11-.081z"
                fill="#FF5F00"
            />
        </svg>
    );
};
export default MastercardIcon;
