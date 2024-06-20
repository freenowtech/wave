// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';

type Props = Omit<IconProps, 'color'>;
const AF: React.FC<Props> = ({ size = 'medium', ...props }) => {
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
                <rect id="AF__a" x={0} y={0} width={28} height={20} rx={2} />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="AF__b" fill="#fff">
                    <use xlinkHref="#AF__a" />
                </mask>
                <use fill="#FFF" xlinkHref="#AF__a" />
                <path fill="#1AB11F" mask="url(#AF__b)" d="M13.333 0H28v20H13.333z" />
                <path fill="#262626" mask="url(#AF__b)" d="M0 0h9.333v20H0z" />
                <path fill="#DC0D18" mask="url(#AF__b)" d="M9.333 0h9.333v20H9.333z" />
                <path
                    d="M11.333 9.333c0 .986.535 1.847 1.33 2.308m2.772-.06a2.665 2.665 0 001.232-2.248"
                    stroke="#FFF"
                    strokeWidth={1.333}
                    opacity={0.75}
                    strokeLinecap="round"
                    mask="url(#AF__b)"
                />
                <ellipse fillOpacity={0.5} fill="#FFF" mask="url(#AF__b)" cx={14} cy={8.667} rx={1.333} ry={2} />
            </g>
        </svg>
    );
};
export default AF;
