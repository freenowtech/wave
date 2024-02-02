// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;
const TN: React.FC<Props> = ({ size = 'medium', ...props }) => {
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
                <rect id="TN__a" x={0} y={0} width={28} height={20} rx={2} />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="TN__b" fill="#fff">
                    <use xlinkHref="#TN__a" />
                </mask>
                <use fill="#FFF" xlinkHref="#TN__a" />
                <path fill="#E92434" mask="url(#TN__b)" d="M0 0h28v20H0z" />
                <path
                    d="M15.811 5.698a4.667 4.667 0 100 8.604 4.334 4.334 0 010-8.604zM14 16a6 6 0 110-12 6 6 0 010 12zm2.354-4.83l1.803.674-1.033-1.624 1.197-1.507-1.863.482-1.063-1.605-.118 1.921-1.855.515 1.79.706-.083 1.923 1.225-1.485z"
                    fill="#FFF"
                    mask="url(#TN__b)"
                />
            </g>
        </svg>
    );
};
export default TN;
