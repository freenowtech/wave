// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;
const CD: React.FC<Props> = ({ size = 'medium', ...props }) => {
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
                <rect id="CD__a" x={0} y={0} width={28} height={20} rx={2} />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="CD__b" fill="#fff">
                    <use xlinkHref="#CD__a" />
                </mask>
                <use fill="#FFF" xlinkHref="#CD__a" />
                <rect fill="#158AFF" mask="url(#CD__b)" width={28} height={20} rx={2} />
                <path
                    fill="#FDD216"
                    mask="url(#CD__b)"
                    transform="rotate(153 13.317 10.418)"
                    d="M-6.016 6.418H32.65v8H-6.016z"
                />
                <path
                    fill="#CE1120"
                    mask="url(#CD__b)"
                    transform="rotate(153 13.685 10.175)"
                    d="M-5.648 7.508h38.666v5.334H-5.648z"
                />
                <path
                    fill="#FDD216"
                    mask="url(#CD__b)"
                    d="M4.667 5.967l-1.96 1.396.723-2.295-1.934-1.431 2.407-.022.764-2.282.764 2.282 2.406.022-1.934 1.431.723 2.295z"
                />
            </g>
        </svg>
    );
};
export default CD;
