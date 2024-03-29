// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;
const MN: React.FC<Props> = ({ size = 'medium', ...props }) => {
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
                <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="MN__c">
                    <stop stopColor="#F8D246" offset="0%" />
                    <stop stopColor="#F9CE2F" offset="100%" />
                </linearGradient>
                <rect id="MN__a" x={0} y={0} width={28} height={20} rx={2} />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="MN__b" fill="#fff">
                    <use xlinkHref="#MN__a" />
                </mask>
                <use fill="#FFF" xlinkHref="#MN__a" />
                <path fill="#146BBC" mask="url(#MN__b)" d="M9.333 0h9.333v20H9.333z" />
                <path fill="#E43642" mask="url(#MN__b)" d="M0 0h9.333v20H0zM18.667 0H28v20h-9.333z" />
                <path
                    d="M5.333 12h1.334v4H5.333v-4zm-2.666 0H4v4H2.667v-4zM4 14.667h1.333L4.667 16 4 14.667zM4 12h1.333l-.666 1.333L4 12zm0-1.333L4.667 10l.666.667H4zM4.667 12a.667.667 0 110-1.333.667.667 0 010 1.333zm0 2.667a.667.667 0 110-1.334.667.667 0 010 1.334z"
                    fill="url(#MN__c)"
                    mask="url(#MN__b)"
                />
            </g>
        </svg>
    );
};
export default MN;
