// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';

type Props = Omit<IconProps, 'color'>;
const TZ: React.FC<Props> = ({ size = 'medium', ...props }) => {
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
                <rect id="TZ__a" x={0} y={0} width={28} height={20} rx={2} />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="TZ__b" fill="#fff">
                    <use xlinkHref="#TZ__a" />
                </mask>
                <use fill="#FFF" xlinkHref="#TZ__a" />
                <path fill="#33CC4D" mask="url(#TZ__b)" d="M0 13.333L28 0H0z" />
                <path fill="#2DAFE4" mask="url(#TZ__b)" d="M0 20h28V6.667z" />
                <path fill="#FFD84F" mask="url(#TZ__b)" d="M3.082 22.667L30.171 5.74l-5.253-8.407L-2.171 14.26z" />
                <path fill="#262626" mask="url(#TZ__b)" d="M-.63 23.072l32.792-20.49-3.533-5.654-32.791 20.49z" />
            </g>
        </svg>
    );
};
export default TZ;
