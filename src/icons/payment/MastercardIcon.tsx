// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const MastercardIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24">
            <g fill="none" fillRule="evenodd">
                <circle fill="#EB001B" cx={8.5} cy={12} r={6} />
                <circle fill="#F79E1B" cx={15.5} cy={12} r={6} />
                <path
                    d="M12 7.127A5.992 5.992 0 0114.5 12a5.992 5.992 0 01-2.5 4.873A5.988 5.988 0 019.5 12a5.99 5.99 0 012.39-4.792z"
                    fill="#FF5F00"
                />
            </g>
        </svg>
    );
};

MastercardIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default MastercardIcon;
