// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const TrophyIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 20 20">
            <path
                d="M12 2H6v9a2 2 0 002 2h4a2 2 0 002-2V0h2v2h4v6a4 4 0 01-4 4l-.125-.003A4.002 4.002 0 0112 15h-1v3h1a2 2 0 012 2H6a2 2 0 012-2h1v-3H8a4.002 4.002 0 01-3.875-3.003L4 12a4 4 0 01-4-4V2h4V0h8v2zM4 4H2v4a2 2 0 002 2V4zm14 0h-2v6l.15-.005A2 2 0 0018 8V4z"
                fillRule="nonzero"
                fill="currentColor"
            />
        </svg>
    );
};

TrophyIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default TrophyIcon;