// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const ScooterOutlineIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24" className="svg-inherit">
            <path
                d="M17.802 3l2.445 11H19a4 4 0 00-4 4v1H7.829a3.001 3.001 0 110-2h5.254a6.006 6.006 0 014.698-4.876L16.198 5H14V3h3.802zM19 15a3 3 0 110 6 3 3 0 010-6zM5 17a1 1 0 100 2 1 1 0 000-2zm14 0a1 1 0 100 2 1 1 0 000-2z"
                fill="currentColor"
                fillRule="nonzero"
            />
        </svg>
    );
};

ScooterOutlineIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default ScooterOutlineIcon;
