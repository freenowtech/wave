// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';

type Props = Omit<IconProps, 'color'>;
const SO: React.FC<Props> = ({ size = 'medium', ...props }) => {
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
                <rect id="SO__a" x={0} y={0} width={28} height={20} rx={2} />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="SO__b" fill="#fff">
                    <use xlinkHref="#SO__a" />
                </mask>
                <use fill="#FFF" xlinkHref="#SO__a" />
                <rect fill="#5D9FE9" mask="url(#SO__b)" width={28} height={20} rx={2} />
                <path
                    fill="#FFF"
                    mask="url(#SO__b)"
                    d="M14 12.34l-3.527 2.514 1.302-4.13-3.481-2.578 4.33-.04L14 4l1.375 4.107 4.331.039-3.48 2.577 1.3 4.131z"
                />
            </g>
        </svg>
    );
};
export default SO;
