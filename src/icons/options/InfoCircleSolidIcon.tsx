// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const InfoCircleSolidIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24">
            <path
                d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm1 8.4h-2v6h2v-6zm-1-3.6a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"
                fill="currentColor"
                fillRule="nonzero"
            />
        </svg>
    );
};

InfoCircleSolidIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default InfoCircleSolidIcon;
