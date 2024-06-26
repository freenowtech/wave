// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const CheckShieldIcon: React.FC<Props> = ({ size = 'medium', color = 'inherit', ...rest }) => {
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
                d="M12 2l9 4.495v.618a16.71 16.71 0 01-6.882 13.515L12 22.168l-2.118-1.54A16.71 16.71 0 013 7.113v-.618L12 2zm0 2.236l-6.987 3.49.02.382a14.711 14.711 0 006.025 10.902l.942.685.942-.685a14.711 14.711 0 006.045-11.285L12 4.235zm3.944 3.767l1.407 1.421-5.95 5.887-3.468-3.105 1.334-1.49 2.065 1.85 4.612-4.563z"
                fill="currentColor"
            />
        </svg>
    );
};
export default CheckShieldIcon;
