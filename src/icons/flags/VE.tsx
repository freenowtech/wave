// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';

type Props = Omit<IconProps, 'color'>;
const VE: React.FC<Props> = ({ size = 'medium', ...props }) => {
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
                <rect id="VE__a" x={0} y={0} width={28} height={20} rx={2} />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="VE__b" fill="#fff">
                    <use xlinkHref="#VE__a" />
                </mask>
                <use fill="#FFF" xlinkHref="#VE__a" />
                <path fill="#063191" mask="url(#VE__b)" d="M0 6.667h28v6.667H0z" />
                <path fill="#E2213B" mask="url(#VE__b)" d="M0 13.333h28V20H0z" />
                <path
                    d="M14 9.333A.667.667 0 1114 8a.667.667 0 010 1.333zM11.333 10a.667.667 0 110-1.333.667.667 0 010 1.333zm5.334 0a.667.667 0 110-1.333.667.667 0 010 1.333zM10 12a.667.667 0 110-1.333A.667.667 0 0110 12zm8 0a.667.667 0 110-1.333A.667.667 0 0118 12z"
                    fill="#FFF"
                    mask="url(#VE__b)"
                />
                <path fill="#FFD044" mask="url(#VE__b)" d="M0 0h28v6.667H0z" />
            </g>
        </svg>
    );
};
export default VE;
