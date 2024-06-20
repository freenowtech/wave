// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const KeyIcon: React.FC<Props> = ({ size = 'medium', color = 'inherit', ...rest }) => {
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
                d="M18.171 4.674a5.497 5.497 0 01.53 5.367l3.815 5.449-.238 4.909-5.812-.927-.053-3.553-2.737-.475-.098-2.116A5.531 5.531 0 0112 13.07v6.577c0 .893-.685 1.625-1.559 1.7l-.147.006H2.706a1.706 1.706 0 01-1.7-1.559L1 19.647V9.056c0-.89.681-1.621 1.552-1.7l.146-.006.803-.004a5 5 0 017.364-4.252 5.5 5.5 0 017.306 1.58zm-9.8 4.65L3 9.348v10.004h7V11.93A5.518 5.518 0 018.37 9.324zm4.151-4.805c.591.808.934 1.78.975 2.783a1.5 1.5 0 11-1.959-.21l-.06.048a3.015 3.015 0 00-.583-1.448 3.5 3.5 0 004.482 5.19l.194 2.263.028.604 2.79.483.05 3.53 1.95.31.096-1.995-2.418-3.452.01-.003-1.738-2.534a3.501 3.501 0 00-3.817-5.569zm-6.74 1.713a2.992 2.992 0 00-.278 1.105l2.685-.011c.09-.978.44-1.928 1.03-2.738a3 3 0 00-3.438 1.644z"
                fill="currentColor"
            />
        </svg>
    );
};
export default KeyIcon;
