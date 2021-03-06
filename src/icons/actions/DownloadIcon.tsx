// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const DownloadIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24">
            <path
                d="M19 19v2H5v-2h14zM13 3v10.436l5-4.445v2.676L12 17l-6-5.333V8.991l5 4.445V3h2z"
                fill="currentColor"
                fillRule="nonzero"
            />
        </svg>
    );
};

DownloadIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default DownloadIcon;
