// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';

type Props = IconProps;
const TagFilledIcon: React.FC<Props> = ({ size = 'medium', color = 'inherit', ...rest }) => {
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
                d="M3 3h8.757a4 4 0 012.829 1.172l6 6a4 4 0 010 5.656l-4.758 4.758a4 4 0 01-5.656 0l-6-6A4 4 0 013 11.757V3zm5.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                fill="currentColor"
            />
        </svg>
    );
};
export default TagFilledIcon;