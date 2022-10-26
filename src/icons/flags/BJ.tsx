// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;

const BJ: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 28 20">
            <defs>
                <filter
                    x="-5.4%"
                    y="-14.1%"
                    width="110.7%"
                    height="128.1%"
                    filterUnits="objectBoundingBox"
                    id="BJ__c"
                >
                    <feMorphology radius={0.5} operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1" />
                    <feOffset in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" in="shadowOffsetOuter1" />
                </filter>
                <filter
                    x="-5.4%"
                    y="-16.1%"
                    width="110.7%"
                    height="132.1%"
                    filterUnits="objectBoundingBox"
                    id="BJ__e"
                >
                    <feMorphology radius={0.5} operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1" />
                    <feOffset in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" in="shadowOffsetOuter1" />
                </filter>
                <path id="BJ__d" d="M0 9.333h28V20H0z" />
                <path id="BJ__f" d="M0 0h28v9.333H0z" />
                <rect id="BJ__a" x={0} y={0} width={28} height={20} rx={2} />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="BJ__b" fill="#fff">
                    <use xlinkHref="#BJ__a" />
                </mask>
                <use fill="#FFF" xlinkHref="#BJ__a" />
                <g mask="url(#BJ__b)">
                    <use fill="#000" filter="url(#BJ__c)" xlinkHref="#BJ__d" />
                    <use fill="#F12641" xlinkHref="#BJ__d" />
                </g>
                <g mask="url(#BJ__b)">
                    <use fill="#000" filter="url(#BJ__e)" xlinkHref="#BJ__f" />
                    <use fill="#FFD648" xlinkHref="#BJ__f" />
                </g>
                <path fill="#17A668" mask="url(#BJ__b)" d="M0 0h10.667v20H0z" />
            </g>
        </svg>
    );
};

BJ.defaultProps = {};
export default BJ;
