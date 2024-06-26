// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;
const BM: React.FC<Props> = ({ size = 'medium', ...props }) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg
            {...props}
            width={sizePx}
            height={sizePx}
            viewBox="0 0 28 20"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <defs>
                <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="BM__e">
                    <stop stopColor="#E20B0C" offset="0%" />
                    <stop stopColor="#D40001" offset="100%" />
                </linearGradient>
                <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="BM__f">
                    <stop stopColor="#DB1E36" offset="0%" />
                    <stop stopColor="#D51931" offset="100%" />
                </linearGradient>
                <rect id="BM__a" x={0} y={0} width={28} height={20} rx={2} />
                <path d="M0 3.333V0h5.333v3.333c0 2-2.666 3.334-2.666 3.334S0 5.333 0 3.333z" id="BM__c" />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="BM__b" fill="#fff">
                    <use xlinkHref="#BM__a" />
                </mask>
                <use fill="#FFF" xlinkHref="#BM__a" />
                <path fill="#DC1F37" mask="url(#BM__b)" d="M0 0h28v20H0z" />
                <path fill="#042C90" mask="url(#BM__b)" d="M0 0h12v9.333H0z" />
                <g mask="url(#BM__b)">
                    <g transform="translate(17.333 6.667)">
                        <mask id="BM__d" fill="#fff">
                            <use xlinkHref="#BM__c" />
                        </mask>
                        <use fill="#FFF" xlinkHref="#BM__c" />
                        <circle fill="#65B5D2" mask="url(#BM__d)" cx={2.667} cy={4} r={1.333} />
                        <path
                            d="M2.667 2.667a.667.667 0 110-1.334.667.667 0 010 1.334zM1.333 4a.667.667 0 110-1.333.667.667 0 010 1.333zM4 4a.667.667 0 110-1.333A.667.667 0 014 4z"
                            fill="url(#BM__e)"
                            mask="url(#BM__d)"
                        />
                        <path fill="#2F8F22" mask="url(#BM__d)" d="M0 5.333h5.333v1.333H0z" />
                    </g>
                </g>
                <path
                    d="M4.333 4.153L-.9-.333H.667l.193.062L5.44 3h1.131l5.762-3.601v.934c0 .296-.17.627-.417.803l-4.25 3.036V5.18l4.3 3.685c.377.323.185.802-.3.802-.257 0-.588-.107-.804-.261L6.56 6.333H5.429L-.333 9.935v-1.44l4.666-3.333V4.153z"
                    stroke="#FFF"
                    strokeWidth={0.667}
                    fill="#DB1E36"
                    mask="url(#BM__b)"
                />
                <path
                    d="M0 3.333V6h4.667v3.34c0 .364.306.66.673.66h1.32a.67.67 0 00.673-.66V6h4.658a.677.677 0 00.676-.673v-1.32a.674.674 0 00-.676-.674H7.333V0H4.667v3.333H0z"
                    fill="#FFF"
                    mask="url(#BM__b)"
                />
                <path
                    fill="url(#BM__f)"
                    mask="url(#BM__b)"
                    d="M0 4h5.333V0h1.334v4H12v1.333H6.667v4H5.333v-4H0z"
                />
            </g>
        </svg>
    );
};
export default BM;
