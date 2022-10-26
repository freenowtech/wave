// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const StarSolidIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24" className="svg-inherit">
            <path
                d="M12 3l3.09 5.925 6.91.95-5 4.613L18.18 21 12 17.925 5.82 21 7 14.488 2 9.875l6.91-.95z"
                fill="currentColor"
                fillRule="nonzero"
            />
        </svg>
    );
};

StarSolidIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default StarSolidIcon;
