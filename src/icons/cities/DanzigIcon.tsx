// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';

type Props = IconProps;
const DanzigIcon: React.FC<Props> = ({ size = 'medium', color = 'inherit', ...rest }) => {
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
                d="M17.519 2.334L20 5.669v8.977l3 1.85V22H1v-5.457l3-2.172v-8.7l2.47-3.338L9 5.663V8h6V5.665l2.519-3.331zM4 16.839l-1 .724V20h1v-3.162zM6.491 5.665L6 6.33V20h1V6.337l-.509-.67zM15 10H9v10h2v-3a1 1 0 112 0v3h2V10zm2.505-4.334L17 6.334V20h1V6.331l-.495-.665zM20 16.994V20h1v-2.389l-1-.617zM12 12a1 1 0 110 2 1 1 0 010-2z"
                fill="currentColor"
            />
        </svg>
    );
};
export default DanzigIcon;
