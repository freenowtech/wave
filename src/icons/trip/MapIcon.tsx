// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const MapIcon: React.FC<Props> = ({ size = 'medium', color = 'inherit', ...rest }) => {
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
                d="M22 3v12.411l-2 .473V5.574l-4.001 1.022v12.32L20 17.908v-.001l2-.504v2.064l-7.372 1.858-5.317-1.6L2 21.57V5.111l7.289-1.86 5.461 1.6L22 3zM10 5.543v12.3l3.999 1.204V6.715L10 5.543zm-2 .1L4 6.664v12.34l4-1.011V5.643z"
                fill="currentColor"
            />
        </svg>
    );
};
export default MapIcon;
