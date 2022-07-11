// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const MunichIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24" fill="none">
            <path
                d="M11.5 5a2.5 2.5 0 012.495 2.336L14 7.5v2.499l5.117.001L22 14.772V22l-15-.001V22H2V7.5a2.5 2.5 0 015 0v2.499h2V7.5A2.5 2.5 0 0111.5 5zM5 7.5a.5.5 0 00-.41-.492L4.5 7a.5.5 0 00-.5.5V20h1V7.5zm12.987 4.499L14 11.998V12H9v-.002l-2 .001v8h2V16a1 1 0 112 0v3.999h1.375V16.1a1.1 1.1 0 012.2 0v3.899H16V16a1 1 0 112 0v3.999h2v-4.67l-2.013-3.33zM11.5 7a.5.5 0 00-.492.41L11 7.5v2.499h1V7.5a.5.5 0 00-.325-.469l-.085-.023L11.5 7zm0-5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-7 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
                fill="currentColor"
            />
        </svg>
    );
};

MunichIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default MunichIcon;
