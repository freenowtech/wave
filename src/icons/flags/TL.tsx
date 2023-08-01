// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;
const TL: React.FC<Props> = ({ size = 'medium', ...props }) => {
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
                <rect id="TL__a" x={0} y={0} width={28} height={20} rx={2} />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="TL__b" fill="#fff">
                    <use xlinkHref="#TL__a" />
                </mask>
                <use fill="#FFF" xlinkHref="#TL__a" />
                <path fill="#FF323E" mask="url(#TL__b)" d="M0 0h28v20H0z" />
                <path fill="#FFCC51" mask="url(#TL__b)" d="M0 0l17.333 10L0 20z" />
                <path fill="#262626" mask="url(#TL__b)" d="M0 0l12 10L0 20z" />
                <path
                    fill="#FFF"
                    mask="url(#TL__b)"
                    transform="rotate(-30 5.227 9.583)"
                    d="M5.227 11.016l-1.735 1.237.64-2.032L2.42 8.953l2.13-.02.677-2.02.677 2.02 2.131.02-1.713 1.268.64 2.032z"
                />
            </g>
        </svg>
    );
};
export default TL;
