// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const WarningSolidIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24" fill="none" className="svg-inherit">
            <path
                d="M11.71 2l10.71 19.04H1L11.71 2zm0 13.64a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4zm1-5.8h-2v4.8h2v-4.8z"
                fill="currentColor"
            />
        </svg>
    );
};

WarningSolidIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default WarningSolidIcon;
