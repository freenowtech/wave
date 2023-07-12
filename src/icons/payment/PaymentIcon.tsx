// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { getSemanticValue } from '../../utils/cssVariables';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const PaymentIcon: React.FC<Props> = ({
    size = 'medium',
    color = getSemanticValue('icon-primary-default'),
    ...rest
}) => {
    const props = { ...rest, color };
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg
            {...props}
            width={sizePx}
            height={sizePx}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14 7V5h6.5L18 2h2.5L24 6l-3.5 4H18l2.5-3H14zM2 5h10v2H6v2H4v8h14v-2h2v-3h2v7H2V5zm10 10a3 3 0 100-6 3 3 0 000 6z"
                fill="currentColor"
            />
        </svg>
    );
};
export default PaymentIcon;
