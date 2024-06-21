// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const EducationIcon: React.FC<Props> = ({ size = 'medium', color = 'inherit', ...rest }) => {
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
                d="M12.503 2.855l11.056 6.161-4.059 2.248v5.999l-.279.29C17.647 19.193 15.385 20 12.5 20c-2.885 0-5.147-.806-6.721-2.447l-.279-.29v-5.999l-1-.555V17h-2V9.602l-1.06-.586 11.063-6.16zm4.996 9.39L12.5 15.016l-5-2.77v4.191C8.656 17.472 10.306 18 12.5 18s3.844-.528 5-1.563v-4.192zm-4.996-7.227L5.33 9.012l7.169 3.972 7.17-3.973-7.168-3.993z"
                fill="currentColor"
            />
        </svg>
    );
};
export default EducationIcon;
