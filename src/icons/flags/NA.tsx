// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;
const NA: React.FC<Props> = ({ size = 'medium', ...props }) => {
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
                <rect id="NA__a" x={0} y={0} width={28} height={20} rx={2} />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="NA__b" fill="#fff">
                    <use xlinkHref="#NA__a" />
                </mask>
                <use fill="#FFF" xlinkHref="#NA__a" />
                <path fill="#0C4799" mask="url(#NA__b)" d="M0 13.333L28 0H0z" />
                <path
                    fill="#FFD243"
                    mask="url(#NA__b)"
                    d="M4.667 6l-1.02 1.13.077-1.52-1.521.077 1.13-1.02-1.13-1.02 1.52.077-.077-1.521 1.02 1.13 1.021-1.13-.078 1.52 1.521-.077L6 4.666l1.13 1.021-1.52-.078.077 1.521z"
                />
                <path fill="#1BAC55" mask="url(#NA__b)" d="M0 20h28V6.667z" />
                <path fill="#FFF" mask="url(#NA__b)" d="M3.082 22.667L30.171 5.74l-5.253-8.407L-2.171 14.26z" />
                <path fill="#E52347" mask="url(#NA__b)" d="M-.63 23.072l32.792-20.49-3.533-5.654-32.791 20.49z" />
            </g>
        </svg>
    );
};
export default NA;
