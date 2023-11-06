// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;
const AE: React.FC<Props> = ({ size = 'medium', ...props }) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg
            {...props}
            width={sizePx}
            height={sizePx}
            id="AE__Ebene_1"
            xmlns="http://www.w3.org/2000/svg"
            x={0}
            y={0}
            viewBox="0 0 28 20"
            xmlSpace="preserve"
        >
            <style>{'.AE__st2{fill-rule:evenodd;clip-rule:evenodd;fill:#fff}'}</style>
            <path d="M2 0h24c1.1 0 2 .9 2 2v15.5c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z" fill="#f5f5f5" />
            <defs>
                <filter
                    id="AE__Adobe_OpacityMaskFilter"
                    filterUnits="userSpaceOnUse"
                    x={8}
                    y={0}
                    width={20}
                    height={6.7}
                >
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={8} y={0} width={20} height={6.7} id="AE__mask-2_1_">
                <g filter="url(#AE__Adobe_OpacityMaskFilter)">
                    <path
                        id="AE__path-1_1_"
                        className="AE__st2"
                        d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                    />
                </g>
            </mask>
            <path
                id="AE__Rectangle-2"
                mask="url(#AE__mask-2_1_)"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#12833b"
                d="M8 0h20v6.7H8z"
            />
            <defs>
                <filter
                    id="AE__Adobe_OpacityMaskFilter_1_"
                    filterUnits="userSpaceOnUse"
                    x={8}
                    y={13.3}
                    width={20}
                    height={6.7}
                >
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={8} y={13.3} width={20} height={6.7} id="AE__mask-2_2_">
                <g filter="url(#AE__Adobe_OpacityMaskFilter_1_)">
                    <path
                        id="AE__path-1_2_"
                        className="AE__st2"
                        d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                    />
                </g>
            </mask>
            <path
                mask="url(#AE__mask-2_2_)"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#262626"
                d="M8 13.3h20V20H8z"
            />
            <defs>
                <filter
                    id="AE__Adobe_OpacityMaskFilter_2_"
                    filterUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={8}
                    height={20}
                >
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={0} y={0} width={8} height={20} id="AE__mask-2_3_">
                <g filter="url(#AE__Adobe_OpacityMaskFilter_2_)">
                    <path
                        id="AE__path-1_3_"
                        className="AE__st2"
                        d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                    />
                </g>
            </mask>
            <path
                mask="url(#AE__mask-2_3_)"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#ff323e"
                d="M0 0h8v20H0z"
            />
        </svg>
    );
};
export default AE;
