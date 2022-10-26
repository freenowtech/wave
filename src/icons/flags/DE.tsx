// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;

const DE: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 28 20">
            <defs>
                <filter
                    x="-5.4%"
                    y="-22.5%"
                    width="110.7%"
                    height="145%"
                    filterUnits="objectBoundingBox"
                    id="DE__c"
                >
                    <feMorphology radius={0.5} operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1" />
                    <feOffset in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" in="shadowOffsetOuter1" />
                </filter>
                <filter
                    x="-5.4%"
                    y="-22.5%"
                    width="110.7%"
                    height="145%"
                    filterUnits="objectBoundingBox"
                    id="DE__e"
                >
                    <feMorphology radius={0.5} operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1" />
                    <feOffset in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" in="shadowOffsetOuter1" />
                </filter>
                <path id="DE__d" d="M0 6.667h28v6.667H0z" />
                <path id="DE__f" d="M0 13.333h28V20H0z" />
                <rect id="DE__a" x={0} y={0} width={28} height={20} rx={2} />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="DE__b" fill="#fff">
                    <use xlinkHref="#DE__a" />
                </mask>
                <use fill="#FFF" xlinkHref="#DE__a" />
                <path fill="#262626" mask="url(#DE__b)" d="M0 0h28v6.667H0z" />
                <g mask="url(#DE__b)">
                    <use fill="#000" filter="url(#DE__c)" xlinkHref="#DE__d" />
                    <use fill="#F01515" xlinkHref="#DE__d" />
                </g>
                <g mask="url(#DE__b)">
                    <use fill="#000" filter="url(#DE__e)" xlinkHref="#DE__f" />
                    <use fill="#FFD521" xlinkHref="#DE__f" />
                </g>
            </g>
        </svg>
    );
};

DE.defaultProps = {};
export default DE;
