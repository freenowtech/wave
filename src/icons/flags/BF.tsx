// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;
const BF: React.FC<Props> = ({ size = 'medium', ...props }) => {
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
                <rect id="BF__a" x={0} y={0} width={28} height={20} rx={2} />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="BF__b" fill="#fff">
                    <use xlinkHref="#BF__a" />
                </mask>
                <use fill="#FFF" xlinkHref="#BF__a" />
                <path fill="#00B051" mask="url(#BF__b)" d="M0 10.667h28V20H0z" />
                <path fill="#FA494B" mask="url(#BF__b)" d="M0 0h28v10.667H0z" />
                <path
                    fill="#FDD216"
                    mask="url(#BF__b)"
                    d="M14 12.227l-2.351 1.676.867-2.754-2.32-1.718 2.887-.026L14 6.667l.917 2.738 2.887.026-2.32 1.718.867 2.754z"
                />
            </g>
        </svg>
    );
};
export default BF;
