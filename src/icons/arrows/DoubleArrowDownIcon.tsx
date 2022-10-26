// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const DoubleArrowDownIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24" fill="none" className="svg-inherit">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.2 11.301l-7 6.175-7-6.175v2.676l7 6.222 7-6.222V11.3zm0-7.5l-7 6.175-7-6.175v2.676l7 6.222 7-6.222V3.8z"
                fill="currentColor"
            />
        </svg>
    );
};

DoubleArrowDownIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default DoubleArrowDownIcon;
