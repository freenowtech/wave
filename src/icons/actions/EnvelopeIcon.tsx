// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';

type Props = IconProps;
const EnvelopeIcon: React.FC<Props> = ({ size = 'medium', color = 'inherit', ...rest }) => {
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
                d="M22 5v14H2V5h20zm-2 3.249L15 12a5 5 0 01-6 0L4 8.249V17h16V8.249zM18.332 7H5.668l4.532 3.4a3 3 0 003.6 0L18.332 7z"
                fill="currentColor"
            />
        </svg>
    );
};
export default EnvelopeIcon;
