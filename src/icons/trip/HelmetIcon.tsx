// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const HelmetIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24" fill="none">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.34 3.356a9.153 9.153 0 0111.1 5.605l.768 2.063-6.18 1.512.001 8.456h-2l-.001-3.252-3.357-.629-.008.026-5.821-1.008-.562-2.175A8.749 8.749 0 019.34 3.356zm3.688 9.67l-1.606.394a1 1 0 00-.709.648l-.399 1.164 2.714.508v-2.714zm5.449-3.594a7.153 7.153 0 00-8.352-4.216l-.234.063a6.749 6.749 0 00-4.675 8.175l.238.925 2.868.496.5-1.455a3 3 0 011.928-1.887l.196-.055 7.603-1.862-.072-.184z"
                fill="currentColor"
            />
        </svg>
    );
};

HelmetIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default HelmetIcon;
