// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';

type Props = Omit<IconProps, 'color'>;
const MR: React.FC<Props> = ({ size = 'medium', ...props }) => {
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
                <rect id="MR__a" x={0} y={0} width={28} height={20} rx={2} />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="MR__b" fill="#fff">
                    <use xlinkHref="#MR__a" />
                </mask>
                <use fill="#FFF" xlinkHref="#MR__a" />
                <path fill="#108B4D" mask="url(#MR__b)" d="M0 0h28v20H0z" />
                <path
                    d="M19.814 7.733a6 6 0 11-11.852 0 6.002 6.002 0 0011.852 0zM14 8.564L12.352 9.74l.608-1.93-1.627-1.205 2.024-.018.643-1.92.643 1.92 2.024.018-1.627 1.204.608 1.931L14 8.564z"
                    fill="#FFC941"
                    mask="url(#MR__b)"
                />
            </g>
        </svg>
    );
};
export default MR;
