// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const PenIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24">
            <path
                d="M18 1l5 5L7 22H2v-5L18 1zm-3 6L4 18v2h2L17 9l-2-2zm3-3l-1.5 1.5 2 2L20 6l-2-2z"
                fill="currentColor"
                fillRule="nonzero"
            />
        </svg>
    );
};

PenIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default PenIcon;
