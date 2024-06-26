// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const LightningIcon: React.FC<Props> = ({ size = 'medium', color = 'inherit', ...rest }) => {
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
                d="M15 1l-1 8h6L8 23l.448-3.586 2.749-3.235L15.652 11h-3.918l.457-3.65L7.348 13h3.918l-.376 3H8.875L9 15H3L15 1z"
                fill="currentColor"
            />
        </svg>
    );
};
export default LightningIcon;
