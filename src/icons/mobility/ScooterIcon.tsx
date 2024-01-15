// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';

type Props = IconProps;
const ScooterIcon: React.FC<Props> = ({ size = 'medium', color = 'inherit', ...rest }) => {
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
                d="M17.802 3l2.445 11H19a4 4 0 00-4 4v1H7.829A3.001 3.001 0 012 18a3 3 0 015.83-1h5.253a6.006 6.006 0 014.698-4.876L16.198 5H14V3h3.802zM19 15a3 3 0 110 6 3 3 0 010-6zM5 17a1 1 0 100 2 1 1 0 000-2zm14 0a1 1 0 100 2 1 1 0 000-2z"
                fill="currentColor"
            />
        </svg>
    );
};
export default ScooterIcon;
