// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const BackwardIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24" fill="none">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.898 5l-6.175 7 6.175 7h-2.676L4 12l6.222-7h2.676zm7.5 0l-6.175 7 6.175 7h-2.676L11.5 12l6.222-7h2.676z"
                fill="currentColor"
            />
        </svg>
    );
};

BackwardIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default BackwardIcon;
