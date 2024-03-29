// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;
const LR: React.FC<Props> = ({ size = 'medium', ...props }) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg
            {...props}
            width={sizePx}
            height={sizePx}
            id="LR__Ebene_1"
            xmlns="http://www.w3.org/2000/svg"
            x={0}
            y={0}
            viewBox="0 0 28 20"
            xmlSpace="preserve"
        >
            <style>{'.LR__st2{fill-rule:evenodd;clip-rule:evenodd;fill:#fff}'}</style>
            <path
                d="M2 0h24c1.1 0 2 .9 2 2.1V18c0 1.1-.9 2.1-2 2.1H2c-1.1 0-2-.9-2-2.1V2.1C0 .9.9 0 2 0z"
                fill="#fff"
            />
            <defs>
                <filter
                    id="LR__Adobe_OpacityMaskFilter"
                    filterUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={28}
                    height={18.7}
                >
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={0} y={0} width={28} height={18.7} id="LR__mask-2_1_">
                <g filter="url(#LR__Adobe_OpacityMaskFilter)">
                    <path
                        id="LR__path-1_1_"
                        className="LR__st2"
                        d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                    />
                </g>
            </mask>
            <path
                id="LR__Rectangle-537"
                d="M13.3 0H28v2.7H13.3V0zm0 5.3H28V8H13.3V5.3zm0 5.4H28v2.7H13.3v-2.7zM0 16h28v2.7H0V16z"
                mask="url(#LR__mask-2_1_)"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#e1244a"
            />
            <defs>
                <filter
                    id="LR__Adobe_OpacityMaskFilter_1_"
                    filterUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={13.3}
                    height={13.3}
                >
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={0} y={0} width={13.3} height={13.3} id="LR__mask-2_2_">
                <g filter="url(#LR__Adobe_OpacityMaskFilter_1_)">
                    <path
                        id="LR__path-1_2_"
                        className="LR__st2"
                        d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                    />
                </g>
            </mask>
            <path
                id="LR__Rectangle-1568"
                mask="url(#LR__mask-2_2_)"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#0c3f8e"
                d="M0 0h13.3v13.3H0z"
            />
            <defs>
                <filter
                    id="LR__Adobe_OpacityMaskFilter_2_"
                    filterUnits="userSpaceOnUse"
                    x={2.9}
                    y={2.7}
                    width={7.6}
                    height={7.2}
                >
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={2.9} y={2.7} width={7.6} height={7.2} id="LR__mask-2_3_">
                <g filter="url(#LR__Adobe_OpacityMaskFilter_2_)">
                    <path
                        id="LR__path-1_3_"
                        className="LR__st2"
                        d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                    />
                </g>
            </mask>
            <path
                id="LR__Star-8"
                mask="url(#LR__mask-2_3_)"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#fff"
                d="M6.7 8.2L4.3 9.9l.9-2.8-2.3-1.7h2.8l1-2.7.9 2.7h2.9L8.2 7.1 9 9.9z"
            />
        </svg>
    );
};
export default LR;
