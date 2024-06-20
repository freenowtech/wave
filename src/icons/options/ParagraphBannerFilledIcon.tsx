// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const ParagraphBannerFilledIcon: React.FC<Props> = ({ size = 'medium', color = 'inherit', ...rest }) => {
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
                d="M20 2v20.508l-8-3.379-8 3.379V2h16zm-7.951 3.387c-1.688 0-2.801.802-2.801 2.015 0 .744.404 1.237 1.324 1.635v.106c-.879.246-1.406.85-1.406 1.593 0 .85.574 1.389 1.934 1.793l1.113.346c.668.188.967.422.967.762 0 .48-.463.808-1.125.808-.645 0-1.143-.316-1.207-.773H9.242c.059 1.183 1.19 1.992 2.79 1.992 1.687 0 2.823-.82 2.823-2.033 0-.774-.445-1.248-1.435-1.594v-.105c.89-.223 1.488-.885 1.488-1.653 0-.814-.574-1.353-1.94-1.775l-1.228-.392c-.575-.188-.805-.402-.805-.721 0-.47.446-.786 1.108-.786.633 0 1.102.293 1.16.733h1.6c-.094-1.178-1.184-1.951-2.754-1.951zm-.346 4.172l.692.216.138.04c.49.16.77.45.77.81 0 .422-.393.791-.903.855l-.691-.216-.141-.042c-.5-.165-.785-.465-.785-.814 0-.41.405-.785.92-.85z"
                fill="currentColor"
            />
        </svg>
    );
};
export default ParagraphBannerFilledIcon;
