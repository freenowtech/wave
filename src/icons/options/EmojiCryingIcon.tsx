// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const EmojiCryingIcon: React.FC<Props> = ({ size = 'medium', color = 'inherit', ...rest }) => {
    const props = { ...rest, color };
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg
            {...props}
            width={sizePx}
            height={sizePx}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7.57 20c-1.34 0-2.43-1.09-2.43-2.43 0-1.07 1.18-3.07 2.43-4.76C8.82 14.5 10 16.5 10 17.57A2.43 2.43 0 017.57 20zM12 2C6.477 2 2 6.477 2 12c0 1.75.45 3.38 1.24 4.81.16-.81.57-1.74 1.07-2.64A7.69 7.69 0 014 12a8 8 0 118 8c-.24 0-.47 0-.71-.04-.47.74-1.15 1.32-1.95 1.67.85.24 1.74.37 2.66.37 5.523 0 10-4.477 10-10A10 10 0 0012 2zm-1.19 12.12c.35.63.66 1.28.88 1.88H12c1.25 0 2.32.5 2.77 1.23l1.42-1.42C15.29 14.72 13.75 14 12 14c-.41 0-.81.04-1.19.12zM15.5 8c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5S16.3 8 15.5 8zM10 9.5C10 8.7 9.3 8 8.5 8S7 8.7 7 9.5 7.7 11 8.5 11s1.5-.7 1.5-1.5z"
                fill="currentColor"
            />
        </svg>
    );
};
export default EmojiCryingIcon;
