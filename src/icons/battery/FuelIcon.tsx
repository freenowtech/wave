// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';

type Props = IconProps;
const FuelIcon: React.FC<Props> = ({ size = 'medium', color = 'inherit', ...rest }) => {
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
                d="M6 5.446L1.53 2.652.47 4.348 4 6.554V7H2v7h2v4a3 3 0 003 3h2v-2H7a1 1 0 01-1-1v-4h2V7H6V5.446zM22 21H10V3h12v18zM20 5h-8v14h8V5zm-6 2h4v10h-4V7zM4 9v3h2V9H4z"
                fill="currentColor"
            />
        </svg>
    );
};
export default FuelIcon;
