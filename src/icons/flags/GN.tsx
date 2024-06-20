// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';

type Props = Omit<IconProps, 'color'>;
const GN: React.FC<Props> = ({ size = 'medium', ...props }) => {
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
                <rect id="GN__a" x={0} y={0} width={28} height={20} rx={2} />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="GN__b" fill="#fff">
                    <use xlinkHref="#GN__a" />
                </mask>
                <use fill="#FFF" xlinkHref="#GN__a" />
                <path fill="#1DBE5E" mask="url(#GN__b)" d="M13.333 0H28v20H13.333z" />
                <path fill="#E72B42" mask="url(#GN__b)" d="M0 0h9.333v20H0z" />
                <path fill="#FFD952" mask="url(#GN__b)" d="M9.333 0h9.333v20H9.333z" />
            </g>
        </svg>
    );
};
export default GN;
