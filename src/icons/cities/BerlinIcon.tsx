// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const BerlinIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24" fill="none" className="svg-inherit">
            <path
                d="M17 7v2h5v2h-1v8h1v2H2v-2h1v-8H2V9h5V7h10zm2 4h-2v8h2v-8zm-4 0H9v8h6v-8zm-8 0H5v8h2v-8zm5-9a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
                fill="currentColor"
            />
        </svg>
    );
};

BerlinIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default BerlinIcon;
