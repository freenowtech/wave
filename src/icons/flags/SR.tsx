// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;
const SR: React.FC<Props> = ({ size = 'medium', ...props }) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg
            {...props}
            width={sizePx}
            height={sizePx}
            id="SR__Ebene_1"
            xmlns="http://www.w3.org/2000/svg"
            x={0}
            y={0}
            viewBox="0 0 28 20"
            xmlSpace="preserve"
        >
            <style>{'.SR__st2{fill-rule:evenodd;clip-rule:evenodd;fill:#fff}'}</style>
            <path d="M2 0h24c1.1 0 2 .9 2 2v15.8c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z" fill="#fff" />
            <defs>
                <filter
                    id="SR__Adobe_OpacityMaskFilter"
                    filterUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={28}
                    height={4}
                >
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={0} y={0} width={28} height={4} id="SR__mask-2_1_">
                <g filter="url(#SR__Adobe_OpacityMaskFilter)">
                    <path
                        id="SR__path-1_1_"
                        className="SR__st2"
                        d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                    />
                </g>
            </mask>
            <path
                id="SR__Rectangle-2"
                mask="url(#SR__mask-2_1_)"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#43924c"
                d="M0 0h28v4H0z"
            />
            <defs>
                <filter
                    id="SR__Adobe_OpacityMaskFilter_1_"
                    filterUnits="userSpaceOnUse"
                    x={0}
                    y={16}
                    width={28}
                    height={4}
                >
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={0} y={16} width={28} height={4} id="SR__mask-2_2_">
                <g filter="url(#SR__Adobe_OpacityMaskFilter_1_)">
                    <path
                        id="SR__path-1_2_"
                        className="SR__st2"
                        d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                    />
                </g>
            </mask>
            <path
                mask="url(#SR__mask-2_2_)"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#43924c"
                d="M0 16h28v4H0z"
            />
            <defs>
                <filter
                    id="SR__Adobe_OpacityMaskFilter_2_"
                    filterUnits="userSpaceOnUse"
                    x={0}
                    y={6.7}
                    width={28}
                    height={6.7}
                >
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={0} y={6.7} width={28} height={6.7} id="SR__mask-2_3_">
                <g filter="url(#SR__Adobe_OpacityMaskFilter_2_)">
                    <path
                        id="SR__path-1_3_"
                        className="SR__st2"
                        d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                    />
                </g>
            </mask>
            <path
                id="SR__Rectangle-2-Copy-4"
                mask="url(#SR__mask-2_3_)"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#cd153a"
                d="M0 6.7h28v6.7H0z"
            />
            <defs>
                <filter
                    id="SR__Adobe_OpacityMaskFilter_3_"
                    filterUnits="userSpaceOnUse"
                    x={10.8}
                    y={7}
                    width={6.3}
                    height={6}
                >
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={10.8} y={7} width={6.3} height={6} id="SR__mask-2_4_">
                <g filter="url(#SR__Adobe_OpacityMaskFilter_3_)">
                    <path
                        id="SR__path-1_4_"
                        className="SR__st2"
                        d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                    />
                </g>
            </mask>
            <path
                id="SR__Star-33"
                mask="url(#SR__mask-2_4_)"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#f5d24b"
                d="M14 11.7L12 13l.7-2.2-1.9-1.5 2.4-.1L14 7l.8 2.2 2.4.1-1.9 1.5.7 2.2z"
            />
        </svg>
    );
};
export default SR;
