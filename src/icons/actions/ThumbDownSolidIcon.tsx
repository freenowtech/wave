// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { getSemanticValue } from '../../utils/cssVariables';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const ThumbDownSolidIcon: React.FC<Props> = ({ size = 'medium', color = 'inherit', ...rest }) => {
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
                d="M10.624 22c-1.063 0-1.922-1.585-1.573-2.633L10.174 16H6.001a3.01 3.01 0 01-.394-.026l-.195-.032a3 3 0 01-2.353-3.53l1.2-6A3 3 0 017.2 4h7.36a3 3 0 013 3v7.276a3 3 0 01-.695 1.92l-3.937 4.725c-.57.684-1.242 1.079-2.305 1.079zm8.937-7V5h2v10h-2z"
                fill="currentColor"
            />
        </svg>
    );
};
export default ThumbDownSolidIcon;
