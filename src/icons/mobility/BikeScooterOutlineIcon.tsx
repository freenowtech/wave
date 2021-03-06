// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const BikeScooterOutlineIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24" fill="none">
            <path
                d="M6.5 14a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm11 0a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm-11 2a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm11 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM11 9l2 .642c.583.613 1.7 1.265 2.492 1.349l.165.009H17v2h-1.343c-1.243 0-2.112-.321-2.988-1.134l-.176-.17-.46 2.406c.726 1.143.94 2.234.964 3.6L13 18v1h-2v-1c.092-1.724-.525-2.723-1.014-3.342l-.08-.1L11 9zm3-6a3 3 0 110 6 3 3 0 010-6zm0 2a1 1 0 100 2 1 1 0 000-2z"
                fill="currentColor"
            />
        </svg>
    );
};

BikeScooterOutlineIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default BikeScooterOutlineIcon;
