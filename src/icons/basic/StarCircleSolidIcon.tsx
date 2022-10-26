// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const StarCircleSolidIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24" className="svg-inherit">
            <path
                d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2.74L9.866 9.063l-4.77.694 3.452 3.365-.815 4.751L12 15.63l4.267 2.243-.815-4.751 3.452-3.365-4.77-.694L12 4.74z"
                fill="currentColor"
                fillRule="nonzero"
            />
        </svg>
    );
};

StarCircleSolidIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default StarCircleSolidIcon;
