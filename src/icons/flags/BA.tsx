// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';

type Props = Omit<IconProps, 'color'>;
const BA: React.FC<Props> = ({ size = 'medium', ...props }) => {
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
                <filter x="-17.3%" y="-7.5%" width="128%" height="125.9%" filterUnits="objectBoundingBox" id="BA__c">
                    <feMorphology radius={0.5} operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1" />
                    <feOffset in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" in="shadowOffsetOuter1" />
                </filter>
                <rect id="BA__a" x={0} y={0} width={28} height={20} rx={2} />
                <path id="BA__d" d="M22.667 20V0h-14z" />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="BA__b" fill="#fff">
                    <use xlinkHref="#BA__a" />
                </mask>
                <use fill="#FFF" xlinkHref="#BA__a" />
                <path fill="#0B36B2" mask="url(#BA__b)" d="M0 0h28v20H0z" />
                <g mask="url(#BA__b)">
                    <use fill="#000" filter="url(#BA__c)" xlinkHref="#BA__d" />
                    <use fill="#FFD045" xlinkHref="#BA__d" />
                </g>
                <path
                    fill="#FFF"
                    mask="url(#BA__b)"
                    d="M17.333 18.667l-.942.276.276-.943-.276-.943.942.276.943-.276L18 18l.276.943zM14.667 14.667l-.943.276L14 14l-.276-.943.943.276.942-.276-.276.943.276.943zM12 10.667l-.943.276.276-.943-.276-.943.943.276.943-.276-.276.943.276.943zM9.333 6.667l-.942.276L8.667 6l-.276-.943.942.276.943-.276L10 6l.276.943zM6.667 2.667l-.943.276L6 2l-.276-.943.943.276.942-.276L7.333 2l.276.943z"
                />
            </g>
        </svg>
    );
};
export default BA;
