// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const ListIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24">
            <path
                d="M4.5 15.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM20 16v2H8v-2h12zM4.5 10.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM18 11v2H8v-2h10zM4.5 5.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM21 6v2H8V6h13z"
                fill="currentColor"
                fillRule="nonzero"
            />
        </svg>
    );
};

ListIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default ListIcon;