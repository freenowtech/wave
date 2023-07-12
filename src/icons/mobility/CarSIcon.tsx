// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { getSemanticValue } from '../../utils/cssVariables';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const CarSIcon: React.FC<Props> = ({ size = 'medium', color = getSemanticValue('icon-primary-default'), ...rest }) => {
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
                d="M10.132 7H5.413L2.87 10.11c-.203.25-.335.55-.38.869l-.473 3.388c-.136.974.55 1.851 1.494 1.983a2.75 2.75 0 005.015.084h6.005a2.75 2.75 0 004.976 0h.51a1.5 1.5 0 001.489-1.689l-.258-2.03a3 3 0 00-2.31-2.547l-2.71-.616-2.649-1.96a3 3 0 00-1.784-.588h-1.663V7zm-.548 2H6.361l-1.899 2.323-.265 1.895a2.751 2.751 0 014.463 1.216h5.736a2.751 2.751 0 014.979-.592l-.111-.874a1 1 0 00-.77-.85l-3.118-.709L12.39 9.2a1 1 0 00-.595-.196h-2.21V9zm8.185 6.262a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-11.732.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
                fill="currentColor"
            />
        </svg>
    );
};
export default CarSIcon;
