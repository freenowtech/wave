// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;
const GH: React.FC<Props> = ({ size = 'medium', ...props }) => {
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
                <rect id="GH__a" x={0} y={0} width={28} height={20} rx={2} />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="GH__b" fill="#fff">
                    <use xlinkHref="#GH__a" />
                </mask>
                <use fill="#FFF" xlinkHref="#GH__a" />
                <path fill="#E71F37" mask="url(#GH__b)" d="M0 0h28v6.667H0z" />
                <path fill="#118B56" mask="url(#GH__b)" d="M0 13.333h28V20H0z" />
                <path fill="#FDD64C" mask="url(#GH__b)" d="M0 6.667h28v6.667H0z" />
                <path
                    fill="#262626"
                    mask="url(#GH__b)"
                    d="M14 11.612l-1.96 1.418.744-2.302-1.954-1.425 2.419-.004L14 7l.751 2.3 2.42.003-1.955 1.425.743 2.302z"
                />
            </g>
        </svg>
    );
};
export default GH;
