// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const PlusCircleSolidIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24">
            <path
                d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm1 5.5h-2V11H7.5v2H11v3.5h2V13h3.5v-2H13V7.5z"
                fill="currentColor"
                fillRule="nonzero"
            />
        </svg>
    );
};

PlusCircleSolidIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default PlusCircleSolidIcon;
