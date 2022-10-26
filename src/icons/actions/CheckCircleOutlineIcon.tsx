// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const CheckCircleOutlineIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24" className="svg-inherit">
            <path
                d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm3.898 4.293l1.415 1.414-6.32 6.319-3.696-3.657 1.406-1.422 2.283 2.258 4.912-4.912z"
                fill="currentColor"
                fillRule="nonzero"
            />
        </svg>
    );
};

CheckCircleOutlineIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default CheckCircleOutlineIcon;
