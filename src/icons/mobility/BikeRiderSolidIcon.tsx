// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const BikeRiderSolidIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24" fill="none" className="svg-inherit">
            <path
                d="M16.79 4l1.789 7.512a4.25 4.25 0 11-1.98.32l-.318-1.334-4.8 6.002H9.434A4.251 4.251 0 011 15.75a4.25 4.25 0 017.261-3l-1-3.25H5v-2h3.739l2.049 6.663 4.905-6.131L15.21 6H13V4h3.79z"
                fill="currentColor"
            />
        </svg>
    );
};

BikeRiderSolidIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default BikeRiderSolidIcon;
