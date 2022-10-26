// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const ArrowRightIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24" className="svg-inherit">
            <path
                d="M16.435 13H4v-2h12.435l-5.333-6h2.676L20 12l-6.222 7h-2.676z"
                fill="currentColor"
                fillRule="nonzero"
            />
        </svg>
    );
};

ArrowRightIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default ArrowRightIcon;
