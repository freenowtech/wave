// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const ChangeDestinationIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24" className="svg-inherit">
            <path fill="currentColor" d="M17.435 12H6v8H4V10h13.435l-4.333-5h2.676L21 11l-5.222 6h-2.676z" />
        </svg>
    );
};

ChangeDestinationIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default ChangeDestinationIcon;
