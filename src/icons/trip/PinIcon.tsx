// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const PinIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24">
            <path
                d="M15 19.375l-1.527-1.336.373-.31 3.474-3.052a2 2 0 00.68-1.502V6a2 2 0 00-2-2H8a2 2 0 00-2 2v7.175a2 2 0 00.68 1.502l6.83 6.002L12 22l-6.634-5.805A4 4 0 014 13.185V6a4 4 0 014-4h8a4 4 0 014 4v7.185a4 4 0 01-1.366 3.01L15 19.375z"
                fill="currentColor"
                fillRule="nonzero"
            />
        </svg>
    );
};

PinIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default PinIcon;