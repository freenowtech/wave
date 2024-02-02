// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;
const KR: React.FC<Props> = ({ size = 'medium', ...props }) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg
            {...props}
            width={sizePx}
            height={sizePx}
            id="KR__Ebene_1"
            xmlns="http://www.w3.org/2000/svg"
            x={0}
            y={0}
            viewBox="0 0 28 20"
            xmlSpace="preserve"
        >
            <style>{'.KR__st2{fill-rule:evenodd;clip-rule:evenodd;fill:#fff}'}</style>
            <path
                d="M2 0h24c1.1 0 2 .9 2 2.1V18c0 1.1-.9 2.1-2 2.1H2c-1.1 0-2-.9-2-2.1V2.1C0 .9.9 0 2 0z"
                fill="#fff"
            />
            <defs>
                <filter
                    id="KR__Adobe_OpacityMaskFilter"
                    filterUnits="userSpaceOnUse"
                    x={8.7}
                    y={5.3}
                    width={10.2}
                    height={9.3}
                >
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={8.7} y={5.3} width={10.2} height={9.3} id="KR__mask-2_1_">
                <g filter="url(#KR__Adobe_OpacityMaskFilter)">
                    <path
                        id="KR__path-1_1_"
                        className="KR__st2"
                        d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                    />
                </g>
            </mask>
            <g id="KR__Oval-9" mask="url(#KR__mask-2_1_)">
                <g transform="translate(9.333 5.333)">
                    <circle
                        cx={4.7}
                        cy={4.7}
                        r={4.7}
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#e01b41"
                        id="KR__Mask"
                    />
                    <defs>
                        <filter
                            id="KR__Adobe_OpacityMaskFilter_1_"
                            filterUnits="userSpaceOnUse"
                            x={-0.6}
                            y={3.8}
                            width={10.2}
                            height={5.5}
                        >
                            <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                        </filter>
                    </defs>
                    <mask maskUnits="userSpaceOnUse" x={-0.6} y={3.8} width={10.2} height={5.5} id="KR__mask-4_1_">
                        <g filter="url(#KR__Adobe_OpacityMaskFilter_1_)">
                            <circle id="KR__path-3_1_" className="KR__st2" cx={4.7} cy={4.7} r={4.7} />
                        </g>
                    </mask>
                    <path
                        id="KR__Rectangle-277"
                        d="M0 5.3c1.3 1.2 3.3 2 4.7 0s4-2 4.7 0c.7 2 0 4 0 4H0s-1.3-5.2 0-4z"
                        mask="url(#KR__mask-4_1_)"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#0e4b9c"
                    />
                </g>
            </g>
            <defs>
                <filter
                    id="KR__Adobe_OpacityMaskFilter_2_"
                    filterUnits="userSpaceOnUse"
                    x={4.5}
                    y={3.4}
                    width={19.1}
                    height={13.2}
                >
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={4.5} y={3.4} width={19.1} height={13.2} id="KR__mask-2_2_">
                <g filter="url(#KR__Adobe_OpacityMaskFilter_2_)">
                    <path
                        id="KR__path-1_2_"
                        className="KR__st2"
                        d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                    />
                </g>
            </mask>
            <path
                id="KR__Rectangle-278"
                d="M18.9 5.2c-.1-.2 0-.4.1-.5l.6-.3c.2-.1.4 0 .5.1l1.7 2.9c.1.2 0 .4-.1.5l-.6.3c-.2.1-.4 0-.5-.1l-1.7-2.9zm1.8-1c-.1-.2 0-.4.1-.5l.6-.3c.2-.1.4 0 .5.1l1.7 2.9c.1.2 0 .4-.1.5l-.6.3c-.2.1-.4 0-.5-.1l-1.7-2.9zM4.5 13.6c-.1-.2 0-.4.1-.5l.6-.3c.2-.1.4 0 .5.1l1.7 2.9c.1.2 0 .4-.1.5l-.6.3c-.2.1-.4 0-.5-.1l-1.7-2.9zm1.7-1c-.1-.2 0-.4.1-.5l.6-.3c.2-.1.4 0 .5.1l1.7 2.9c.1.2 0 .4-.1.5l-.6.3c-.2.1-.4 0-.5-.1l-1.7-2.9zm14.4-.7c.1-.2.3-.2.5-.1l.6.3c.2.1.2.3.1.5l-1.7 2.9c-.1.2-.3.2-.5.1l-.6-.3c-.2-.1-.2-.3-.1-.5l1.7-2.9zm1.7 1c.1-.2.3-.2.5-.1l.6.3c.2.1.2.3.1.5l-1.7 2.9c-.1.2-.3.2-.5.1l-.6-.3c-.2-.1-.2-.3-.1-.5l1.7-2.9zM6.2 3.6c.1-.2.3-.2.5-.1l.6.3c.2.1.2.3.1.5L5.7 7.1c-.1.2-.3.2-.5.1l-.6-.3c-.1-.1-.2-.3-.1-.5l1.7-2.8zm1.7 1c.1-.2.3-.3.5-.2l.6.3c.2.1.2.3.1.5L7.4 8.1c-.1.2-.3.2-.5.1l-.5-.3c-.2-.1-.3-.3-.2-.5l1.7-2.8z"
                opacity={0.75}
                mask="url(#KR__mask-2_2_)"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#262626"
                enableBackground="new"
            />
        </svg>
    );
};
export default KR;
