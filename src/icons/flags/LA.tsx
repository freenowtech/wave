// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;
const LA: React.FC<Props> = ({ size = 'medium', ...props }) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg
            {...props}
            width={sizePx}
            height={sizePx}
            viewBox="0 0 28 20"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <defs>
                <rect id="LA__a" x={0} y={0} width={28} height={20} rx={2} />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="LA__b" fill="#fff">
                    <use xlinkHref="#LA__a" />
                </mask>
                <use fill="#FFF" xlinkHref="#LA__a" />
                <path fill="#073A88" mask="url(#LA__b)" d="M0 5.333h28v9.333H0z" />
                <path fill="#E2273E" mask="url(#LA__b)" d="M0 0h28v5.333H0zM0 14.667h28V20H0z" />
                <circle fill="#FFF" mask="url(#LA__b)" cx={14} cy={10} r={3.333} />
            </g>
        </svg>
    );
};
export default LA;
