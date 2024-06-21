// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const TagIcon: React.FC<Props> = ({ size = 'medium', color = 'inherit', ...rest }) => {
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
                d="M11.757 3a4 4 0 012.829 1.172l6 6a4 4 0 010 5.656l-4.758 4.758a4 4 0 01-5.656 0l-6-6A4 4 0 013 11.757V7h2v4.757a2 2 0 00.586 1.415l6 6a2 2 0 002.828 0l4.758-4.758a2 2 0 000-2.828l-6-6A2 2 0 0011.757 5H3V3h8.757zM8.5 7a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
                fill="currentColor"
            />
        </svg>
    );
};
export default TagIcon;
