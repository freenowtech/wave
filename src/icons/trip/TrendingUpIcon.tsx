// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { getSemanticValue } from '../../utils/cssVariables';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const TrendingUpIcon: React.FC<Props> = ({
    size = 'medium',
    color = getSemanticValue('foreground-primary'),
    ...rest
}) => {
    const props = { ...rest, color };
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg
            {...props}
            width={sizePx}
            height={sizePx}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z" fill="currentColor" />
        </svg>
    );
};
export default TrendingUpIcon;
