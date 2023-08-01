// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;
const UY: React.FC<Props> = ({ size = 'medium', ...props }) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg
            {...props}
            width={sizePx}
            height={sizePx}
            id="UY__Ebene_1"
            xmlns="http://www.w3.org/2000/svg"
            x={0}
            y={0}
            viewBox="0 0 28 20"
            xmlSpace="preserve"
        >
            <style>{'.UY__st2{fill-rule:evenodd;clip-rule:evenodd;fill:#fff}'}</style>
            <path d="M2 0h24c1.1 0 2 .9 2 2v15.8c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z" fill="#fff" />
            <defs>
                <filter
                    id="UY__Adobe_OpacityMaskFilter"
                    filterUnits="userSpaceOnUse"
                    x={0}
                    y={2.7}
                    width={28}
                    height={17.3}
                >
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={0} y={2.7} width={28} height={17.3} id="UY__mask-2_1_">
                <g filter="url(#UY__Adobe_OpacityMaskFilter)">
                    <path
                        id="UY__path-1_1_"
                        className="UY__st2"
                        d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                    />
                </g>
            </mask>
            <path
                id="UY__Combined-Shape"
                d="M0 13.3h13.3V2.7H28v2.7H13.3V8H28v2.7H13.3v2.7H28V16H0v-2.7zm0 5.4h28V20H0v-1.3z"
                mask="url(#UY__mask-2_1_)"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#0e4dc5"
            />
            <defs>
                <filter
                    id="UY__Adobe_OpacityMaskFilter_1_"
                    filterUnits="userSpaceOnUse"
                    x={2.7}
                    y={2.9}
                    width={8}
                    height={7.8}
                >
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={2.7} y={2.9} width={8} height={7.8} id="UY__mask-2_2_">
                <g filter="url(#UY__Adobe_OpacityMaskFilter_1_)">
                    <path
                        id="UY__path-1_2_"
                        className="UY__st2"
                        d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                    />
                </g>
            </mask>
            <path
                id="UY__Star-28"
                d="M6.7 9.3l-.9 1.3-.2-1.5-1.4.8.5-1.5-1.6.1 1.1-1.2-1.5-.5 1.5-.6L3.1 5l1.6.1-.5-1.5 1.4.8.2-1.6.9 1.3.9-1.3.2 1.6 1.4-.8-.5 1.5 1.6-.1-1.1 1.2 1.5.6-1.5.5 1.1 1.2-1.6-.1.5 1.5-1.4-.8-.2 1.6-.9-1.4zm0 0c1.4 0 2.5-1.1 2.5-2.5S8.1 4.2 6.7 4.2 4.1 5.3 4.1 6.8s1.2 2.5 2.6 2.5zm0-.6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                mask="url(#UY__mask-2_2_)"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#fed443"
            />
        </svg>
    );
};
export default UY;
