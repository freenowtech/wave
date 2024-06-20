// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';

type Props = Omit<IconProps, 'color'>;
const SK: React.FC<Props> = ({ size = 'medium', ...props }) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg
            {...props}
            width={sizePx}
            height={sizePx}
            id="SK__Ebene_1"
            xmlns="http://www.w3.org/2000/svg"
            x={0}
            y={0}
            viewBox="0 0 28 20"
            xmlSpace="preserve"
        >
            <style>{'.SK__st2{fill-rule:evenodd;clip-rule:evenodd;fill:#fff}'}</style>
            <path d="M2 0h24c1.1 0 2 .9 2 2v15.8c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z" fill="#fff" />
            <defs>
                <filter
                    id="SK__Adobe_OpacityMaskFilter"
                    filterUnits="userSpaceOnUse"
                    x={0}
                    y={6.7}
                    width={28}
                    height={6.7}
                >
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={0} y={6.7} width={28} height={6.7} id="SK__mask-2_1_">
                <g filter="url(#SK__Adobe_OpacityMaskFilter)">
                    <path
                        id="SK__path-1_1_"
                        className="SK__st2"
                        d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                    />
                </g>
            </mask>
            <path
                id="SK__Rectangle-2"
                mask="url(#SK__mask-2_1_)"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#0c47b7"
                d="M0 6.7h28v6.7H0z"
            />
            <defs>
                <filter
                    id="SK__Adobe_OpacityMaskFilter_1_"
                    filterUnits="userSpaceOnUse"
                    x={0}
                    y={13.3}
                    width={28}
                    height={6.7}
                >
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={0} y={13.3} width={28} height={6.7} id="SK__mask-2_2_">
                <g filter="url(#SK__Adobe_OpacityMaskFilter_1_)">
                    <path
                        id="SK__path-1_2_"
                        className="SK__st2"
                        d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                    />
                </g>
            </mask>
            <path
                mask="url(#SK__mask-2_2_)"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#e53b35"
                d="M0 13.3h28V20H0z"
            />
            <defs>
                <filter
                    id="SK__Adobe_OpacityMaskFilter_2_"
                    filterUnits="userSpaceOnUse"
                    x={4.1}
                    y={2.7}
                    width={11.9}
                    height={14.7}
                >
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={4.1} y={2.7} width={11.9} height={14.7} id="SK__mask-2_3_">
                <g filter="url(#SK__Adobe_OpacityMaskFilter_2_)">
                    <path
                        id="SK__path-1_3_"
                        className="SK__st2"
                        d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                    />
                </g>
            </mask>
            <g id="SK__Rectangle-1693" mask="url(#SK__mask-2_3_)">
                <g transform="translate(4.667 4)">
                    <path
                        d="M.3 1.3c0-1.1 1-2 2.1-2h6c1.1 0 2 .9 2.1 2l.2 6c0 .9-.5 2.1-1.2 2.7l-2.1 1.8c-1.1.9-2.8.9-3.9 0L1.2 10C.5 9.4 0 8.2.1 7.3l.2-6z"
                        fill="none"
                        stroke="#fff"
                        strokeWidth={1.333}
                    />
                    <defs>
                        <filter
                            id="SK__Adobe_OpacityMaskFilter_3_"
                            filterUnits="userSpaceOnUse"
                            x={2.7}
                            y={1.3}
                            width={5.3}
                            height={8}
                        >
                            <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                        </filter>
                    </defs>
                    <mask maskUnits="userSpaceOnUse" x={2.7} y={1.3} width={5.3} height={8} id="SK__mask-4_1_">
                        <g filter="url(#SK__Adobe_OpacityMaskFilter_3_)">
                            <path
                                id="SK__path-3_1_"
                                className="SK__st2"
                                d="M.9 1.3C1 .6 1.6 0 2.3 0h6C9 0 9.7.6 9.7 1.3l.2 6c0 .7-.4 1.7-1 2.2l-2.1 1.8c-.8.7-2.2.7-3 0L1.7 9.5C1.1 9 .7 8 .7 7.3l.2-6z"
                            />
                        </g>
                    </mask>
                    <path
                        id="SK__Rectangle-1694"
                        d="M4.7 7c0-.2-.2-.3-.3-.3H3c-.2 0-.3-.1-.3-.3v-.7c0-.2.2-.3.3-.3h1.3c.2 0 .3-.1.3-.3v-.8c.1-.1-.1-.3-.3-.3h-.6c-.2 0-.4-.1-.4-.3V3c0-.2.1-.3.3-.3h.7c.2 0 .3-.1.3-.3v-.7c0-.2.1-.3.3-.3h.7c.2-.1.4.1.4.3v.7c0 .2.1.3.3.3H7c.2 0 .3.1.3.3v.7c0 .1-.1.3-.3.3h-.7c-.1 0-.3.1-.3.3V5c0 .2.2.3.3.3h1.3c.3 0 .4.2.4.4v.7c0 .2-.2.3-.3.3H6.3c-.2 0-.3.1-.3.3v2c0 .2-.1.3-.3.3H5c-.2 0-.3-.1-.3-.3V7z"
                        mask="url(#SK__mask-4_1_)"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#fff"
                    />
                    <defs>
                        <filter
                            id="SK__Adobe_OpacityMaskFilter_4_"
                            filterUnits="userSpaceOnUse"
                            x={1.3}
                            y={8.7}
                            width={8}
                            height={4.7}
                        >
                            <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                        </filter>
                    </defs>
                    <mask maskUnits="userSpaceOnUse" x={1.3} y={8.7} width={8} height={4.7} id="SK__mask-4_2_">
                        <g filter="url(#SK__Adobe_OpacityMaskFilter_4_)">
                            <path
                                id="SK__path-3_2_"
                                className="SK__st2"
                                d="M.9 1.3C1 .6 1.6 0 2.3 0h6C9 0 9.7.6 9.7 1.3l.2 6c0 .7-.4 1.7-1 2.2l-2.1 1.8c-.8.7-2.2.7-3 0L1.7 9.5C1.1 9 .7 8 .7 7.3l.2-6z"
                            />
                        </g>
                    </mask>
                    <path
                        id="SK__Oval-215"
                        d="M4.1 9.4c.2-.4.7-.7 1.2-.7s1 .3 1.2.8c1.6.3 2.8 1 2.8 1.9 0 1.1-1.8 2-4 2s-4-.9-4-2c0-1 1.2-1.7 2.8-2z"
                        mask="url(#SK__mask-4_2_)"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#1251a1"
                    />
                </g>
            </g>
        </svg>
    );
};
export default SK;
