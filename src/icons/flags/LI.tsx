// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';

type Props = Omit<IconProps, 'color'>;
const LI: React.FC<Props> = ({ size = 'medium', ...props }) => {
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
                <rect id="LI__a" x={0} y={0} width={28} height={20} rx={2} />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="LI__b" fill="#fff">
                    <use xlinkHref="#LI__a" />
                </mask>
                <use fill="#FFF" xlinkHref="#LI__a" />
                <path fill="#0A3B97" mask="url(#LI__b)" d="M0 0h28v10.667H0z" />
                <path fill="#E6273E" mask="url(#LI__b)" d="M0 10.667h28V20H0z" />
            </g>
        </svg>
    );
};
export default LI;
