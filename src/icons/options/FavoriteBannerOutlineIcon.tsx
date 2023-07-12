// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { getSemanticValue } from '../../utils/cssVariables';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const FavoriteBannerOutlineIcon: React.FC<Props> = ({
    size = 'medium',
    color = getSemanticValue('icon-primary-default'),
    ...rest
}) => {
    const props = { ...rest, color };
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M20 2v20l-8-3.285L4 22V2h16zm-2 2H6v15.017l6-2.464 6 2.464V4zm-6 1.87l1.508 3.055 3.37.49-2.439 2.378.576 3.357L12 13.565 8.985 15.15l.576-3.357-2.44-2.378 3.371-.49L12 5.87z"
                fill="currentColor"
                fillRule="nonzero"
            />
        </svg>
    );
};
export default FavoriteBannerOutlineIcon;
