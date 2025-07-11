// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const TrashIcon: React.FC<Props> = ({ size = 'medium', color = 'inherit', ...rest }) => {
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
                d="M7.918 22c-1.521 0-2.441-.814-2.512-2.304L4.822 7.414h-.831C3.433 7.414 3 7.015 3 6.46c0-.546.433-.944.99-.944h3.751V4.26c0-1.447.92-2.261 2.565-2.261h3.37c1.645 0 2.574.814 2.574 2.26v1.257H20c.567 0 1 .398 1 .944 0 .554-.425.953-1 .953h-.831l-.575 12.282c-.07 1.481-1 2.304-2.512 2.304H7.918zM9.775 4.33v1.187h4.44V4.33c0-.372-.265-.598-.69-.598h-3.069c-.415 0-.68.226-.68.598zM8.183 20.068h7.625c.469 0 .77-.311.787-.831l.549-11.823H6.83l.566 11.823c.027.51.327.831.787.831zm1.23-1.256c-.407 0-.699-.268-.708-.667L8.45 9.397c-.018-.407.256-.675.69-.675.415 0 .707.26.716.666l.265 8.749c.01.398-.265.675-.707.675zm2.583 0c-.416 0-.708-.268-.708-.667V9.38c0-.399.292-.658.708-.658.424 0 .716.26.716.658v8.765c0 .399-.292.668-.716.668zm2.591 0c-.442 0-.716-.277-.707-.675l.265-8.749c.009-.407.292-.666.716-.666.425 0 .7.268.69.675l-.265 8.748c-.009.408-.292.668-.699.668z"
                fill="currentColor"
            />
        </svg>
    );
};
export default TrashIcon;
