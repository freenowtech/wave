// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;
const BN: React.FC<Props> = ({ size = 'medium', ...props }) => {
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
                <rect id="BN__a" x={0} y={0} width={28} height={20} rx={2} />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="BN__b" fill="#fff">
                    <use xlinkHref="#BN__a" />
                </mask>
                <use fill="#FFF" xlinkHref="#BN__a" />
                <path fill="#F7E250" mask="url(#BN__b)" d="M0 0h28v20H0z" />
                <g mask="url(#BN__b)">
                    <path fill="#FFF" d="M-4.167 3.388l36.334 13.224 1.368-3.758L-2.799-.371z" />
                    <path fill="#262626" d="M-5.535 7.146l36.334 13.225 1.368-3.759L-4.167 3.388z" />
                </g>
            </g>
        </svg>
    );
};
export default BN;
