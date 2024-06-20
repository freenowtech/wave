// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';

type Props = Omit<IconProps, 'color'>;
const UZ: React.FC<Props> = ({ size = 'medium', ...props }) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg
            {...props}
            width={sizePx}
            height={sizePx}
            id="UZ__Ebene_1"
            xmlns="http://www.w3.org/2000/svg"
            x={0}
            y={0}
            viewBox="0 0 28 20"
            xmlSpace="preserve"
        >
            <style>{'.UZ__st2{fill-rule:evenodd;clip-rule:evenodd;fill:#fff}'}</style>
            <path d="M2 0h23.9c1.1 0 2 .9 2 2v15.5c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z" fill="#fff" />
            <defs>
                <filter
                    id="UZ__Adobe_OpacityMaskFilter"
                    filterUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={28}
                    height={6.7}
                >
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={0} y={0} width={28} height={6.7} id="UZ__mask-2_1_">
                <g filter="url(#UZ__Adobe_OpacityMaskFilter)">
                    <path
                        id="UZ__path-1_1_"
                        className="UZ__st2"
                        d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                    />
                </g>
            </mask>
            <path
                id="UZ__Rectangle-2"
                mask="url(#UZ__mask-2_1_)"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#04aac8"
                d="M0 0h28v6.7H0z"
            />
            <defs>
                <filter
                    id="UZ__Adobe_OpacityMaskFilter_1_"
                    filterUnits="userSpaceOnUse"
                    x={0}
                    y={13.3}
                    width={28}
                    height={6.7}
                >
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={0} y={13.3} width={28} height={6.7} id="UZ__mask-2_2_">
                <g filter="url(#UZ__Adobe_OpacityMaskFilter_1_)">
                    <path
                        id="UZ__path-1_2_"
                        className="UZ__st2"
                        d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                    />
                </g>
            </mask>
            <path
                mask="url(#UZ__mask-2_2_)"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#23c840"
                d="M0 13.3h28V20H0z"
            />
            <defs>
                <filter
                    id="UZ__Adobe_OpacityMaskFilter_2_"
                    filterUnits="userSpaceOnUse"
                    x={2.7}
                    y={1.3}
                    width={10.7}
                    height={4}
                >
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={2.7} y={1.3} width={10.7} height={4} id="UZ__mask-2_3_">
                <g filter="url(#UZ__Adobe_OpacityMaskFilter_2_)">
                    <path
                        id="UZ__path-1_3_"
                        className="UZ__st2"
                        d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                    />
                </g>
            </mask>
            <path
                id="UZ__Oval-68"
                d="M5.8 1.7h-.1c-1 0-1.7.7-1.7 1.6S4.7 5 5.7 5h.1c-.3.2-.7.3-1.1.3-1.1 0-2-.9-2-2s.9-2 2-2c.4 0 .8.2 1.1.4zm1.5 3.6c-.3 0-.6-.3-.6-.6S7 4 7.3 4s.7.3.7.7-.3.6-.7.6zM10 2.7c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7zm2.7 0c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.4.7-.7.7zm0 2.6c-.4 0-.7-.3-.7-.6s.3-.7.7-.7.7.3.7.7-.4.6-.7.6zm-2.7 0c-.4 0-.7-.3-.7-.6s.3-.7.7-.7.7.3.7.7-.3.6-.7.6z"
                mask="url(#UZ__mask-2_3_)"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#fff"
            />
        </svg>
    );
};
export default UZ;
