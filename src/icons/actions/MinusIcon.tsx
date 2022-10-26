// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const MinusIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 20 20" className="svg-inherit">
            <path d="M15.833 10.833V9.167H4.167v1.666z" fill="currentColor" fillRule="nonzero" />
        </svg>
    );
};

MinusIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default MinusIcon;
