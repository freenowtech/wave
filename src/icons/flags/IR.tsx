// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';

type Props = Omit<IconProps, 'color'>;
const IR: React.FC<Props> = ({ size = 'medium', ...props }) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg
            {...props}
            width={sizePx}
            height={sizePx}
            id="IR__Ebene_1"
            xmlns="http://www.w3.org/2000/svg"
            x={0}
            y={0}
            viewBox="0 0 28 20"
            xmlSpace="preserve"
        >
            <style>{'.IR__st2{fill-rule:evenodd;clip-rule:evenodd;fill:#fff}'}</style>
            <path
                d="M2 0h24c1.1 0 2 .9 2 2.1V18c0 1.1-.9 2.1-2 2.1H2c-1.1 0-2-.9-2-2.1V2.1C0 .9.9 0 2 0z"
                fill="#fff"
            />
            <defs>
                <filter
                    id="IR__Adobe_OpacityMaskFilter"
                    filterUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={28}
                    height={6.7}
                >
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={0} y={0} width={28} height={6.7} id="IR__mask-2_1_">
                <g filter="url(#IR__Adobe_OpacityMaskFilter)">
                    <path
                        id="IR__path-1_1_"
                        className="IR__st2"
                        d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                    />
                </g>
            </mask>
            <path
                id="IR__Rectangle-2"
                mask="url(#IR__mask-2_1_)"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#38bb56"
                d="M0 0h28v6.7H0z"
            />
            <defs>
                <filter
                    id="IR__Adobe_OpacityMaskFilter_1_"
                    filterUnits="userSpaceOnUse"
                    x={0}
                    y={13.3}
                    width={28}
                    height={6.7}
                >
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={0} y={13.3} width={28} height={6.7} id="IR__mask-2_2_">
                <g filter="url(#IR__Adobe_OpacityMaskFilter_1_)">
                    <path
                        id="IR__path-1_2_"
                        className="IR__st2"
                        d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                    />
                </g>
            </mask>
            <path
                mask="url(#IR__mask-2_2_)"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#de1b27"
                d="M0 13.3h28V20H0z"
            />
            <defs>
                <filter
                    id="IR__Adobe_OpacityMaskFilter_2_"
                    filterUnits="userSpaceOnUse"
                    x={1.3}
                    y={5.3}
                    width={25.3}
                    height={9.3}
                >
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={1.3} y={5.3} width={25.3} height={9.3} id="IR__mask-2_3_">
                <g filter="url(#IR__Adobe_OpacityMaskFilter_2_)">
                    <path
                        id="IR__path-1_3_"
                        className="IR__st2"
                        d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                    />
                </g>
            </mask>
            <path
                id="IR__Rectangle-223"
                d="M1.3 5.7c0-.2.1-.3.3-.3h.7c.2 0 .3.1.3.3v.7c0 .2-.1.3-.3.3h-.6c-.2 0-.3-.1-.3-.3v-.7zm2.7 0c0-.2.1-.3.3-.3H5c.2 0 .3.1.3.3v.7c0 .2-.1.3-.3.3h-.7c-.1 0-.3-.2-.3-.4v-.6zm2.7 0c0-.2.1-.3.3-.3h.7c.1-.1.3.1.3.3v.7c0 .2-.1.3-.3.3H7c-.2 0-.3-.1-.3-.3v-.7zm2.6 0c0-.2.1-.3.3-.3h.7c.2 0 .3.1.3.3v.7c0 .2-.1.3-.3.3h-.6c-.2 0-.3-.1-.3-.3v-.7zm2.7 0c0-.2.1-.3.3-.3h.7c.2 0 .3.1.3.3v.7c0 .2-.1.3-.3.3h-.7c-.2 0-.3-.1-.3-.3v-.7zm2.7 0c0-.2.1-.3.3-.3h.7c.2 0 .3.1.3.3v.7c0 .2-.1.3-.3.3H15c-.2 0-.3-.1-.3-.3v-.7zm2.6 0c0-.2.1-.3.3-.3h.7c.2 0 .3.1.3.3v.7c0 .2-.1.3-.3.3h-.7c-.2 0-.3-.1-.3-.3v-.7zm2.7 0c0-.2.1-.3.3-.3h.7c.2 0 .3.1.3.3v.7c0 .2-.1.3-.3.3h-.7c-.2 0-.3-.1-.3-.3v-.7zm2.7 0c0-.2.1-.3.3-.3h.7c.2 0 .3.1.3.3v.7c0 .2-.1.3-.3.3H23c-.2 0-.3-.1-.3-.3v-.7zm2.6 0c0-.2.1-.3.3-.3h.7c.2 0 .3.1.3.3v.7c0 .2-.1.3-.3.3h-.7c-.2 0-.3-.1-.3-.3v-.7zm-24 8c0-.2.1-.3.3-.3h.7c.2 0 .3.1.3.3v.7c0 .2-.1.3-.3.3h-.6c-.2 0-.3-.1-.3-.3v-.7zm2.7 0c0-.2.1-.3.3-.3H5c.2 0 .3.1.3.3v.7c0 .2-.1.3-.3.3h-.7c-.2 0-.3-.1-.3-.3v-.7zm2.7 0c0-.2.1-.3.3-.3h.7c.2 0 .3.1.3.3v.7c0 .2-.1.3-.3.3H7c-.2 0-.3-.1-.3-.3v-.7zm2.6 0c0-.2.1-.3.3-.3h.7c.2 0 .3.1.3.3v.7c0 .2-.1.3-.3.3h-.6c-.2 0-.3-.1-.3-.3v-.7zm2.7 0c0-.2.1-.3.3-.3h.7c.2 0 .3.1.3.3v.7c0 .2-.1.3-.3.3h-.7c-.2 0-.3-.1-.3-.3v-.7zm2.7 0c0-.2.1-.3.3-.3h.7c.2 0 .3.1.3.3v.7c0 .2-.1.3-.3.3H15c-.2 0-.3-.1-.3-.3v-.7zm2.6 0c0-.2.1-.3.3-.3h.7c.2 0 .3.1.3.3v.7c0 .2-.1.3-.3.3h-.7c-.2 0-.3-.1-.3-.3v-.7zm2.7 0c0-.2.1-.3.3-.3h.7c.2 0 .3.1.3.3v.7c0 .2-.1.3-.3.3h-.7c-.2 0-.3-.1-.3-.3v-.7zm2.7 0c0-.2.1-.3.3-.3h.7c.2 0 .3.1.3.3v.7c0 .2-.1.3-.3.3H23c-.2 0-.3-.1-.3-.3v-.7zm2.6 0c0-.2.1-.3.3-.3h.7c.2 0 .3.1.3.3v.7c0 .2-.1.3-.3.3h-.7c-.2 0-.3-.1-.3-.3v-.7z"
                mask="url(#IR__mask-2_3_)"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#fff"
                fillOpacity={0.5}
            />
            <defs>
                <filter
                    id="IR__Adobe_OpacityMaskFilter_3_"
                    filterUnits="userSpaceOnUse"
                    x={11.7}
                    y={8.3}
                    width={4.7}
                    height={4.1}
                >
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={11.7} y={8.3} width={4.7} height={4.1} id="IR__mask-2_4_">
                <g filter="url(#IR__Adobe_OpacityMaskFilter_3_)">
                    <path
                        id="IR__path-1_4_"
                        className="IR__st2"
                        d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                    />
                </g>
            </mask>
            <path
                id="IR__Oval-1"
                d="M12.7 8.5c-.4.4-.7.9-.7 1.5 0 1.1.9 2 2 2h0c1.1 0 2-.9 2-2 0-.6-.2-1.1-.6-1.5"
                mask="url(#IR__mask-2_4_)"
                fill="none"
                stroke="#d80915"
                strokeWidth={0.667}
            />
            <defs>
                <filter
                    id="IR__Adobe_OpacityMaskFilter_4_"
                    filterUnits="userSpaceOnUse"
                    x={13.3}
                    y={9.3}
                    width={1.3}
                    height={2.7}
                >
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={13.3} y={9.3} width={1.3} height={2.7} id="IR__mask-2_5_">
                <g filter="url(#IR__Adobe_OpacityMaskFilter_4_)">
                    <path
                        id="IR__path-1_5_"
                        className="IR__st2"
                        d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                    />
                </g>
            </mask>
            <path
                id="IR__Rectangle-243"
                d="M14 9.3c.4 0 .7.3.7.7v1.3c0 .4-.3.7-.7.7-.4 0-.7-.3-.7-.7V10c0-.4.3-.7.7-.7z"
                mask="url(#IR__mask-2_5_)"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#d80915"
            />
        </svg>
    );
};
export default IR;
