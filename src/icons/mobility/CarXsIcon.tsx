// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const CarXsIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24" fill="none" className="svg-inherit">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 7.22v2h.838l-.617 5.914a1.501 1.501 0 001.034 1.584 2.5 2.5 0 004.306.076h2.791a2.5 2.5 0 004.393-.209 1.5 1.5 0 001.166-1.462V13.07a3 3 0 00-2.064-2.85l-1.12-.368-1.486-1.644a3 3 0 00-2.226-.989H5zm2.85 2l-.415 3.972a2.501 2.501 0 013.398 1.602h2.261a2.501 2.501 0 013.817-1.352v-.37a1 1 0 00-.688-.951l-1.625-.534-1.84-2.037a1 1 0 00-.743-.33H7.85zm.58 6.766a.5.5 0 100-1 .5.5 0 000 1zm7.063.015a.5.5 0 100-1 .5.5 0 000 1z"
                fill="currentColor"
            />
        </svg>
    );
};

CarXsIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default CarXsIcon;
