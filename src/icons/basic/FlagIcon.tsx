// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const FlagIcon: React.FC<Props> = ({ size = 'medium', color = 'inherit', ...rest }) => {
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
                d="M6 2v1.861l1.294-.167a9 9 0 013.478.23l.375.108 1.264.396a7 7 0 003.172.238l.317-.057 4.1-.833v10.04l-3.704.756a9 9 0 01-4.107-.119l-.333-.095-1.432-.44A7 7 0 008 13.619v-2.002a8.993 8.993 0 012.262.194l.37.088.378.107 1.433.44a7 7 0 003.14.223l.313-.056 2.104-.43v-5.96l-1.701.346a9 9 0 01-3.811-.049l-.34-.085-.336-.098-1.264-.397a7 7 0 00-2.66-.298l-.336.035L6 5.878V22H4V2h2z"
                fill="currentColor"
            />
        </svg>
    );
};
export default FlagIcon;
