// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;

const DJ: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg
            {...props}
            width={sizePx}
            height={sizePx}
            id="DJ__Ebene_1"
            x={0}
            y={0}
            viewBox="0 0 28 20"
            xmlSpace="preserve"
        >
            <style>{'.DJ__st2{fill-rule:evenodd;clip-rule:evenodd;fill:#fff}'}</style>
            <path
                d="M2 0h24c1.1 0 2 .9 2 2.1V18c0 1.1-.9 2.1-2 2.1H2c-1.1 0-2-.9-2-2.1V2.1C0 .9.9 0 2 0z"
                fill="#fff"
            />
            <defs>
                <filter
                    id="DJ__Adobe_OpacityMaskFilter"
                    filterUnits="userSpaceOnUse"
                    x={0}
                    y={10}
                    width={28}
                    height={10}
                >
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={0} y={10} width={28} height={10} id="DJ__mask-2_1_">
                <g filter="url(#DJ__Adobe_OpacityMaskFilter)">
                    <path
                        id="DJ__path-1_1_"
                        className="DJ__st2"
                        d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                    />
                </g>
            </mask>
            <path
                id="DJ__Combined-Shape"
                mask="url(#DJ__mask-2_1_)"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#1dc837"
                d="M0 20l13-10h15v10z"
            />
            <defs>
                <filter
                    id="DJ__Adobe_OpacityMaskFilter_1_"
                    filterUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={28}
                    height={10}
                >
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={0} y={0} width={28} height={10} id="DJ__mask-2_2_">
                <g filter="url(#DJ__Adobe_OpacityMaskFilter_1_)">
                    <path
                        id="DJ__path-1_2_"
                        className="DJ__st2"
                        d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                    />
                </g>
            </mask>
            <path
                mask="url(#DJ__mask-2_2_)"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#82c5f5"
                d="M0 0h28v10H13z"
            />
            <defs>
                <filter
                    id="DJ__Adobe_OpacityMaskFilter_2_"
                    filterUnits="userSpaceOnUse"
                    x={1.5}
                    y={6.7}
                    width={6.3}
                    height={6}
                >
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={1.5} y={6.7} width={6.3} height={6} id="DJ__mask-2_3_">
                <g filter="url(#DJ__Adobe_OpacityMaskFilter_2_)">
                    <path
                        id="DJ__path-1_3_"
                        className="DJ__st2"
                        d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                    />
                </g>
            </mask>
            <path
                id="DJ__Star-8"
                mask="url(#DJ__mask-2_3_)"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#e21c21"
                d="M4.7 11.3l-2 1.4.7-2.3L1.5 9l2.4-.1.8-2.2.7 2.2 2.4.1-1.9 1.4.7 2.3z"
            />
        </svg>
    );
};

DJ.defaultProps = {};
export default DJ;
