// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;
const YE: React.FC<Props> = ({ size = 'medium', ...props }) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 20">
            <style>{'.YE__st2{fill-rule:evenodd;clip-rule:evenodd;fill:#fff}'}</style>
            <g id="YE__Ebene_1">
                <defs>
                    <filter
                        id="YE__Adobe_OpacityMaskFilter"
                        filterUnits="userSpaceOnUse"
                        x={0}
                        y={0}
                        width={28}
                        height={6.7}
                    >
                        <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                    </filter>
                </defs>
                <mask maskUnits="userSpaceOnUse" x={0} y={0} width={28} height={6.7} id="YE__mask-2_1_">
                    <g filter="url(#YE__Adobe_OpacityMaskFilter)">
                        <path
                            id="YE__path-1_1_"
                            className="YE__st2"
                            d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                        />
                    </g>
                </mask>
                <path
                    id="YE__Rectangle-2"
                    mask="url(#YE__mask-2_1_)"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#e32138"
                    d="M0 0h28v6.7H0z"
                />
                <defs>
                    <filter
                        id="YE__Adobe_OpacityMaskFilter_1_"
                        filterUnits="userSpaceOnUse"
                        x={0}
                        y={13.3}
                        width={28}
                        height={6.7}
                    >
                        <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                    </filter>
                </defs>
                <mask maskUnits="userSpaceOnUse" x={0} y={13.3} width={28} height={6.7} id="YE__mask-2_2_">
                    <g filter="url(#YE__Adobe_OpacityMaskFilter_1_)">
                        <path
                            id="YE__path-1_2_"
                            className="YE__st2"
                            d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                        />
                    </g>
                </mask>
                <path
                    mask="url(#YE__mask-2_2_)"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#262626"
                    d="M0 13.3h28V20H0z"
                />
                <path className="YE__st2" d="M.1 6.7H28v6.7H.1z" />
            </g>
        </svg>
    );
};
export default YE;
