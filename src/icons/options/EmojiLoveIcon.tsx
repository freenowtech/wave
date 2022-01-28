// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const EmojiLoveIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24" fill="none">
            <path
                d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 2a8 8 0 100 16 8 8 0 000-16zm4.667 9L18 14.414c-1.58 1.676-3.72 2.636-6 2.636-2.181 0-4.233-.878-5.79-2.421L6 14.414 7.333 13c1.23 1.305 2.892 2.05 4.667 2.05 1.676 0 3.251-.665 4.458-1.838l.209-.212zM9.75 8c.332 0 .65.139.884.386.234.247.366.582.366.932 0 .36-.14.694-.366.932L8.5 12.5l-2.134-2.25A1.36 1.36 0 016 9.318c0-.35.132-.685.366-.932.235-.247.552-.386.884-.386.335 0 .659.148.884.392l.366.38.366-.386C9.09 8.148 9.415 8 9.75 8zm7 0c.331 0 .65.139.884.386.234.247.366.582.366.932 0 .36-.14.694-.366.932L15.5 12.5l-2.134-2.25A1.36 1.36 0 0113 9.318c0-.35.132-.685.366-.932.235-.247.553-.386.884-.386.335 0 .659.148.884.392l.366.38.366-.386c.226-.238.549-.386.884-.386z"
                fill="currentColor"
            />
        </svg>
    );
};

EmojiLoveIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default EmojiLoveIcon;