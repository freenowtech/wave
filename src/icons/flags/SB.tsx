// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;
const SB: React.FC<Props> = ({ size = 'medium', ...props }) => {
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
                <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SB__b">
                    <stop stopColor="#1DBE4F" offset="0%" />
                    <stop stopColor="#159B3F" offset="100%" />
                </linearGradient>
                <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SB__f">
                    <stop stopColor="#0660D4" offset="0%" />
                    <stop stopColor="#0051BB" offset="100%" />
                </linearGradient>
                <filter
                    x="-5.4%"
                    y="-7.5%"
                    width="118.3%"
                    height="119.7%"
                    filterUnits="objectBoundingBox"
                    id="SB__d"
                >
                    <feMorphology radius={0.5} operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1" />
                    <feOffset in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" in="shadowOffsetOuter1" />
                </filter>
                <rect id="SB__a" x={0} y={0} width={28} height={20} rx={2} />
                <path id="SB__e" d="M0 0h28L0 20z" />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="SB__c" fill="#fff">
                    <use xlinkHref="#SB__a" />
                </mask>
                <use fill="#FFF" xlinkHref="#SB__a" />
                <path fill="url(#SB__b)" mask="url(#SB__c)" d="M0 0h28v20H0z" />
                <g mask="url(#SB__c)">
                    <use fill="#000" filter="url(#SB__d)" xlinkHref="#SB__e" />
                    <use fill="url(#SB__f)" xlinkHref="#SB__e" />
                </g>
                <path fill="#2C7442" mask="url(#SB__c)" transform="matrix(-1 0 0 1 28 0)" d="M0 0l28 20H0z" />
                <path fill="#FFD646" mask="url(#SB__c)" d="M-5.333 8.667h38.666v2.666H-5.333z" />
                <path
                    d="M3 3.833l-.98.515.187-1.09-.792-.773 1.095-.16.49-.992.49.993 1.095.159-.792.773.187 1.09L3 3.833zm6.667 0l-.98.515.187-1.09-.792-.773 1.095-.16.49-.992.49.993 1.095.159-.793.773.187 1.09-.98-.515zm0 4l-.98.515.187-1.09-.792-.773 1.095-.16.49-.992.49.993 1.095.159-.793.773.187 1.09-.98-.515zM3 7.833l-.98.515.187-1.09-.792-.773 1.095-.16.49-.992.49.993 1.095.159-.792.773.187 1.09L3 7.833zm3.333-2l-.98.515.188-1.09-.793-.773 1.096-.16.49-.992.49.993 1.094.159-.792.773.187 1.09-.98-.515z"
                    fill="#FFF"
                    mask="url(#SB__c)"
                />
            </g>
        </svg>
    );
};
export default SB;
