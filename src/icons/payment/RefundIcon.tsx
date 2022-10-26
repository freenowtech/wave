// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const RefundIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24" fill="none" className="svg-inherit">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 5v2h-6.5l2.5 3h-2.5L14 6l3.5-4H20l-2.5 3H24zM2 5h10v2H6v2H4v8h14v-2h2v-3h2v7H2V5zm10 10a3 3 0 100-6 3 3 0 000 6z"
                fill="currentColor"
            />
        </svg>
    );
};

RefundIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default RefundIcon;
