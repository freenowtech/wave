// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;
const HT: React.FC<Props> = ({ size = 'medium', ...props }) => {
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
                <rect id="HT__a" x={0} y={0} width={28} height={20} rx={2} />
                <rect id="HT__c" x={0} y={0} width={9.333} height={8} rx={0.667} />
                <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="HT__d">
                    <stop stopColor="#FFF" offset="0%" />
                    <stop stopColor="#F0F0F0" offset="100%" />
                </linearGradient>
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="HT__b" fill="#fff">
                    <use xlinkHref="#HT__a" />
                </mask>
                <use fill="#FFF" xlinkHref="#HT__a" />
                <path fill="#112EBC" mask="url(#HT__b)" d="M0 0h28v9.333H0z" />
                <path fill="#E3264A" mask="url(#HT__b)" d="M0 9.333h28V20H0z" />
                <g mask="url(#HT__b)">
                    <g transform="translate(9.333 6.667)">
                        <mask id="HT__e" fill="#fff">
                            <use xlinkHref="#HT__c" />
                        </mask>
                        <use fill="url(#HT__d)" xlinkHref="#HT__c" />
                        <path
                            d="M.333 6.873v.794H9v-.794l-1.29-.645c-.608-.305-1.694-.561-2.375-.561H3.999c-.688 0-1.762.254-2.376.56l-1.29.646z"
                            stroke="#366C14"
                            strokeWidth={0.667}
                            fill="#AABCAE"
                            mask="url(#HT__e)"
                        />
                        <circle fill="#D4B872" mask="url(#HT__e)" cx={4.667} cy={3.333} r={2} />
                        <path
                            d="M1.667 4.027v1.965a.34.34 0 00.33.341h5.34a.34.34 0 00.33-.34V4.026L5.396 5.844a1.212 1.212 0 01-1.458 0L1.667 4.027z"
                            stroke="#0D3488"
                            strokeWidth={0.667}
                            fill="#C28321"
                            mask="url(#HT__e)"
                        />
                        <path
                            d="M2.896 1.563c-.127-.127-.077-.23.112-.23h3.318c.188 0 .233.108.111.23l-1.54 1.54a.329.329 0 01-.46 0l-1.54-1.54z"
                            fill="#216C30"
                            mask="url(#HT__e)"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};
export default HT;
