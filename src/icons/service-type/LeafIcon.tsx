// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';

type Props = IconProps;
const LeafIcon: React.FC<Props> = ({ size = 'medium', color = 'inherit', ...rest }) => {
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
                d="M6.297 4A3.18 3.18 0 017 6v5a5.997 5.997 0 004 5.66v2.088A7.998 7.998 0 015 11V6c0-.582-.418-1-1-1V2h8c4.02 0 7 2.98 7 7v3c-.082 2.327-1.773 4.532-4 4.935V22h-2V11.546C13 10.01 11.32 9 9.784 9H9V7h.784C12.425 7 15 8.905 15 11.546v3.328c1.137-.402 1.957-1.699 2.001-2.944L17 9c0-2.916-2.084-5-5-5H6.297z"
                fill="currentColor"
            />
        </svg>
    );
};
export default LeafIcon;