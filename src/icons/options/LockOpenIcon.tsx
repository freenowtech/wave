// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const LockOpenIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24">
            <path
                d="M12 2a6 6 0 016 6h-2a4 4 0 10-8 0v2h12v12h-2V12H6v8h10v2H4V10h2V8a6 6 0 016-6zm0 12a2 2 0 110 4 2 2 0 010-4z"
                fill="currentColor"
                fillRule="nonzero"
            />
        </svg>
    );
};

LockOpenIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default LockOpenIcon;
